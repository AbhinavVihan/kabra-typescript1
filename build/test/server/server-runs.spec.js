"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
// const app = express()
describe("server checks", function () {
    it("server is created without error", function (done) {
        (0, supertest_1.default)(app_1.default).get("/api/product").expect(200, done);
    });
});
