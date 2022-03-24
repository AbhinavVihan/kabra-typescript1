import request from "supertest";
import { expect } from "chai";
import app from "../../../src/app";

describe("should add product to cart", function () {
  it("should pass because product is already in cart", function (done) {
    request(app)
      .post("/api/cart/")
      .query({
        productId: "6238dd14d8558d0d07f71da6",
        cartId: "623b50611b1ad850b1954e89",
      })
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I0ZWZlMWIxYWQ4NTBiMTk1NGU1ZSIsImlhdCI6MTY0ODA1NTUwOCwiZXhwIjoxNjU1ODMxNTA4fQ.QD72_Wk0KmmbGJR3qG9X5gU_PTQZDVQWc7XOYu1Wj-I"
      )
      .send({
        name: "KOPNHAGN Men's socks",
        image:
          "https://res.cloudinary.com/dzrmunwn7/image/upload/v1647893780/quuaecqiqsl32s4yh21s.jpg",
        price: 346,
        quantity: 1,
        productID: "6238dd14d8558d0d07f71da6",
      })
      .end(function (err, res) {
        expect(res.status).to.equal(400);
        done();
      });
  });
});

describe("should get cart", function () {
  it("should get logged in users's cart", (done) => {
    request(app)
      .get("/api/cart/myCart")
      .auth(
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I0ZWZlMWIxYWQ4NTBiMTk1NGU1ZSIsImlhdCI6MTY0ODA5ODIzOSwiZXhwIjoxNjU1ODc0MjM5fQ.f2AkMDbIvIuaea70GAi8JqVw7Jvq1jl-gLed4w0jc2E",
        { type: "bearer" }
      )
      .end(function (err, res) {
        expect(res.status).to.equal(200);
      });
    done();
  });
});

describe("should create a new cart", function () {
  it("should pass because cart for this user already exists", (done) => {
    request(app)
      .get("/api/cart/create")
      .auth(
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I0ZWZlMWIxYWQ4NTBiMTk1NGU1ZSIsImlhdCI6MTY0ODA5ODIzOSwiZXhwIjoxNjU1ODc0MjM5fQ.f2AkMDbIvIuaea70GAi8JqVw7Jvq1jl-gLed4w0jc2E",
        { type: "bearer" }
      )
      .send({
        user: "623ac5abbe1b122a11b0fee6",
      })
      .then((r) => {
        console.log(r);
        expect(r.status).to.equal(200);
      });
    done();
  });
});
