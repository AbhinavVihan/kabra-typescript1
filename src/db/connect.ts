import mongoose from "mongoose";
import config from "../../config/defaults";
import log from "../logger";

const connect = () => {
  const dbUri = config.dbUri as string;

  return mongoose
    .connect(dbUri)
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
};

export default connect;
