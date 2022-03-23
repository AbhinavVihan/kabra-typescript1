/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
export interface IProduct {
    name: string;
    price: number;
    quantity: number;
    description: string;
    image: string;
    version: string;
    public_id: string;
}
declare const Product: import("mongoose").Model<IProduct, {}, {}, {}>;
export { Product };
