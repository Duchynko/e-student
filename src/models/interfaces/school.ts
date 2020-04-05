import { Document } from 'mongoose';
import { ITeacher } from './teacher';
import { IStudent } from './student';
import { IClass } from './class';

export interface ISchool extends Document {
  name: string;
  address: string;
  contact: any;
  teachers: ITeacher['_id'][];
  students: IStudent['_id'][];
  classes: IClass['_id'][];
}
