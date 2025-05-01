import express, { urlencoded } from "express";
export const app = express();
import { router } from "./Routes/Videos.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";
dotenv.config({ path: "./config.env" });

app.use(urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(bodyParser());
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST"],
    origin: true,
    credentials: true,
  })
);

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("server is running...");
});
