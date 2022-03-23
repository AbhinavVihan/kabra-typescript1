"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "A product must have a name"],
        trim: true,
        maxlength: [
            60,
            "A product's name can have less or equal to 40 characters",
        ],
        minlength: [
            2,
            "A product must have greater than or equal to 2 characters",
        ],
    },
    price: {
        type: Number,
        required: [true, "A product must have a price"],
    },
    quantity: {
        type: Number,
        default: 1,
    },
    description: {
        type: String,
        trim: true,
        required: [true, "A product must have a description"],
    },
    image: {
        type: String,
    },
    version: {
        type: String,
    },
    public_id: {
        type: String,
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
const Product = (0, mongoose_1.model)("Product", productSchema);
exports.Product = Product;
