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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const userModel_1 = require("../Models/userModel");
const jwt_utils_1 = require("../utils/jwt.utils");
const createUser = (input, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield userModel_1.User.create(input);
    (0, jwt_utils_1.createSendToken)(newUser, 201, req, res);
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.body;
    const user = yield userModel_1.User.findOne({ userName }).select("+password");
    if (!user) {
        return res.status(400).json({
            message: "you have not signedup yet",
        });
    }
    else if (!(yield (0, userModel_1.comparePassword)(password, user.password))) {
        return res.status(400).json({
            message: "Incorrect password",
        });
    }
    (0, jwt_utils_1.createSendToken)(user, 200, req, res);
});
exports.loginUser = loginUser;
