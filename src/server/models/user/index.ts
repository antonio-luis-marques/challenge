import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  role: 'aluno' | 'mentor';
  createdAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ['aluno', 'mentor'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;
