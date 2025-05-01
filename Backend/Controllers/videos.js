import { userData } from "../Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { allData } from "../data.js";
dotenv.config({ path: "./config.env" });

export const sendVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await allData.find((i) => i.id === id);
    if (!video) {
      return res.json({ error: "video not found!", success: false });
    }
    res.json(video);
  } catch (error) {
    console.log(error);
  }
};

export const profile = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.json({ errorToken: "Cookie is gone!", success: false });
    }
    const check = await jwt.verify(token, process.env.SECRET_KEY);
    if (!check) {
      return res.json({ error: "Authentication Failed!", success: false });
    }
    const user = await userData.findOne({ _id: check.id });
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const check = await userData.findOne({ email });
    if (check) {
      return res.json({ error: "user already exist!", success: false });
    }
    const hasedPassword = await bcrypt.hash(password, 10);
    const saveData = await userData.create({
      firstName,
      lastName,
      displayName: firstName + " " + lastName,
      email,
      password: hasedPassword,
    });
    if (!saveData) {
      return res.json({ error: "Database error!", success: false });
    }
    const token = await jwt.sign(
      { id: saveData._id, email: saveData.email },
      process.env.SECRET_KEY
    );
    res.cookie("token", token, {
      maxAge: 90000000,
      secure: true,
      httpOnly: true,
    });
    return res.json({
      message: "Registered Successfully!",
      success: true,
      user: saveData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const subscribe = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ error: "video id not found!" });
    }
    const checkId = await allData.find((i) => i.id === id);
    if (!checkId) {
      return res.json({ error: "video not found!" });
    }
    checkId.isSubscriber = !checkId.isSubscriber;
    res.json(checkId);
  } catch (error) {
    console.log(error);
  }
};

export const subscriptions = async (req, res) => {
  try {
    const checkId = await allData.filter((i) => i.isSubscriber ? i.isSubscriber : i);
    if (!checkId) {
      return res.json({ error: "subscriptions not found!" });
    }
    checkId.isSubscriber = !checkId.isSubscriber;
    res.json(checkId);
  } catch (error) {
    console.log(error);
  }
};
