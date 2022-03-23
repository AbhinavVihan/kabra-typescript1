"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuantity = exports.addToCart = exports.createCart = void 0;
const cartModel_1 = require("../Models/cartModel");
const createCart = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield cartModel_1.Cart.create(input);
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createCart = createCart;
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, cartId } = req.params;
    const { name, image, price, quantity, productID } = req.body;
    const cart = yield cartModel_1.Cart.findById(cartId);
    if (!cart) {
        return res.status(400).json("no cart created");
    }
    const product = cart.product.find((p) => p.productID == productId);
    if (product) {
        return res
            .status(400)
            .json("this product is already in your cart, Increase the quantity from the carts page");
    }
    else {
        cart.product.push({
            name,
            price,
            quantity,
            image,
            productID,
        });
        yield cart.save();
    }
    return cart;
});
exports.addToCart = addToCart;
const updateQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.quantity < 1) {
        return res.status(400).json("quantity cannot be smaller than 1");
    }
    const cart = yield cartModel_1.Cart.updateOne({
        user: req.user.id,
        product: { $elemMatch: { productID: req.params.productId } },
    }, {
        $set: {
            "product.$.quantity": req.body.quantity,
        },
    }).then((r) => {
        return res.status(200).json(r);
    });
});
exports.updateQuantity = updateQuantity;
