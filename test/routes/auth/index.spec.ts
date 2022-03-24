import request from "supertest";
import app from "../../../src/app";

describe("auth routes", function () {
  it("auth is protected fine", function (done) {
    request(app).get("/api/users/me").expect(401, done);
  });
});

describe("auth routes", function () {
  it("should get a user with authorization header", function (done) {
    request(app)
      .get("/api/users/me")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I0ZWZlMWIxYWQ4NTBiMTk1NGU1ZSIsImlhdCI6MTY0ODA1NTUwOCwiZXhwIjoxNjU1ODMxNTA4fQ.QD72_Wk0KmmbGJR3qG9X5gU_PTQZDVQWc7XOYu1Wj-I"
      )
      .expect(200, done);
  });
});

describe("login", function () {
  it("should login a user", function (done) {
    request(app)
      .post("/api/users/login")
      .send({
        userName: "Abi",
        password: "Abhinav@123",
      })
      .expect(200, done);
  });
});

describe("signup", function () {
  it("should pass because the user specified already exists", function (done) {
    request(app)
      .post("/api/users/signup")
      .send({
        userName: "Abi",
        password: "Abhinav@123",
      })
      .expect(400, done);
  });
});
