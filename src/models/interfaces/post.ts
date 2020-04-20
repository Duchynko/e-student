import { Document } from 'mongoose';
import { IUser } from './user';
import { IGroup } from './group';

export interface IPost extends Document {
  title: string;
  content: string;
  date: Date;
  author: IUser['_id'];
  groups: IGroup['_id'][];
}
