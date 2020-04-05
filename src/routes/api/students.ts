import { genSalt, hash } from 'bcrypt';
import { Request, Response, Router } from 'express';
import { check } from 'express-validator';
import auth from '../../middleware/auth';
import { Student } from '../../models/Student';
import { validateInputs } from './utils';

const router = Router();

// @route   GET api/students
// @desc    Get all students - TEMP!!!
// @access  Public
router.get('/', async (req: Request, res: Response) => {
  const students = await Student.find();

  if (!students)
    return res.status(404).json({ errors: [{ msg: 'Students not found' }] });

  return res.send(students);
});

// @route   GET api/students/:id
// @desc    Get student
// @access  Private
router.get('/:id', auth, async (req: Request, res: Response) => {
  const { id } = req.params;

  const student = await Student.findById(id);

  if (!student)
    return res.status(404).json({ errors: [{ msg: 'Student not found' }] });

  return res.send(student);
});

// @route   POST api/students
// @desc    Create student
// @access  Private
router.post(
  '/',
  auth,
  [
    check('firstName', "First name can't be empty").notEmpty(),
    check('lastName', "Last name can't be empty").notEmpty(),
    check('username', 'Username must conist of at least 8 letters').isLength({
      min: 8,
    }),
    check('password', 'Password must consist of at least 6 symbols').isLength({
      min: 6,
    }),
    check('school', 'Student must be assigned to a school'),
  ],
  async (req: Request, res: Response) => {
    validateInputs(req, res);

    const { firstName, lastName, username, password, school } = req.body;

    try {
      let student = await Student.findOne({ username });

      if (student) {
        return res.status(400).json({
          errors: [{ msg: 'Student with this username already exist' }],
        });
      }

      student = new Student({
        firstName,
        lastName,
        username,
        password,
        school,
      });

      const salt = await genSalt(10);
      student.password = await hash(password, salt);

      await student.save();

      res.send(`Registered ${student.firstName}`);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

export default router;
