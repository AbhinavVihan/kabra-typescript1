import express from "express";
import { userRouter } from "./Routes/userRoutes";
import { productRouter } from "./Routes/productRoutes";
import multer from "multer";
import fileupload from "express-fileupload";
import { cartRouter } from "./Routes/cartRoutes";
import cors from "cors";
import config from "../config/defaults";
import log from "./logger";
import connect from "./db/connect";
const app = express();
// const app = express()
app.use(express.json());
app.use(fileupload());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// development logging
if (process.env.NODE_ENV === "development") {
  console.log("development");
}

// production logging
if (process.env.NODE_ENV === "production") {
  console.log("production");
}

const port = config.port as number;
const host = config.host as string;

app.use("/api/users", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.use("*", (req, res) => {
  res.json("could not find the specified url");
});

app.listen(port, host, () => {
  log.info(`Server listening at http://${host}:${port}`);
  connect();
  // userRouter(app);
});

export default app;
