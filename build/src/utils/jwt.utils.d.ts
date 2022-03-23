import { Request, Response } from "express";
import jwt from "jsonwebtoken";
export declare const sign: (object: Object, options?: jwt.SignOptions | undefined) => string;
export declare const createSendToken: (doc: any, statusCode: number, req: Request, res: Response) => void;
