import { model, Schema } from 'mongoose';
import { IUser } from './interfaces/user';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'school',
    required: true,
  },
});

export default model<IUser>('user', UserSchema);
