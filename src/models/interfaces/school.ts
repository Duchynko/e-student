import { Document } from 'mongoose';
import { IGroup } from './group';

export interface ISchool extends Document {
  name: string;
  address: string;
  contact: any;
  group: IGroup['_id'];
  groups: IGroup['_id'][];
}
