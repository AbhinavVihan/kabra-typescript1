import express from "express";
import { addProduct, getAllProducts } from "../Controllers/productcontroller";
import { cartRouter } from "./cartRoutes";
import validateRequest from "../middleware/validateRequest";
import { addProductValidation } from "../schema/product.schema";

const router = express.Router({ mergeParams: true });
router.use("/:productId/cart/:cartId", cartRouter);

router.route("/create").post(addProduct);
router.get("/", getAllProducts);

export { router as productRouter };
