import mongoose from "mongoose";
export interface IUser extends mongoose.Document {
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const comparePassword: (candidatePassword: string, password: string | undefined) => Promise<boolean>;
declare const User: mongoose.Model<IUser, {}, {}, {}>;
export { User };
