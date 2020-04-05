import { Schema } from 'mongoose';
import { IStudent } from './interfaces/student';
import User from './User';

export const Student = User.discriminator<IStudent>(
  'Student',
  new Schema({
    grades: [
      {
        classes: {
          type: Schema.Types.ObjectId,
          ref: 'class',
          default: [],
        },
        grades: {
          type: [Number],
          default: [],
        },
      },
    ],
  })
);
