"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./Routes/userRoutes");
const productRoutes_1 = require("./Routes/productRoutes");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cartRoutes_1 = require("./Routes/cartRoutes");
const cors_1 = __importDefault(require("cors"));
const defaults_1 = __importDefault(require("../config/defaults"));
const connect_1 = __importDefault(require("./db/connect"));
const app = (0, express_1.default)();
// const app = express()
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, cors_1.default)());
// development logging
if (process.env.NODE_ENV === "development") {
    console.log("development");
}
// production logging
if (process.env.NODE_ENV === "production") {
    console.log("production");
}
const port = defaults_1.default.port;
const host = defaults_1.default.host;
app.use("/api/users", userRoutes_1.userRouter);
app.use("/api/product", productRoutes_1.productRouter);
app.use("/api/cart", cartRoutes_1.cartRouter);
app.use("*", (req, res) => {
    res.json("could not find the specified url");
});
app.listen(port, () => {
    // log.info(`Server listening at http://${host}:${port}`);
    (0, connect_1.default)();
    // userRouter(app);
});
exports.default = app;
