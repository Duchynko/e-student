import { Document } from 'mongoose';
import { ISchool } from './school';
import { IGroup } from './group';

export interface IUser extends Document {
  __t: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  birthday: Date;
  school: ISchool['_id'];
  groups: IGroup['_id'][];
}
