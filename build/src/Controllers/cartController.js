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
exports.updateQuantity = exports.getCart = exports.deleteFromCart = exports.addToCart = exports.createCart = void 0;
const cartModel_1 = require("../Models/cartModel");
const cart_service_1 = require("../service/cart.service");
const createCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield (0, cart_service_1.createCart)(req.body);
        res.status(201).json(cart);
    }
    catch (e) {
        res.status(400).json(e);
    }
});
exports.createCart = createCart;
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = (0, cart_service_1.addToCart)(req, res);
        res.status(200).json({
            status: "success",
            cart,
        });
    }
    catch (e) {
        res.send(e);
    }
});
exports.addToCart = addToCart;
const deleteFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const doc = yield cartModel_1.Cart.findById(req.params.cartId);
    const d = doc.product.filter((i) => i.id !== req.params.productId);
    doc.product = [];
    doc.product = d;
    if (doc.product.length === 0) {
        doc.product = [];
    }
    yield doc.save({ validateBeforeSave: false });
    res.status(200).json({
        status: "success",
        doc,
    });
});
exports.deleteFromCart = deleteFromCart;
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.user.id;
    const doc = yield cartModel_1.Cart.find();
    const cart = doc.find((el) => el.user == id);
    if (!cart) {
        res.status(404).json("not found");
    }
    res.status(200).json(cart);
});
exports.getCart = getCart;
const updateQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = (0, cart_service_1.updateQuantity)(req, res).then((r) => { });
        res.status(200).json(cart);
    }
    catch (e) {
        res.send(e);
    }
});
exports.updateQuantity = updateQuantity;
