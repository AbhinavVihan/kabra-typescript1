import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";
declare const validate: (schema: AnySchema) => (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export default validate;
