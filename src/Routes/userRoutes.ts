import express from "express";
import {
  signupUserHandler,
  loginUserHandler,
} from "../Controllers/userController";
import validateRequest from "../middleware/validateRequest";
import {
  createUserSchemaValidation,
  loginValidation,
} from "../schema/user.schema";
import { protect } from "../middleware/deserializeUser";
import { getMeHandler, getUser } from "../Controllers/userController";

const router = express.Router();

router
  .route("/signup")
  .post(validateRequest(createUserSchemaValidation), signupUserHandler);
router.route("/login").post(validateRequest(loginValidation), loginUserHandler);
router.get("/me", protect, getMeHandler, getUser);
export { router as userRouter };
