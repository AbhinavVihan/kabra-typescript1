import { User } from "../Models/userModel";
import { NextFunction, Request, Response } from "express";
import { createUser, loginUser } from "../service/user.service";
import { omit } from "lodash";
import log from "../logger";

export const signupUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};

export const loginUserHandler = async function (req: Request, res: Response) {
  try {
    loginUser(req, res);
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};

export const getMeHandler = (req: any, res: Response, next: NextFunction) => {
  req.params.id = req.user.id;
  next();
};

export const getUser = async (req: Request, res: Response) => {
  let query = User.findById(req.params.id);
  const doc = await query;

  res.status(200).json({
    status: "success",
    doc,
  });
};
