import mongoose from "mongoose";
export interface ICart {
    product: {
        id?: string;
        price: number;
        quantity: number;
        image: string;
        name: string;
        productID: string;
    }[];
    user: {
        type: mongoose.Schema.Types.ObjectId;
    };
}
declare const Cart: mongoose.Model<ICart, {}, {}, {}>;
export { Cart };
