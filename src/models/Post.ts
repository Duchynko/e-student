import { model, Schema } from 'mongoose';
import { IPost } from './interfaces/post';

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  groups: {
    type: [Schema.Types.ObjectId],
    ref: 'group',
    required: true,
  },
});

export default model<IPost>('post', PostSchema);
