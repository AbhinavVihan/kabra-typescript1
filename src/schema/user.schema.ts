import { object, string, ref } from "yup";

export const createUserSchemaValidation = object({
  body: object({
    userName: string().required("userName is required"),
    password: string()
      .required("password is required")
      .min(6, "Password is too short - should be 6 chars minimum")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain letters"),
  }),
});

export const loginValidation = object({
  body: object({
    userName: string().required("userName is required"),
    password: string().required("password is required"),
  }),
});
