import { object, string, ref } from "yup";

export const createUserSchemaValidation = object({
  body: object({
    userName: string().required("userName is required"),
    password: string().required("password is required"),
  }),
});

export const loginValidation = object({
  body: object({
    userName: string().required("userName is required"),
    password: string().required("password is required"),
  }),
});
