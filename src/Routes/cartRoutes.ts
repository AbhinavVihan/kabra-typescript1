import express from "express";
import {
  createCart,
  updateQuantity,
  addToCart,
  getCart,
} from "../Controllers/cartController";
import validateRequest from "../middleware/validateRequest";
import { protect } from "../middleware/deserializeUser";
import {
  addToCartValidation,
  createCartSchema,
  updateQuantityValidation,
} from "../schema/cart.schema";

const router = express.Router({ mergeParams: true });

router.use(protect);
router
  .route("/")
  .patch(validateRequest(updateQuantityValidation), updateQuantity);

router.route("/create").post(validateRequest(createCartSchema), createCart);
router.route("/").post(validateRequest(addToCartValidation), addToCart);

router.route("/myCart").get(getCart);

export { router as cartRouter };
