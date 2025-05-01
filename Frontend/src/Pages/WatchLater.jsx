import React, { useContext } from "react";
import { LuArrowDownToLine } from "react-icons/lu";
import { FaPlay } from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MdSort } from "react-icons/md";
import detailContext from "../Contexts/DetailProvider";
import Aside, { CloseAside } from "../Components/Aside";
import userContext from "../Contexts/UserProvider";

const WatchLater = () => {
  const { asideOpen, theme, allData } = useContext(detailContext);
  const { userDetail } = useContext(userContext);
  const oneImg = allData.find((i) => i.id === "1");
  return (
    <div
      className={
        theme
          ? "w-full h-screen -mt-[56px] flex bg-[#0F0F0F] no-scrollbar"
          : "w-full h-screen -mt-[56px] flex bg-white text-white no-scrollbar"
      }
    >
      <div
        className={
          asideOpen
            ? "w-auto mt-[56px] h-auto shrink-0"
            : "w-[240px] mt-[56px] h-auto shrink-0 overflow-y-scroll no-scrollbar"
        }
      >
        {asideOpen ? <CloseAside /> : <Aside />}
      </div>
      <div className="w-full h-ful mt-[56px] flex px-5 gap-1 pt-6">
        <div className="w-auto h-auto relative p-7 z-20">
          <img
            src={oneImg?.thumbnailUrl}
            alt="img"
            className="w-full h-full mb-5 object-fill -z-10 absolute top-0 left-0 rounded-xl"
            // width={312}
            // height={175.5}
          />
          <div className="w-full h-full p-7 -z-10 bg-gradient-to-b absolute top-0 left-0 from-[rgba(255,255,255,0.1)] to-black rounded-xl backdrop-blur-3xl"></div>
          <img
            src={oneImg?.thumbnailUrl}
            alt="img"
            className="min-w-[312px] h-[175.5px] shrink-0 rounded-xl mb-5"
            width={312}
            height={175.5}
          />
          <p className="text-3xl font-bold text-white mb-5">{oneImg?.title}</p>
          <p className="text-md font-semibold text-white">{userDetail?.displayName || ""}</p>
          <p className="text-sm font-normal text-gray-200 mb-3">
            {"1206 videos No views"}
          </p>
          <button className="w-auto h-auto p-2 bg-[rgb(255,255,255,0.2)] rounded-full mb-3">
            <LuArrowDownToLine color="white" />
          </button>
          <div className="w-full h-auto flex gap-4 items-center">
            <button className="w-full h-auto text-sm font-semibold py-[8px] bg-white hover:bg-[rgba(255,255,255,0.85)] rounded-full flex gap-2 items-center justify-center">
              <FaPlay />
              Play all
            </button>
            <button className="w-full h-auto text-sm font-semibold py-[8px] bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] text-white rounded-full flex gap-2 items-center justify-center">
              <FaRandom />
              Shuffle
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col overflow-y-scroll scroll-smooth no-scrollbar">
          <button className="w-fit h-fit py-1 px-3 rounded-full text-white text-start text-lg font-semibold ml-3 flex items-center hover:bg-[rgb(255,255,255,0.10)]">
            <MdSort className="mr-2" />
            Sort
          </button>
          {allData?.map((item, index) => (
            <div
              className="w-full h-[140px] flex items-center gap-3 px-3 py-2 hover:bg-[rgb(255,255,255,0.1)] cursor-pointer text-white rounded-lg"
              key={index}
            >
              <p className="w-fit h-fit">{index === 0 ? (index = 1) : index}</p>
              <div className="w-full h-auto flex gap-3">
                <div className="w-[170px] h-[100px] relative">
                  <img
                    src={item?.thumbnailUrl ? item?.thumbnailUrl : ""}
                    width={170}
                    height={100}
                    className="w-[170px] h-[100px] shrink-0 object-fill rounded-lg"
                    alt="thumbnail"
                  />
                  <p className="absolute bottom-2 right-2 text-sm font-normal text-white bg-[rgb(0,0,0,0.5)] w-auto h-auto flex items-center justify-center px-[6px] pb-[2px] text-center rounded">
                    {item?.duration}
                  </p>
                </div>
                <div className="w-auto h-auto flex flex-col">
                  <p className="w-fit max-h-[44px] overflow-y-hidden text-[16px] font-semibold mb-2">
                    {item?.title}
                  </p>
                  <p className="w-fit h-auto text-[12px] text-gray-400">
                    {item?.author + " * "}
                    {item?.views + " " + "views *"}
                    {" " + item?.uploadTime}
                  </p>
                </div>
              </div>
              <button className="w-fit h-fit">
                <MoreVertIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
