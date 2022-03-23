import { Request, Response } from "express";
import { DocumentDefinition } from "mongoose";
import { IUser } from "../Models/userModel";
export declare const createUser: (input: DocumentDefinition<IUser>, req: any, res: Response) => Promise<void>;
export declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
