import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface Token {
  user: any;
}

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res
      .status(401)
      .json({ msg: 'Token not sent, authorization refused' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as Token;

    (req as any).user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
