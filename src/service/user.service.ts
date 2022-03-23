import { Request, Response } from "express";
import { omit } from "lodash";
import { DocumentDefinition, FilterQuery } from "mongoose";
import log from "../logger";
import { User, IUser } from "../Models/userModel";
import { createSendToken } from "../utils/jwt.utils";

export const createUser = async (input: DocumentDefinition<IUser>) => {
  try {
    return await User.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      res.status(404).json({ message: "you have not signed up yet" });
    }

    const isValid = await user!.comparePassword(password);

    if (!isValid) {
      return res.status(402).json({ message: "incorrect password" });
    }
    const token = createSendToken(user);
    res.status(200).json({ status: "success", token, user });
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};
