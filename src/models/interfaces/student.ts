import { IClass } from './class';
import { IUser } from './user';

export interface IStudent extends IUser {
  grades: [
    {
      class: IClass['_id'];
      grades: number[];
    }
  ];
}
