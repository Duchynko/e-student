import { Schema } from 'mongoose';
import { IStudent } from './interfaces/student';
import User from './User';

export const Student = User.discriminator<IStudent>(
  'Student',
  new Schema({
    grades: {
      type: [
        {
          classes: {
            type: Schema.Types.ObjectId,
            ref: 'class',
            default: [],
            required: true,
          },
          grades: {
            type: [Number],
            default: [],
            required: true,
          },
        },
      ],
      required: true,
    },
  })
);
