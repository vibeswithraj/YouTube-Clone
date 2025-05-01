import mongoose from "mongoose";

const allUser = new mongoose.Schema(
  {
    _id:{
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      //required: true,
      select: false,
    },
    yourVideo: {
      type: Array,
      // required: true,
    },
    likeVideos: {
      type: Array,
      // required: true,
    },
    watchLater: {
      type: Array,
      // required: true,
    },
    createdAt: {
      type: String
    },
    creationTime:{
      type: String
    },
    lastLoginAt:{
      type: String
    },
    lastSignInTime:{
      type: String
    },
    photoURL:{
      type: String
    },
  }
  //{ timestamps: true }
);

export const userData = mongoose.model("users", allUser);
