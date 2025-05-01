import express, { urlencoded } from "express";
export const router = express.Router();
import cors from "cors";
import { allData } from "../data.js";
import dotenv from "dotenv";
import { connectDatabase } from "../Utilities/Database.js";
import { profile, signup, sendVideo, subscribe, subscriptions } from "../Controllers/videos.js";
import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";
dotenv.config({
  path: "./config.env",
});

router.use(
  cors({
    methods: ["GET", "POST"],
    origin: true,
    credentials: true,
  })
);
router.use(express.json());
router.use(cookieParser());
router.use(urlencoded({ extended: true }));

connectDatabase();

router.get("/data", (req, res) => {
  res.json(allData);
});

router.post("/signup", signup);
router.get("/me", profile);
router.get("/video/:id", sendVideo);
router.get("/subscribe/:id", subscribe);
router.get("/subscriptions", subscriptions);
