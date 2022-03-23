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
exports.getUser = exports.getMeHandler = exports.loginUserHandler = exports.signupUserHandler = void 0;
const userModel_1 = require("../Models/userModel");
const user_service_1 = require("../service/user.service");
const logger_1 = __importDefault(require("../logger"));
const signupUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.User.findOne({ userName: req.body.userName });
        if (user) {
            return res.status(400).json({ message: "username already exists" });
        }
        (0, user_service_1.createUser)(req.body, req, res);
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
exports.signupUserHandler = signupUserHandler;
const loginUserHandler = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, user_service_1.loginUser)(req, res);
        }
        catch (e) {
            logger_1.default.error(e);
            return res.status(409).send(e.message);
        }
    });
};
exports.loginUserHandler = loginUserHandler;
const getMeHandler = (req, res, next) => {
    req.params.id = req.user.id;
    next();
};
exports.getMeHandler = getMeHandler;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let query = userModel_1.User.findById(req.params.id);
    const doc = yield query;
    res.status(200).json({
        status: "success",
        doc,
    });
});
exports.getUser = getUser;
