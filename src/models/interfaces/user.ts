import { Document } from 'mongoose';

export interface IUser extends Document {
  __t: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  birthday: Date;
}
