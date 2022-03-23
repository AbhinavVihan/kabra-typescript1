import { Response } from "express";
export declare const addProduct: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllProducts: (req: any, res: Response) => Promise<void>;
