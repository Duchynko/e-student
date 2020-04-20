import { Document } from 'mongoose';
import { IPost } from './post';
import { IUser } from './user';
import { IClass } from './class';

export interface IGroup extends Document {
  name: string;
  code: string;
  users: IUser['_id'][];
  classes: IClass['_id'][];
  feed: IPost['_id'][];
}
