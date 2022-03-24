import request from "supertest";
import express from "express";
import { expect } from "chai";
import app from "../../../src/app";

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
    request(app)
      .get("/api/product")
      .end(function (err, res) {
        res.status = 200;
        done();
      });
  });
});
