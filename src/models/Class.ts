import { model, Schema } from 'mongoose';
import { IClass } from './interfaces/class';

const ClassSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  schoolYear: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'group',
    required: true,
  },
});

export default model<IClass>('class', ClassSchema);
