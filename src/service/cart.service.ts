import { Request, Response } from "express";
import { omit } from "lodash";
import { DocumentDefinition, FilterQuery } from "mongoose";
import log from "../logger";
import { ICart, Cart } from "../Models/cartModel";

export const createCart = async (input: DocumentDefinition<ICart>) => {
  try {
    return await Cart.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addToCart = async (req: Request, res: Response) => {
  const { productId, cartId } = req.params;
  const { name, image, price, quantity, productID } = req.body;

  const cart = await Cart.findById(cartId);

  if (!cart) {
    return res.status(400).json("no cart created");
  }
  const product = cart.product.find((p) => p.productID == productId);

  if (product) {
    return res
      .status(400)
      .json(
        "this product is already in your cart, Increase the quantity from the carts page"
      );
  } else {
    cart.product.push({
      name,
      price,
      quantity,
      image,
      productID,
    });
    await cart.save();
  }

  return cart;
};

export const updateQuantity = async (req: any, res: Response) => {
  if (req.body.quantity < 1) {
    return res.status(400).json("quantity cannot be smaller than 1");
  }

  const cart = await Cart.updateOne(
    {
      user: req.user.id,
      product: { $elemMatch: { productID: req.params.productId } },
    },
    {
      $set: {
        "product.$.quantity": req.body.quantity,
      },
    }
  );
  return cart;
};
