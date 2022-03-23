import mongoose from "mongoose";
export interface IUser extends mongoose.Document {
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
declare const User: mongoose.Model<IUser, {}, {}, {}>;
export { User };
