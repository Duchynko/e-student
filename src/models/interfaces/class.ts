import { Document } from 'mongoose';
import { IGroup } from './group';

export interface IClass extends Document {
  name: string;
  schoolYear: string;
  code: string;
  group: IGroup['_id'];
}
