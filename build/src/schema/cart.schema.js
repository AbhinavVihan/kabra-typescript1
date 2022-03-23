"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuantityValidation = exports.addToCartValidation = exports.createCartSchema = void 0;
const yup_1 = require("yup");
exports.createCartSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        user: (0, yup_1.string)().required({ message: "user is required" }),
    }),
});
exports.addToCartValidation = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)().required("name is required"),
        image: (0, yup_1.string)().required("image is required"),
        price: (0, yup_1.number)().required("price is required"),
        quantity: (0, yup_1.number)().required("quantity is required"),
        productID: (0, yup_1.string)().required("productID is required"),
    }),
});
exports.updateQuantityValidation = (0, yup_1.object)({
    body: (0, yup_1.object)({
        quantity: (0, yup_1.number)().required("quantity is required"),
    }),
});
