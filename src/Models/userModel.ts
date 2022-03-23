import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import config from "../../config/defaults";

export interface IUser extends mongoose.Document {
  userName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const user = this as IUser;

  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(config.saltWorkFactor);
  user.password = await bcrypt.hash(user.password, salt);

  return next();
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as IUser;
  return await bcrypt
    .compare(candidatePassword, user.password)
    .catch((e) => false);
};

const User = model<IUser>("User", UserSchema);

export { User };
