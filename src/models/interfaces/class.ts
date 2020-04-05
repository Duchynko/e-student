import { Document } from 'mongoose';
import { IStudent } from './student';
import { ITeacher } from './teacher';

export interface IClass extends Document {
  name: string;
  schoolYear: string;
  code: string;
  teachers: ITeacher['_id'][];
  students: IStudent['_id'][];
}
