import { Request, Response, Router } from 'express';
import { check } from 'express-validator';
import auth from '../../middleware/auth';
import { validateInputs } from './utils';
import School from '../../models/School';

const router = Router();

// @route   POST api/school
// @desc    Create school
// @access  Private
router.post(
  '/',
  auth,
  [
    check('name', "Name of the school can't be empty").notEmpty(),
    check('address', "Address of the school can't be empty").notEmpty(),
    check('contact', "Contact of the school can't be empty").notEmpty(),
  ],
  async (req: Request, res: Response) => {
    validateInputs(req, res);

    const { name, address, contact } = req.body;

    try {
      let school = await School.findOne({ name });

      if (school)
        res
          .status(400)
          .json({ errors: [{ msg: 'School with this name already exists' }] });

      school = new School({
        name,
        address,
        contact,
      });

      await school.save();

      res.send(`Registered school ${school.name}`);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

export default router;
