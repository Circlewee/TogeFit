import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
    },
    liked: {
      type: [Schema.Types.ObjectId],
      default: [],
      required: true,
    },
  },
  {
    collection: 'users',
    timestamps: true,
  }
);

export { UserSchema };
