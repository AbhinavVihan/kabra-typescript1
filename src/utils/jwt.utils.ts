import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../../config/defaults";
const privateKey = config.privateKey as string;

export const sign = (object: Object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(object, privateKey, options);
};

const signToken = (id: string) =>
  jwt.sign({ id }, config.privateKey, {
    expiresIn: config.accessTTokenTtl,
  });

export const createSendToken = (
  doc: any,
  statusCode: number,
  req: Request,
  res: Response
) => {
  const token = signToken(doc._id);
  doc.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    doc,
  });
};
