import React, { useContext, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import detailContext from "../Contexts/DetailProvider";
import { Avatar, IconButton, Skeleton, Tooltip } from "@mui/material";
import userContext from "../Contexts/UserProvider";
import { MdOutlineVideoCall } from "react-icons/md";
// import { MdMic } from "react-icons/md";

const Navbar = () => {
  const { setAsideOpen, theme, allData } = useContext(detailContext);
  const { userDetail } = useContext(userContext);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchTitle, setSearchTitle] = useState([]);

  // const getSearchTitle = allData.map((i)=>{
  //   console.log(i.title)
  // })
  // //setSearchTitle(getSearchTitle)
  // console.log(getSearchTitle);
  // console.log(searchTitle);

  return (
    <nav
      id="nav"
      className={
        theme
          ? "w-full h-[56px] flex justify-between items-center px-6 sticky z-40 bg-[#0F0F0F] text-white"
          : "w-full h-[56px] flex justify-between items-center px-6 sticky z-40 bg-white text-black"
      }
    >
      <div className="w-[250px] h-full flex items-center gap-5">
        <FiMenu
          size={25}
          className="cursor-pointer"
          color="lightgray"
          onClick={() => setAsideOpen((prev) => !prev)}
        />
        <div className="w-fit flex items-center gap-1">
          <FaYoutube size={35} color="red" />
          <p className="text-lg font-semibold w-fit h-fit">YouTube</p>
        </div>
      </div>
      {/* <div className=" w-auto h-[40px] flex gap-4 items-center"> */}
      <div className="w-[40%] h-[40px] rounded-full flex justify-center items-center relative">
        <ul
          id="list"
          className={
            search
              ? "w-full h-auto visible border-none outline-none bg-[#272727] rounded-lg py-3 absolute top-12 flex flex-col gap-1 z-30"
              : "w-full h-auto invisible border-none outline-none bg-g[#272727] rounded-lg py-3 absolute top-12 flex flex-col gap-1 z-30"
          }
        >
          <li className="w-auto h-auto py-1 text-base font-normal text-white flex gap-4 hover:bg-gray-50/15 cursor-pointer items-center px-3">
            <CiSearch size={20} color={!theme ? "black" : "white"} />
            abcdefghi
          </li>
          <li className="w-auto h-auto py-1 text-base font-normal text-white flex gap-4 hover:bg-gray-50/15 cursor-pointer items-center px-3">
            <CiSearch size={20} color={!theme ? "black" : "white"} />
            abcdefghi
          </li>
          <li className="w-auto h-auto py-1 text-base font-normal text-white flex gap-4 hover:bg-gray-50/15 cursor-pointer items-center px-3">
            <CiSearch size={20} color={!theme ? "black" : "white"} />
            abcdefghi
          </li>
          <li className="w-auto h-auto py-1 text-base font-normal text-white flex gap-4 hover:bg-gray-50/15 cursor-pointer items-center px-3">
            <CiSearch size={20} color={!theme ? "black" : "white"} />
            abcdefghi
          </li>
          <li className="w-auto h-auto py-1 text-base font-normal text-white flex gap-4 hover:bg-gray-50/15 cursor-pointer items-center px-3">
            <CiSearch size={20} color={!theme ? "black" : "white"} />
            abcdefghi
          </li>
          <li className="w-auto h-auto py-1 text-base font-normal text-white flex gap-4 hover:bg-gray-50/15 cursor-pointer items-center px-3">
            <CiSearch size={20} color={!theme ? "black" : "white"} />
            abcdefghi
          </li>
          <li className="w-auto h-auto py-1 text-base font-normal text-white flex gap-3 hover:bg-gray-50/15 cursor-pointer items-center px-3">
            <CiSearch size={20} color={!theme ? "black" : "white"} />
            abcdefghi
          </li>
        </ul>
        <input
          id="search"
          type="search"
          name="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          //ref={searchRef}
          autoComplete="false"
          // autoFocus
          className={
            theme
              ? "w-full h-full rounded-l-full placeholder:font-semibold placeholder:brightness-75 text-md bg-[#0F0F0F] text-white pl-4 pr-1 pb-[3px] border-[1.50px] focus-within:border-blue-500/75 focus-within:outline-none focus-within:border-r-[1.50px] border-[#272727] border-r-0"
              : "w-full h-full rounded-l-full text-md bg-gray-50 pl-4 pr-1 pb-[3px] border-[2px] border-[#272727] border-r-0"
          }
        />
        <button
          className={
            theme
              ? "w-[75px] h-full bg-[#272727] rounded-r-full border border-l-0 border-[#272727] flex justify-center items-center cursor-pointer"
              : "w-[75px] h-full bg-gray-300 rounded-r-full border border-l-0 border-[#272727] flex justify-center items-center cursor-pointer"
          }
        >
          <CiSearch size={24} color={!theme ? "black" : "white"} />
        </button>
      </div>
      {/* <Tooltip
          title="search with your voice"
          className="w-fit h-fit p-[10px] rounded-full bg-[#272727] cursor-pointer hover:bg-[rgba(255,255,255,0.2)]"
        >
          <MdMic color="white" size={27} />
        </Tooltip>
      </div> */}
      <div className="w-auto h-full flex justify-between items-center gap-3">
        <div className="w-auto h-auto relative">
          <Tooltip title="Create" onClick={() => setOpen((prev) => !prev)}>
            <IconButton>
              <MdOutlineVideoCall
                id="long-button"
                size={27}
                className="cursor-pointer"
                color={theme ? "white" : "black"}
              />
            </IconButton>
          </Tooltip>
          <div
            className={
              open
                ? "w-[110px] h-auto bg-[rgb(0,0,0,0.8)] absolute top-[50px] left-2 py-2 visible z-20 flex flex-col gap-2 rounded-md"
                : "w-[110px] h-auto bg-[rgb(0,0,0,0.8)] absolute top-[50px] left-2 py-2 invisible z-20 flex flex-col gap-2 rounded-md"
            }
          >
            <p className="w-full h-fit text-sm text-white font-medium px-2 cursor-pointer hover:bg-[rgba(255,255,255,0.10)] py-1">
              Upload video
            </p>
            <p className="w-full h-fit text-sm text-white font-medium px-2 cursor-pointer hover:bg-[rgba(255,255,255,0.10)] py-1">
              Go live
            </p>
          </div>
        </div>
        <Tooltip title="Notifications">
          <IconButton>
            <IoMdNotificationsOutline
              size={27}
              color="white"
              className="w-fit h-fit cursor-pointer"
            />
          </IconButton>
        </Tooltip>
        {!userDetail?.photoURL ? (
          <Skeleton
            variant="circular"
            animation="wave"
            width={30}
            height={30}
            className="ml-1"
          />
        ) : (
          <img
            src={userDetail?.photoURL || ""}
            alt="user img"
            width={33}
            height={33}
            className="w-[33px] h-[33px] ml-1 rounded-full cursor-pointer"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
