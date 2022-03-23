/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Request, Response } from "express";
import { DocumentDefinition } from "mongoose";
import { ICart } from "../Models/cartModel";
export declare const createCart: (input: DocumentDefinition<ICart>) => Promise<import("mongoose").Document<unknown, any, ICart> & ICart & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const addToCart: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | (import("mongoose").Document<unknown, any, ICart> & ICart & {
    _id: import("mongoose").Types.ObjectId;
})>;
export declare const updateQuantity: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
