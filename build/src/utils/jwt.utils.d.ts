import jwt from "jsonwebtoken";
export declare const sign: (object: Object, options?: jwt.SignOptions | undefined) => string;
export declare const createSendToken: (doc: any) => string;
