import { Request, Response } from "express";
export declare const createCart: (req: Request, res: Response) => Promise<void>;
export declare const addToCart: (req: Request, res: Response) => Promise<void>;
export declare const deleteFromCart: (req: Request, res: Response) => Promise<void>;
export declare const getCart: (req: any, res: Response) => Promise<void>;
export declare const updateQuantity: (req: Request, res: Response) => Promise<void>;
