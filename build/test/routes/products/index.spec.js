"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../src/app"));
// const app = express()
// describe("server checks", function () {
//   it("should create a new product", function (done) {
//     request(app)
//       .post("/api/product/create")
//       .field({
//         name: "mmeme",
//         price: 2,
//         description: "cdcecece",
//         quantity: 1,
//       })
//       .attach("image", `public/img/products/product--1648007083823-image.jpeg`)
//       .expect(201, done);
//   });
// });
describe("should return all products", function () {
    it("should return all products", function (done) {
        (0, supertest_1.default)(app_1.default)
            .get("/api/product")
            .end(function (err, res) {
            res.status = 200;
            done();
        });
    });
});
