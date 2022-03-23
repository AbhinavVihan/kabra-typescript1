"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const cartSchema = new mongoose_2.Schema({
    product: [
        {
            id: String,
            name: String,
            price: Number,
            quantity: Number,
            image: String,
            productID: String,
        },
    ],
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        unique: true,
        required: [true, "cart must belong to a user"],
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
const Cart = (0, mongoose_2.model)("Cart", cartSchema);
exports.Cart = Cart;
