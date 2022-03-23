"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinary = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "../config.env" });
const cloudinary_1 = __importDefault(require("cloudinary"));
exports.cloudinary = cloudinary_1.default;
cloudinary_1.default.v2.config({
    cloud_name: "dzrmunwn7",
    api_key: "671841619634652",
    api_secret: "PoatHbKHXddKBdr_UZCv_-LrRqI",
});
