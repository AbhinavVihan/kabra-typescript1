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
exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../Models/userModel");
const defaults_1 = __importDefault(require("../../config/defaults"));
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // 1) getting token and check if its there
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return res.status(401).json({
            message: "You are not logged in.Please login to get Access",
        });
    }
    // 2) Verification token
    const decoded = jsonwebtoken_1.default.verify(token, defaults_1.default.privateKey);
    // 3) Check if user still exists
    const currentUser = yield userModel_1.User.findById(decoded.id);
    if (!currentUser) {
        return res
            .status(400)
            .json("the user belonging to this token does no longer exists");
    }
    // grant access to protected route
    req.user = currentUser;
    res.locals.user = currentUser;
    next();
});
exports.protect = protect;
