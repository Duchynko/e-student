import { Schema } from 'mongoose';
import { ITeacher } from './interfaces/teacher';
import User from './User';

export const Teacher = User.discriminator<ITeacher>(
  'Teacher',
  new Schema({
    classes: {
      type: [Schema.Types.ObjectId],
      ref: 'class',
      default: [],
      required: true,
    },
  })
);
