"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductValidation = void 0;
const yup_1 = require("yup");
exports.addProductValidation = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)().required("name is required"),
        description: (0, yup_1.string)().required("description is required"),
        price: (0, yup_1.number)().required("Price is required"),
        quantity: (0, yup_1.number)().required("quantity is required "),
    }),
    files: (0, yup_1.object)({
        image: (0, yup_1.object)({
            data: (0, yup_1.mixed)(),
        }),
    }),
});
