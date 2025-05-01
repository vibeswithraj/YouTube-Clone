import React, { useContext } from 'react';
import Aside, { CloseAside } from '../Components/Aside';
import detailContext from '../Contexts/DetailProvider';
import '../index.css';
import AllVideos from '../Components/AllVideos';
import Login from '../Components/Login';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Skeleton } from '@mui/material';
import { useFeatures } from '../Hooks/useFeatures';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Home() {
  const { asideOpen, theme, popup, allData, loading, setVideoDetail } =
    useContext(detailContext);
  const [open, setOpen] = useFeatures();
  const navigate = useNavigate();

  const handleVideo = async (id) => {
    const { data } = await axios.get(`http://localhost:3030/video/${id}`, {
      withCredentials: true,
    });
    if (data.error) {
      toast.error(data.error, { duration: 4000 });
    }
    console.log(data);
    setVideoDetail(data);
    navigate(`/video/${id}`);
  };

  const buttonArr = [
    {
      id: 0,
      name: 'All',
    },
    {
      id: 1,
      name: 'Videos',
    },
    {
      id: 2,
      name: 'Shorts',
    },
  ];

  return (
    <div
      className={
        theme
          ? 'bg-[#0F0F0F] w-auto h-screen text-white'
          : 'w-auto h-screen bg-white text-black'
      }
    >
      {/*popup && <Login />*/}

      <div
        className={
          theme
            ? 'w-full h-full relative bg-[#0F0F0F]  text-white'
            : 'w-full h-full relative bg-white text-black'
        }
      >
        <div
          className={
            theme
              ? 'w-full h-full flex bg-[#0F0F0F] no-scrollbar'
              : 'w-full h-full flex bg-white text-black no-scrollbar'
          }
        >
          <div
            className={
              asideOpen
                ? 'w-auto h-auto shrink-0 bg-[#0F0F0F]'
                : 'w-[240px] h-auto shrink-0 bg-[#0F0F0F] overflow-y-scroll no-scrollbar'
            }
          >
            {asideOpen ? <CloseAside /> : <Aside />}
          </div>
          <div className="w-full h-screen">
            <div className="w-full h-auto p-2 flex justify-start items-center">
              {buttonArr?.map((item, index) => (
                <button
                  key={index}
                  className={
                    item.id === 0
                      ? 'w-fit h-fit py-[5px] px-[12px] rounded-lg text-black text-start text-[15px] font-medium ml-3 flex items-center bg-white'
                      : 'w-fit h-fit py-[5px] px-[12px] rounded-lg text-white text-start text-[15px] font-medium ml-3 flex items-center bg-[#272727] hover:bg-[rgb(255,255,255,0.2)]'
                  }
                >
                  {item?.name}
                </button>
              ))}
            </div>
            <div
              id="allVideos"
              className={
                asideOpen
                  ? 'w-full flex flex-wrap justify-around items-start pt-5 overflow-y-scroll scroll-smooth bg-[#0F0F0F] text-white no-scrollbar'
                  : 'w-full flex flex-wrap justify-around items-start pt-5 overflow-y-scroll scroll-smooth bg-[#0F0F0F] text-white no-scrollbar'
              }
            >
              {!loading
                ? allData?.map((item, index) => (
                    <div
                      className="w-auto h-auto rounded-xl mb-4 cursor-pointer"
                      key={index}
                    >
                      <div
                        className={
                          asideOpen
                            ? 'w-[330px] h-[190px] relative'
                            : 'w-[357px] h-[208px] relative'
                        }
                      >
                        <Link
                          //to={`video/${item?.id}`}
                          onClick={() => handleVideo(item?.id)}
                        >
                          <img
                            src={item?.thumbnailUrl ? item?.thumbnailUrl : ''}
                            //   width={330}
                            //   height={190}
                            className={
                              asideOpen
                                ? 'w-[330px] h-[190px] shrink-0 object-cover rounded-xl'
                                : 'w-[357px] h-[208px] shrink-0 object-cover rounded-xl'
                            }
                            alt="thumbnail"
                          />
                        </Link>
                        <p className="absolute bottom-2 right-2 text-sm font-normal text-white bg-[rgb(0,0,0,0.5)] w-auto h-auto flex items-center justify-center px-[6px] pb-[2px] text-center rounded">
                          {item?.duration}
                        </p>
                      </div>
                      <div
                        className={
                          asideOpen
                            ? 'w-[330px] min-h-[100px] flex justify-between pt-3 pb-1'
                            : 'w-[357px] min-h-[100px] flex justify-between pt-3 pb-1'
                        }
                      >
                        <div className="w-auto h-auto flex gap-[12px]">
                          <div
                            //src=""
                            width={35}
                            height={35}
                            className="w-[40px] h-[40px] rounded-full shrink-0 bg-gray-200"
                            //alt="profile image"
                          >
                            <Avatar />
                          </div>
                          <div className="w-auto h-auto flex flex-col">
                            <p className="w-fit max-h-[44px] text-wrap overflow-y-hidden text-[16px] font-semibold mb-1">
                              {item?.title}
                            </p>
                            <p className="w-fit h-auto text-[14px] text-gray-400">
                              {item?.author}
                            </p>
                            <p className="w-fit h-auto text-[14px] text-gray-400">
                              {item?.views + ' ' + 'views *'}
                              {' ' + item?.uploadTime}
                            </p>
                          </div>
                        </div>
                        <div
                          className="w-auto h-auto relative z-50"
                          onClick={() => setOpen((prev) => !prev)}
                        >
                          <button className="w-fit h-fit">
                            <MoreVertIcon />
                          </button>
                          {/* <ul
                    className={
                      open
                        ? "w-[210px] h-auto opacity-0 bg-gray-800 absolute -top-[325px] rounded-lg"
                        : "w-[210px] h-auto opacity-0 bg-gray-800 absolute -top-[325px] rounded-lg"
                    }
                    onClick={() => handleMenu(item?.id)}
                  >
                    <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] px-2 cursor-pointer">
                      <ExpandMoreIcon sx={{ height: 30 }} />
                      <p className="w-fit h-fit text-md">Add to queue</p>
                    </li>
                    <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] px-2 cursor-pointer">
                      <ExpandMoreIcon sx={{ height: 30 }} />
                      <p className="w-fit h-fit text-md">Save to watch later</p>
                    </li>
                    <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] px-2 cursor-pointer">
                      <ExpandMoreIcon sx={{ height: 30 }} />
                      <p className="w-fit h-fit text-md">Save to playlist</p>
                    </li>
                    <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] px-2 cursor-pointer">
                      <ExpandMoreIcon sx={{ height: 30 }} />
                      <p className="w-fit h-fit text-md">Download</p>
                    </li>
                    <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] px-2 cursor-pointer">
                      <ExpandMoreIcon sx={{ height: 30 }} />
                      <p className="w-fit h-fit text-md">Share</p>
                    </li>
                    <Divider orientation="horizontal" className="bg-white" />
                    <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] px-2 cursor-pointer">
                      <ExpandMoreIcon sx={{ height: 30 }} />
                      <p className="w-fit h-fit text-md">Not interested</p>
                    </li>
                    <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] px-2 cursor-pointer">
                      <ExpandMoreIcon sx={{ height: 30 }} />
                      <p className="w-fit h-fit text-md">
                        Don't recommend channel
                      </p>
                    </li>
                    <li className="w-full h-auto flex gap-4 py-1 items-center hover:bg-[rgb(255,255,255,0.12)] px-2 cursor-pointer">
                      <ExpandMoreIcon sx={{ height: 30 }} />
                      <p className="w-fit h-fit text-md">Report</p>
                    </li>
                  </ul> */}
                        </div>
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
      </div>
    </div>
  );
}

/* <div className="w-[376px] flex flex-col">
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
          </div> */
