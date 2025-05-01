import { useContext } from "react";
import detailContext from "../Contexts/DetailProvider";
import { Skeleton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaPlay } from "react-icons/fa6";
import Aside, { CloseAside } from "../Components/Aside";

const Playlists = () => {
  const { asideOpen, theme, allData, loading } = useContext(detailContext);

  return (
    <div
      className={
        theme
          ? "w-full h-screen flex bg-[#0F0F0F] text-white no-scrollbar"
          : "w-full h-screen flex bg-white text-black no-scrollbar"
      }
    >
      <div
        className={
          asideOpen
            ? "w-auto h-auto shrink-0"
            : "w-[240px] h-auto shrink-0 overflow-y-scroll no-scrollbar"
        }
      >
        {asideOpen ? <CloseAside /> : <Aside />}
      </div>
      <div className="w-full h-full px-4 overflow-y-scroll no-scrollbar scroll-smooth">
        <div className="w-full h-auto flex gap-6 mt-4 flex-col">
          <p className="text-4xl font-bold text-white">Playlists</p>
          <button className="w-fit h-8 pb-[1.8px] px-[10px] bg-gray-50/15 text-white text-sm font-semibold rounded-lg flex items-center">
            Recently added <ExpandMoreIcon sx={{ width: 20, height: 20 }} />
          </button>
        </div>
        <div
          className={
            asideOpen
              ? "w-full h-auto grid grid-cols-5 justify-items-center pb-10 pt-7 bg-[#0F0F0F] text-white"
              : "w-full h-auto grid grid-cols-4 justify-items-center pb-10 pt-7 bg-[#0F0F0F] text-white"
          }
        >
          {!loading
            ? allData?.map((item, index) => (
                <div
                  className="w-auto h-auto rounded-xl mb-4 cursor-pointer"
                  key={index}
                  onClick={() => handleVideo(item?.id)}
                >
                  <div
                    className={
                      asideOpen
                        ? "w-[260px] h-[160px] relative"
                        : "w-[280px] h-[170px] relative"
                    }
                  >
                    <img
                      src={item?.thumbnailUrl ? item?.thumbnailUrl : ""}
                      //   width={330}
                      //   height={190}
                      className={
                        asideOpen
                          ? "w-[260px] h-[160px] shrink-0 object-cover rounded-xl"
                          : "w-[280px] h-[170px] shrink-0 object-cover rounded-xl"
                      }
                      alt="thumbnail"
                    />
                    <p className="absolute bottom-2 right-2 text-xs font-semibold text-white bg-[rgb(0,0,0,0.5)] w-auto h-auto flex items-center justify-center px-[6px] pb-[2px] text-center rounded">
                      {"100 videos"}
                    </p>
                    <div className="absolute w-full h-full bg-[rgb(0,0,0,0.5)] opacity-0 hover:opacity-100 top-0 flex justify-center items-center">
                      <button className="w-auto h-auto text-sm font-semibold py-[8px] px-10 bg-transparent rounded-full flex gap-2 items-center justify-center">
                        <FaPlay />
                        Play all
                      </button>
                    </div>
                  </div>
                  <div
                    className={
                      asideOpen
                        ? "w-[260px] min-h-[100px] flex justify-between pt-3 pb-1"
                        : "w-[280px] min-h-[100px] flex justify-between pt-3 pb-1"
                    }
                  >
                    <div className="w-auto h-auto flex gap-[12px]">
                      <div
                        //src=""
                        width={35}
                        height={35}
                        className="w-[40px] h-[40px] rounded-full shrink-0 bg-gray-200"
                        //alt="profile image"
                      ></div>
                      <div className="w-auto h-auto flex flex-col">
                        <p className="w-fit max-h-[44px] text-wrap overflow-y-hidden text-[16px] font-semibold mb-1">
                          {item?.title}
                        </p>
                        <p className="w-fit h-auto text-[14px] text-gray-400">
                          {item?.author}
                        </p>
                        <p className="w-fit h-auto text-[14px] text-gray-400">
                          {item?.views + " " + "views *"}
                          {" " + item?.uploadTime}
                        </p>
                      </div>
                    </div>
                    <button className="w-fit h-fit">
                      <MoreVertIcon />
                    </button>
                  </div>
                </div>
              ))
            : allData?.map((item, index) => (
                <div className="w-[376px] flex flex-col" key={index}>
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={376}
                    height={208}
                    className="rounded-xl"
                  />
                  <div className="w-auto h-auto mt-4 flex gap-4 px-3">
                    <Skeleton
                      variant="circular"
                      animation="wave"
                      width={40}
                      height={40}
                    />
                    <div className="w-auto h-auto">
                      <Skeleton
                        variant="text"
                        animation="wave"
                        className="w-[285px] h-[35px] rounded-lg"
                      />
                      <Skeleton
                        variant="text"
                        animation="wave"
                        className="w-[150px] h-[35px] rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Playlists;
