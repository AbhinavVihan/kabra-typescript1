"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const productcontroller_1 = require("../Controllers/productcontroller");
const cartRoutes_1 = require("./cartRoutes");
const router = express_1.default.Router({ mergeParams: true });
exports.productRouter = router;
router.use("/:productId/cart/:cartId", cartRoutes_1.cartRouter);
router.route("/create").post(productcontroller_1.addProduct);
router.get("/", productcontroller_1.getAllProducts);
