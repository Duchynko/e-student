import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { IUser } from '../../models/interfaces/user';

export function validateInputs(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
}

export async function validatePassword(
  res: Response,
  pwFromRequest: string,
  pwFromDatabase: string
) {
  const isMatch = await bcrypt.compare(pwFromRequest, pwFromDatabase);

  if (!isMatch)
    return res
      .status(400)
      .json({ errors: [{ msg: 'Invalid login credentials' }] });
}

export function respondWithPayload(res: Response, user: IUser) {
  const payload = {
    user: {
      id: user.id,
      role: user.__t,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: 360000 }, //TODO: CHANGE!
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
}
