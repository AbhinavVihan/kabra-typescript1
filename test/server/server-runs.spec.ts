import request from "supertest";
import express from "express";
import { expect } from "chai";
import app from "../../src/app";

// const app = express()

describe("server checks", function () {
  it("server is created without error", function (done) {
    request(app).get("/api/product").expect(200, done);
  });
});
