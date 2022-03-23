import { Request, Response } from "express";
import { DocumentDefinition } from "mongoose";
import { IUser } from "../Models/userModel";
export declare const createUser: (input: DocumentDefinition<IUser>) => Promise<IUser & {
    _id: any;
}>;
export declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
