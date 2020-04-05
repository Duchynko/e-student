import { Request, Response, Router } from 'express';
import { check } from 'express-validator';
import auth from '../../middleware/auth';
import User from '../../models/User';
import { respondWithPayload, validateInputs, validatePassword } from './utils';

const router = Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req: Request, res: Response) => {
  try {
    const user = await User.findById((req as any).user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server problem');
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/',
  [
    check('username', "Username can't be empty").exists(),
    check('password', "Password can't be empty").exists(),
  ],
  async (req: Request, res: Response) => {
    validateInputs(req, res);

    const { username, password } = req.body;

    try {
      let user = await User.findOne({ username });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid login credentials' }] });
      }

      await validatePassword(res, password, user.password);

      respondWithPayload(res, user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server problem');
    }
  }
);

export default router;
