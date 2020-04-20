import { model, Schema } from 'mongoose';
import { IGroup } from './interfaces/group';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  users: {
    type: [Schema.Types.ObjectId],
    ref: 'user',
    default: [],
    required: true,
  },
  classes: {
    type: [Schema.Types.ObjectId],
    ref: 'class',
    default: [],
    required: true,
  },
  feed: {
    type: [Schema.Types.ObjectId],
    ref: 'post',
    default: [],
    required: true,
  },
});

export default model<IGroup>('group', GroupSchema);
