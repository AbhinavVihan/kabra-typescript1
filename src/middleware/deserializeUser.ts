import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../Models/userModel";
import config from "../../config/defaults";

export const protect = async (req: any, res: any, next: NextFunction) => {
  // 1) getting token and check if its there
  let token: any;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      message: "You are not logged in.Please login to get Access",
    });
  }

  // 2) Verification token
  const decoded: any = jwt.verify(token, config.privateKey);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return res
      .status(400)
      .json("the user belonging to this token does no longer exists");
  }

  // grant access to protected route
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
};
