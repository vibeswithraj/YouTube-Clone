import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Slider = ({allData,name,path}) => {

  return (
    <div className="w-full h-auto bg-[#0F0F0F] relative">
      <div className="w-auto h-auto rounded-full bg-[#0F0F0F] p-3 absolute -right-4 top-[90px] z-10 cursor-pointer hover:bg-gray-700">
        <FaAngleRight />
      </div>
      <div className="w-auto h-auto flex justify-between items-center mb-4">
        <p className="text-xl font-bold">
          { name || "Watch later "}
          <span className="text-[18px] font-normal text-gray-400 ml-[10px]">
            {allData?.length || "100"}
          </span>
        </p>
        <Link to={path} className="text-md rounded-full px-4 py-[5px] font-normal border border-gray-500 hover:bg-[rgb(255,255,255,0.15)]">
          View all
        </Link>
      </div>
      <div className="w-full h-auto flex items-center gap-1 overflow-x-scroll scroll-smooth no-scrollbar">
        {allData?.map((item, index) => (
          <div
            className="w-auto h-auto rounded-lg"
            key={index}
            onClick={() => handleVideo(item?.id)}
          >
            <div className="w-[210.5px] h-[130px] relative">
              <img
                src={item?.thumbnailUrl ? item?.thumbnailUrl : ""}
                width={210.5}
                height={130}
                className="w-[210.5px] h-[130px] shrink-0 object-fill rounded-lg"
                alt="thumbnail"
              />
              <p className="absolute bottom-2 right-2 text-sm font-normal text-white bg-[rgb(0,0,0,0.5)] w-auto h-auto flex items-center justify-center px-[6px] pb-[2px] text-center rounded">
                {item?.duration}
              </p>
            </div>
            <div className="w-[210.5px] min-h-[100px] flex justify-between pt-2 pb-1 pl-1">
              <div className="w-auto h-auto flex flex-col">
                <p className="w-fit max-h-[44px] overflow-y-hidden text-[15px] font-semibold mb-2">
                  {item?.title}
                </p>
                <p className="w-fit h-auto text-[12px] text-gray-400">
                  {item?.author}
                </p>
                <p className="w-fit h-auto text-[12px] text-gray-400">
                  {item?.views + " " + "views *"}
                  {" " + item?.uploadTime}
                </p>
              </div>
              <button className="w-fit h-fit">
                <MoreVertIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
