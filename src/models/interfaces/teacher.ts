import { IClass } from './class';
import { IUser } from './user';

export interface ITeacher extends IUser {
  classes: IClass['_id'][];
}
