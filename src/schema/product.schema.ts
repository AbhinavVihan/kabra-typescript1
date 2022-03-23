import { mixed, number, object, string } from "yup";

export const addProductValidation = object({
  body: object({
    name: string().required("name is required"),
    description: string().required("description is required"),
    price: number().required("Price is required"),
    quantity: number().required("quantity is required "),
  }),
  files: object({
    image: object({
      data: mixed(),
    }),
  }),
});
