"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.createUserSchemaValidation = void 0;
const yup_1 = require("yup");
exports.createUserSchemaValidation = (0, yup_1.object)({
    body: (0, yup_1.object)({
        userName: (0, yup_1.string)().required("userName is required"),
        password: (0, yup_1.string)().required("password is required"),
    }),
});
exports.loginValidation = (0, yup_1.object)({
    body: (0, yup_1.object)({
        userName: (0, yup_1.string)().required("userName is required"),
        password: (0, yup_1.string)().required("password is required"),
    }),
});
