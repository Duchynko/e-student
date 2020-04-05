import { model, Schema } from 'mongoose';
import { ISchool } from './interfaces/school';

const SchoolSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: Object,
    required: true,
    unique: true,
  },
  contact: {
    type: Object,
    required: true,
    unique: true,
  },
  teachers: {
    type: [Schema.Types.ObjectId],
    ref: 'teacher',
  },
  students: {
    type: [Schema.Types.ObjectId],
    ref: 'student',
  },
  classes: {
    type: [Schema.Types.ObjectId],
    ref: 'class',
  },
});

export default model<ISchool>('school', SchoolSchema);
