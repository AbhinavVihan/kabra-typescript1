"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = __importDefault(require("express"));
const cartController_1 = require("../Controllers/cartController");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const deserializeUser_1 = require("../middleware/deserializeUser");
const cart_schema_1 = require("../schema/cart.schema");
const router = express_1.default.Router({ mergeParams: true });
exports.cartRouter = router;
router.use(deserializeUser_1.protect);
router
    .route("/")
    .patch((0, validateRequest_1.default)(cart_schema_1.updateQuantityValidation), cartController_1.updateQuantity);
router.route("/create").post((0, validateRequest_1.default)(cart_schema_1.createCartSchema), cartController_1.createCart);
router.route("/").post((0, validateRequest_1.default)(cart_schema_1.addToCartValidation), cartController_1.addToCart);
router.route("/myCart").get(cartController_1.getCart);
