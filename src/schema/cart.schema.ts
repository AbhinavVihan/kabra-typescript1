import { number, object, string } from "yup";

export const createCartSchema = object({
  body: object({
    user: string().required({ message: "user is required" }),
  }),
});

export const addToCartValidation = object({
  body: object({
    name: string().required("name is required"),
    image: string().required("image is required"),
    price: number().required("price is required"),
    quantity: number().required("quantity is required"),
    productID: string().required("productID is required"),
  }),
});

export const updateQuantityValidation = object({
  body: object({
    quantity: number().required("quantity is required"),
  }),
});
