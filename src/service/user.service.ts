import { Request, Response } from "express";
import { omit } from "lodash";
import { DocumentDefinition, FilterQuery } from "mongoose";
import log from "../logger";
import { User, IUser, comparePassword } from "../Models/userModel";
import { createSendToken } from "../utils/jwt.utils";

export const createUser = async (
  input: DocumentDefinition<IUser>,
  req: any,
  res: Response
) => {
  const newUser = await User.create(input);
  createSendToken(newUser, 200, req, res);
};

export const loginUser = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName }).select("+password");
  if (!user) {
    return res.status(400).json({
      message: "you have not signedup yet",
    });
  } else if (!(await comparePassword(password, user.password))) {
    return res.status(400).json({
      message: "Incorrect password",
    });
  }

  createSendToken(user, 200, req, res);
};
