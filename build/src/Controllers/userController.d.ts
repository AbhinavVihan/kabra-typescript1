import { NextFunction, Request, Response } from "express";
export declare const signupUserHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const loginUserHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getMeHandler: (req: any, res: Response, next: NextFunction) => void;
export declare const getUser: (req: Request, res: Response) => Promise<void>;
