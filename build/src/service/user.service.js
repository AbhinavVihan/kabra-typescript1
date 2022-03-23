"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const logger_1 = __importDefault(require("../logger"));
const userModel_1 = require("../Models/userModel");
const jwt_utils_1 = require("../utils/jwt.utils");
const createUser = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield userModel_1.User.create(input);
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, password } = req.body;
        const user = yield userModel_1.User.findOne({ userName });
        if (!user) {
            res.status(404).json({ message: "you have not signed up yet" });
        }
        const isValid = yield user.comparePassword(password);
        if (!isValid) {
            return res.status(402).json({ message: "incorrect password" });
        }
        const token = (0, jwt_utils_1.createSendToken)(user);
        res.status(200).json({ status: "success", token, user });
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
exports.loginUser = loginUser;
