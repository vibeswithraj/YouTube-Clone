import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailProvider } from "./Contexts/DetailProvider";
import "./index.css";
import "./App.css";
import { UserProvider } from "./Contexts/UserProvider";
import { Toaster } from "react-hot-toast";
import { Backdrop, CircularProgress } from "@mui/material";
import Navbar from "./Components/Navbar";

const Home = lazy(() => import("./Pages/Home"));
const Video = lazy(() => import("./Pages/Video"));
const LikedVideos = lazy(() => import("./Pages/LikedVideos"));
const WatchLater = lazy(() => import("./Pages/WatchLater"));
const History = lazy(() => import("./Pages/History"));
const You = lazy(() => import("./Pages/You"));
const Playlists = lazy(() => import("./Pages/Playlists"));
const YourChannel = lazy(() => import("./Pages/YourChannel"));
const Login = lazy(() => import("./Components/Login"));

const App = () => {
  return (
    <DetailProvider>
      <UserProvider>
        <Router>
          <Suspense
            fallback={
              <Backdrop sx={{ color: "#fff" }} open={true}>
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/video/:id" element={<Video />} />
              <Route path="/feed/likedvideos" element={<LikedVideos />} />
              <Route path="/feed/watchlater" element={<WatchLater />} />
              <Route path="/feed/playlists" element={<Playlists />} />
              <Route path="/feed/history" element={<History />} />
              <Route path="/feed/you" element={<You />} />
              <Route path="/feed/yourchannel" element={<YourChannel />} />
            </Routes>
          </Suspense>
        </Router>
        <Toaster position="top-right" />
      </UserProvider>
    </DetailProvider>
  );
};

export default App;
