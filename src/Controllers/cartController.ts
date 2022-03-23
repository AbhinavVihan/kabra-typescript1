import { Request, Response } from "express";
import { Cart } from "../Models/cartModel";
import {
  createCart as CreateCart,
  addToCart as AddToCart,
  updateQuantity as UpdateQuantity,
} from "../service/cart.service";

export const createCart = async (req: Request, res: Response) => {
  try {
    const cart = await CreateCart(req.body);

    res.status(201).json(cart);
  } catch (e) {
    res.status(400).json(e);
  }
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    const doc = await AddToCart(req, res);
    res.status(200).json({
      status: "success",
      doc,
    });
  } catch (e) {
    res.send(e);
  }
};

export const deleteFromCart = async (req: Request, res: Response) => {
  const doc = await Cart.findById(req.params.cartId);

  const d = doc!.product.filter((i) => i.id !== req.params.productId);

  doc!.product = [];
  doc!.product = d;
  if (doc!.product.length === 0) {
    doc!.product = [];
  }
  await doc!.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    doc,
  });
};

export const getCart = async (req: any, res: Response) => {
  const id = req.user.id;
  const doc = await Cart.find();
  const cart = doc.find((el) => el.user == id);
  if (!cart) {
    res.status(404).json("not found");
  }
  res.status(200).json(cart);
};

export const updateQuantity = async (req: Request, res: Response) => {
  try {
    const cart = await UpdateQuantity(req, res).then((r) => {});
  } catch (e) {
    res.send(e);
  }
};
