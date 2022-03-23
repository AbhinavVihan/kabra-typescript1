"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION! SHUTTING DOWN");
    console.log(err.name, err.message);
    process.exit(1);
});
dotenv_1.default.config({ path: "../config.env" });
const app_1 = __importDefault(require("./app"));
// const DB = process.env.DATABASE!.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD!
// );
console.log(process.env.DATABASE);
mongoose_1.default
    .connect("mongodb+srv://Abhik0:nBCaCav2Jv86SVs2@cluster0.iiq9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
    console.log("database connection successfull");
})
    .catch((e) => {
    console.log(e);
});
const port = process.env.PORT || 3000;
const server = app_1.default.listen(port, () => {
    console.log(`app running on port ${port}`);
});
process.on("unhandledRejection", (err) => {
    console.log("UNGANDLED REJECTION! SHUTTING DOWN");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
