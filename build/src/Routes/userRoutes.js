"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../Controllers/userController");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const user_schema_1 = require("../schema/user.schema");
const deserializeUser_1 = require("../middleware/deserializeUser");
const userController_2 = require("../Controllers/userController");
const router = express_1.default.Router();
exports.userRouter = router;
router
    .route("/signup")
    .post((0, validateRequest_1.default)(user_schema_1.createUserSchemaValidation), userController_1.signupUserHandler);
router.route("/login").post((0, validateRequest_1.default)(user_schema_1.loginValidation), userController_1.loginUserHandler);
router.get("/me", deserializeUser_1.protect, userController_2.getMeHandler, userController_2.getUser);
