import { Response } from "express";
import sharp from "sharp";
import { cloudinary } from "../utils/cloudinary";
import { Product } from "../Models/productModel";

export const addProduct = async (req: any, res: Response) => {
  const { name, description, price, quantity } = req.body;
  if (!req.files) {
    return res.status(400).json("you must choose an image");
  }
  if (
    name == "undefined" ||
    description == "undefined" ||
    price == "undefined"
  ) {
    return res.status(400).json("you must fill-in all required fields");
  }

  req.body.image = `product--${Date.now()}-image.jpeg`;
  try {
    await sharp(req.files.image.data)
      .resize(500, 500)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`public/img/products/${req.body.image}`);

    const fileStr = `public/img/products/${req.body.image}`;
    const uploadedResponse = await cloudinary.v2.uploader
      .upload(fileStr)
      .then(async (r: any) => {
        const doc = await Product.create({
          name,
          description,
          price,
          quantity,
          image: `https://res.cloudinary.com/dzrmunwn7/image/upload/v${r.version}/${r.public_id}.jpg`,
        });
        res.status(201).json(doc);
      });
  } catch (e) {
    res.json(e);
  }
};

export const getAllProducts = async (req: any, res: Response) => {
  try {
    const doc = await Product.find();
    res.status(200).json(doc);
  } catch (e) {
    res.json(e);
  }
};
