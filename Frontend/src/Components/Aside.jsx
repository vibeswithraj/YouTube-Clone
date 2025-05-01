import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import Divider from "@mui/material/Divider";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import detailContext from "../Contexts/DetailProvider";
import { NavLink } from "react-router-dom";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMdMusicalNote } from "react-icons/io";
import { BiSolidMoviePlay } from "react-icons/bi";
import {
  SiYoutubegaming,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubestudio,
} from "react-icons/si";
import { MdNewspaper, MdOutlineOnlinePrediction } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { PiLightbulbLight } from "react-icons/pi";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import { LiaHotjar } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import { FiHelpCircle } from "react-icons/fi";
import SmsFailedOutlinedIcon from "@mui/icons-material/SmsFailedOutlined";

export const CloseAside = () => {
  const { theme } = useContext(detailContext);
  const links = [
    {
      id: 0,
      name: "Home",
      path: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      id: 1,
      name: "Shorts",
      path: "/feed/shorts",
      icon: <PlayCircleOutlineIcon />,
    },
    {
      id: 2,
      name: "Subscriptions",
      path: "/feed/subscriptions",
      icon: <SubscriptionsOutlinedIcon />,
    },
    {
      id: 3,
      name: "You",
      path: "/feed/you",
      icon: <VideoLibraryOutlinedIcon />,
    },
  ];

  return (
    <aside
      className={
        theme
          ? "w-[65px] h-full flex flex-col gap-2 items-center border-r border-slate-400 py-3 shrink-0 transition-all ease-in-out duration-300 pl-1 bg-slate-950 text-white"
          : "w-[65px] h-full flex flex-col gap-2 items-center border-r border-slate-400 py-3 shrink-0 transition-all ease-in-out duration-300 pl-1 bg-white text-black"
      }
    >
      <ul className="w-full h-auto flex flex-col justify-center items-center gap-0 py-2 px-0">
        {links?.map((item, index) => (
          <NavLink
            to={item?.path}
            key={index}
            className={(activeClass) =>
              activeClass.isActive
                ? "w-full h-auto bg-[rgb(255,255,255,0.12)] rounded-lg cursor-pointer"
                : "w-full h-auto hover:bg-[rgb(255,255,255,0.12)] rounded-lg cursor-pointer"
            }
          >
            <li className="w-full h-auto flex flex-col justify-center gap-4 py-2 items-center hover:bg-[rgb(255,255,255,0.12)] rounded-lg cursor-pointer">
              {item?.icon}
              <p className="text-[10px]">{item?.name}</p>
            </li>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

const Aside = () => {
  const { asideOpen, theme } = useContext(detailContext);

  const links = [
    {
      id: 0,
      name: "Home",
      path: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      id: 1,
      name: "Shorts",
      path: "/feed/shorts",
      icon: <PlayCircleOutlineIcon />,
    },
    {
      id: 2,
      name: "Subscriptions",
      path: "/feed/subscription",
      icon: <SubscriptionsOutlinedIcon />,
    },
  ];

  const feedLinks = [
    {
      id: 0,
      name: (
        <span className="text-md font-semibold">
          You
          <ExpandMoreIcon className="ml-2 -rotate-90 text-gray-400" />
        </span>
      ),
      path: "/feed/you",
      icon: "",
    },
    {
      id: 1,
      name: "Your channel",
      path: "/feed/yourchannel",
      icon: <VideoLibraryOutlinedIcon />,
    },
    {
      id: 2,
      name: "History",
      path: "/feed/history",
      icon: <HistoryIcon />,
    },
    {
      id: 3,
      name: "Playlist",
      path: "/feed/playlists",
      icon: <PlaylistPlayIcon />,
    },
    {
      id: 4,
      name: "Your video",
      path: "/feed/yourvideo",
      icon: <SlideshowIcon />,
    },
    {
      id: 5,
      name: "Watch later",
      path: "/feed/watchlater",
      icon: <WatchLaterOutlinedIcon />,
    },
    {
      id: 6,
      name: "Liked videos",
      path: "/feed/likedvideos",
      icon: <ThumbUpOffAltIcon />,
    },
  ];

  const explore = [
    {
      id: 0,
      name: "Trending",
      path: "/trending",
      icon: <LiaHotjar size={20} />,
    },
    {
      id: 1,
      name: "Shopping",
      path: "/shopping",
      icon: <RiShoppingBag4Line size={20} />,
    },
    {
      id: 2,
      name: "Music",
      path: "/music",
      icon: <IoMdMusicalNote size={20} />,
    },
    {
      id: 3,
      name: "Movies",
      path: "/movies",
      icon: <BiSolidMoviePlay size={20} />,
    },
    {
      id: 4,
      name: "Live",
      path: "/live",
      icon: <MdOutlineOnlinePrediction size={20} />,
    },
    {
      id: 5,
      name: "Gaming",
      path: "/gamming",
      icon: <SiYoutubegaming size={20} />,
    },
    {
      id: 6,
      name: "News",
      path: "/news",
      icon: <MdNewspaper size={20} />,
    },
    {
      id: 7,
      name: "Sports",
      path: "/sports",
      icon: <GoTrophy size={20} />,
    },
    {
      id: 8,
      name: "Courses",
      path: "/courses",
      icon: <PiLightbulbLight size={20} />,
    },
    {
      id: 9,
      name: "Fashion & Beauty",
      path: "/fashion-beauty",
      icon: <CheckroomIcon fontSize="small" />,
    },
    {
      id: 10,
      name: "Podcasts",
      path: "/podcasts",
      icon: <PodcastsIcon fontSize="small" />,
    },
  ];

  const helps = [
    {
      id: 0,
      name: "Settings",
      path: "",
      icon: <IoSettingsOutline size={20} />,
    },
    {
      id: 2,
      name: "Report history",
      path: "",
      icon: <OutlinedFlagIcon fontSize="small" />,
    },
    {
      id: 3,
      name: "Help",
      path: "",
      icon: <FiHelpCircle fontSize="large" />,
    },
    {
      id: 4,
      name: "Send feedback",
      path: "",
      icon: <SmsFailedOutlinedIcon fontSize="small" />,
    },
  ];

  const moreYoutube = [
    {
      id: 0,
      name: "Youtube Premium",
      icon: <FaYoutube color="red" />,
      path: "#",
    },
    {
      id: 1,
      name: "Youtube Studio",
      icon: <SiYoutubestudio color="red" />,
      path: "#",
    },
    {
      id: 2,
      name: "Youtube Music",
      icon: <SiYoutubemusic color="red" />,
      path: "#",
    },
    {
      id: 3,
      name: "Youtube Kids",
      icon: <SiYoutubekids color="red" />,
      path: "#",
    },
  ];

  return (
    <aside
      //id="main"
      className={
        asideOpen
          ? "w-[240px] h-auto flex flex-col gap-2 items-center shrink-0 py-1 px-[12px] -ml-[240px] invisible transition-all ease-in-out duration-300 bg-[#0F0F0F] text-white overflow-y-scroll scroll-smooth no-scrollbar z-50"
          : "w-[240px] h-auto flex flex-col gap-2 items-center shrink-0 py-1 px-[12px] ml-0 visible transition-all ease-in-out duration-300 bg-[#0F0F0F] text-white overflow-y-scroll scroll-smooth no-scrollbar z-50"
      }
    >
      <ul className="w-[216px] h-auto flex flex-col justify-center items-center gap-0 py-2">
        {links?.map((item, index) => (
          <NavLink
            to={item?.path}
            key={index}
            className={(classActive) =>
              classActive.isActive
                ? "w-full h-[40px] bg-[rgb(255,255,255,0.12)] rounded-lg px-[12px] cursor-pointer"
                : "w-full h-[40px] hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-[12px] cursor-pointer"
            }
          >
            <li className="w-full h-[40px] flex gap-4 py-2 items-center">
              {item?.icon}
              <p className="text-md">{item?.name}</p>
            </li>
          </NavLink>
        ))}
      </ul>
      <Divider
        orientation="horizontal"
        className={theme ? "bg-slate-500" : "bg-gray-300"}
        flexItem
      />
      <ul className="w-full h-auto flex flex-col justify-center items-start pb-2 px-2">
        {feedLinks?.map((item, index) => (
          <NavLink
            key={index}
            to={item?.path}
            className={(activeClass) =>
              activeClass.isActive
                ? "w-full h-auto bg-[rgb(255,255,255,0.12)] rounded-lg px-3 cursor-pointer"
                : "w-full h-auto hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-3 cursor-pointer"
            }
          >
            <li className="w-full h-auto flex gap-4 py-2 items-center">
              {item?.icon}
              <p className="text-md">{item?.name}</p>
            </li>
          </NavLink>
        ))}
      </ul>
      <Divider
        orientation="horizontal"
        className={theme ? "bg-slate-500" : "bg-gray-300"}
        flexItem
      />
      <div className="w-full h-auto py-2 px-2">
        <p className="w-fit h-fit text-lg text-left mb-3 ml-2">Subscriptions</p>
        <ul className="w-full h-auto flex flex-col justify-center items-center gap-1">
          <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-2 cursor-pointer">
            <img
              src=""
              alt="creater image"
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full bg-orange-400"
            />
            <p className="w-fit h-fit text-md">Name</p>
          </li>
          <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-2 cursor-pointer">
            <img
              src=""
              alt="creater image"
              height={30}
              className="w-[30px] h-[30px] rounded-full bg-orange-400"
            />
            <p className="w-fit h-fit text-md">Name</p>
          </li>
          <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-2 cursor-pointer">
            <img
              src=""
              alt="creater image"
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full bg-orange-400"
            />
            <p className="w-fit h-fit text-md">Name</p>
          </li>
          <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-2 cursor-pointer">
            <img
              src=""
              alt="creater image"
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full bg-orange-400"
            />
            <p className="w-fit h-fit text-md">Name</p>
          </li>
          <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-2 cursor-pointer">
            <img
              src=""
              alt="creater image"
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full bg-orange-400"
            />
            <p className="w-fit h-fit text-md">Name</p>
          </li>
          <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-2 cursor-pointer">
            <img
              src=""
              alt="creater image"
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full bg-orange-400"
            />
            <p className="w-fit h-fit text-md">Name</p>
          </li>
          <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-2 cursor-pointer">
            <img
              src=""
              alt="creater image"
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full bg-orange-400"
            />
            <p className="w-fit h-fit text-md">Name</p>
          </li>
          <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-2 cursor-pointer">
            <ExpandMoreIcon sx={{ height: 30 }} />
            <p className="w-fit h-fit text-md">Show more</p>
          </li>
        </ul>
      </div>
      <Divider
        orientation="horizontal"
        className={theme ? "bg-slate-500" : "bg-gray-300"}
        flexItem
      />
      <div className="w-full min-h-[495px] py-2 px-2">
        <p className="w-fit h-fit text-lg font-medium text-left mb-1 mt-1 ml-2">
          Explore
        </p>
        <ul className="w-full h-auto flex flex-col justify-center items-start pb-2 px-0">
          {explore?.map((item, index) => (
            <NavLink
              key={index}
              //to={item?.path}
              className={(activeClass) =>
                activeClass.isActive
                  ? "w-full h-auto hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-3 cursor-pointer"
                  : "w-full h-auto hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-3 cursor-pointer"
              }
            >
              <li className="w-full h-auto flex gap-7 py-2 items-center">
                {item?.icon}
                <p className="text-base">{item?.name}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <Divider
        orientation="horizontal"
        className={theme ? "bg-slate-500" : "bg-gray-300"}
        flexItem
      />
      <div className="w-full min-h-[216px] py-2 px-2">
        <p className="w-fit h-fit text-lg font-medium text-left mb-1 mt-1 ml-2">
          More from YouTube
        </p>
        <ul className="w-full h-auto flex flex-col justify-center items-start pb-2 px-0">
          {moreYoutube?.map((item, index) => (
            <NavLink
              key={index}
              //to={item?.path}
              className={(activeClass) =>
                activeClass.isActive
                  ? "w-full h-auto hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-3 cursor-pointer"
                  : "w-full h-auto hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-3 cursor-pointer"
              }
            >
              <li className="w-full h-auto flex gap-7 py-2 items-center">
                {item?.icon}
                <p className="text-base">{item?.name}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <Divider
        orientation="horizontal"
        className={theme ? "bg-slate-500" : "bg-gray-300"}
        flexItem
      />
      <div className="w-full h-[184px] py-2 px-2">
        <ul className="w-full h-auto flex flex-col justify-center items-start pb-2 px-0">
          {helps?.map((item, index) => (
            <NavLink
              key={index}
              //to={item?.path}
              className={(activeClass) =>
                activeClass.isActive
                  ? "w-full h-auto hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-3 cursor-pointer"
                  : "w-full h-auto hover:bg-[rgb(255,255,255,0.12)] rounded-lg px-3 cursor-pointer"
              }
            >
              <li className="w-full h-auto flex gap-7 py-2 items-center">
                {item?.icon}
                <p className="text-base">{item?.name}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
