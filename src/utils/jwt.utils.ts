import { Request } from "express";
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

export const createSendToken = (doc: any) => {
  const token = signToken(doc._id);
  doc.password = undefined;

  return token;
};
