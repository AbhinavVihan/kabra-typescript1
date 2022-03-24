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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.addProduct = void 0;
const sharp_1 = __importDefault(require("sharp"));
const cloudinary_1 = require("../utils/cloudinary");
const productModel_1 = require("../Models/productModel");
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, quantity } = req.body;
    if (!req.files) {
        return res.status(400).json("you must choose an image");
    }
    if (name == "undefined" ||
        description == "undefined" ||
        price == "undefined") {
        return res.status(400).json("you must fill-in all required fields");
    }
    req.body.image = `product--${Date.now()}-image.jpeg`;
    try {
        yield (0, sharp_1.default)(req.files.image.data)
            .resize(500, 500)
            .toFormat("jpeg")
            .jpeg({ quality: 90 })
            .toFile(`public/img/products/${req.body.image}`);
        const fileStr = `public/img/products/${req.body.image}`;
        const uploadedResponse = yield cloudinary_1.cloudinary.v2.uploader
            .upload(fileStr)
            .then((r) => __awaiter(void 0, void 0, void 0, function* () {
            const doc = yield productModel_1.Product.create({
                name,
                description,
                price,
                quantity,
                image: `https://res.cloudinary.com/dzrmunwn7/image/upload/v${r.version}/${r.public_id}.jpg`,
            });
            res.status(201).json(doc);
        }));
    }
    catch (e) {
        res.json(e);
    }
});
exports.addProduct = addProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doc = yield productModel_1.Product.find();
        res.status(200).json(doc);
    }
    catch (e) {
        res.json(e);
    }
});
exports.getAllProducts = getAllProducts;
