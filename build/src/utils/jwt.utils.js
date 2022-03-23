"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSendToken = exports.sign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const defaults_1 = __importDefault(require("../../config/defaults"));
const privateKey = defaults_1.default.privateKey;
const sign = (object, options) => {
    return jsonwebtoken_1.default.sign(object, privateKey, options);
};
exports.sign = sign;
const signToken = (id) => jsonwebtoken_1.default.sign({ id }, defaults_1.default.privateKey, {
    expiresIn: defaults_1.default.accessTTokenTtl,
});
const createSendToken = (doc, statusCode, req, res) => {
    const token = signToken(doc._id);
    doc.password = undefined;
    res.status(statusCode).json({
        status: "success",
        token,
        doc,
    });
};
exports.createSendToken = createSendToken;
