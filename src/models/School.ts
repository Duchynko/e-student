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
  group: {
    type: Schema.Types.ObjectId,
    ref: 'group',
  },
  groups: {
    type: [Schema.Types.ObjectId],
    ref: 'group',
  },
});

export default model<ISchool>('school', SchoolSchema);
