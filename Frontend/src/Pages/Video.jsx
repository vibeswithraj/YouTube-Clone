import React, { useContext } from 'react';
import detailContext from '../Contexts/DetailProvider';
import Aside, { CloseAside } from '../Components/Aside';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaPlay } from 'react-icons/fa6';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { Divider, Tooltip } from '@mui/material';
import { PiShareFat } from 'react-icons/pi';
import { TfiDownload } from 'react-icons/tfi';
import { SlOptions } from 'react-icons/sl';
import { useFeatures } from '../Hooks/useFeatures';
import axios from 'axios';
import toast from 'react-hot-toast';

const Video = () => {
  const { theme, allData, setAllData, setVideoDetail, videoDetail } =
    useContext(detailContext);
  const [openDes, setOpenDes] = useFeatures();

  const handleSubscribe = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCAL_URL}/subscribe/${id}`
      );
      if (data.error) toast.error(data.error);

      console.log(data);
      const newAllData = await allData.map((i) => {
        if (i.id === id) {
          return { ...i, isSubscriber: (i.isSubscriber = true) };
        } else return i;
      });
      setAllData(newAllData);
      handleAllDetail(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAllDetail = async (id) => {
    const { data } = await axios.get(`http://localhost:3030/video/${id}`, {
      withCredentials: true,
    });
    if (data.error) {
      toast.error(data.error, { duration: 4000 });
    }
    setVideoDetail(data);
  };

  return (
    <div
      className={
        theme
          ? 'w-full h-auto flex gap-6 px-12 items-start bg-[#0F0F0F] text-white pt-2 relative'
          : 'w-full h-auto flex gap-6 px-12 items-start bg-white text-black pt-2 relative'
      }
    >
      <div className="w-[70%] h-full">
        <div className="w-full min-h-[550px] rounded-xl mb-3">
          <video
            src={videoDetail?.videoUrl}
            controls
            className="w-full min-h-[550px] rounded-xl object-fill"
          ></video>
        </div>
        <p className="text-2xl text-white font-semibold text-wrap mb-4">
          {videoDetail?.title || ''}
        </p>
        <div className="w-full h-auto flex justify-between items-center">
          <div className="w-fit h-auto flex items-center gap-4">
            <img
              src=""
              width={40}
              height={40}
              className={
                videoDetail?.isLive
                  ? 'w-[40px] h-[40px] rounded-full ring-2 ring-offset-2 ring-offset-[#0F0F0F] ring-red-600 bg-gray-400'
                  : 'w-[40px] h-[40px] rounded-full bg-gray-400'
              }
              alt="img"
            />
            <div>
              <Tooltip title={videoDetail?.author} className="cursor-pointer">
                <p className="w-fit h-auto text-wrap text-lg font-semibold text-white">
                  {videoDetail?.author || ''}
                </p>
              </Tooltip>
              <p className="w-fit h-auto text-wrap text-sm font-meduim text-gray-400">
                {videoDetail?.subscriber.toLowerCase() || ''}
              </p>
            </div>
            <button
              onClick={() => handleSubscribe(videoDetail?.id)}
              title="Subscribe"
              className="w-fit h-fit rounded-full bg-white hover:bg-slate-200 text-black text-md font-sans font-semibold py-2 px-4"
            >
              {videoDetail?.isSubscriber ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
          <div className="w-fit h-fit flex items-center gap-4">
            <div className="w-fit h-[36px] flex bg-[#272727] items-center rounded-full">
              <button
                title="Like"
                className="w-fit h-full text-base font-medium flex items-center px-4 hover:bg-gray-500/30 rounded-l-full"
              >
                <BiLike size={22} className="mr-2" />
                {videoDetail?.views || '2.1k'}
              </button>
              <span className="bg-gray-500 w-[1px] h-[24px]"></span>
              <button
                title="Unlike"
                className="w-fit h-full px-4 rounded-r-full hover:bg-gray-500/30"
              >
                <BiDislike size={22} />
              </button>
            </div>
            <button
              title="Share"
              className="w-fit h-[36px] text-base font-mono font-semibold flex items-center gap-2 px-4 rounded-full bg-[#272727] hover:bg-gray-500/40"
            >
              <PiShareFat size={24} /> Share
            </button>
            <Tooltip title="Download">
              <button className="w-fit h-[36px] text-base font-mono font-semibold flex items-center gap-3 px-4 rounded-full bg-[#272727] hover:bg-gray-500/40">
                <TfiDownload size={16} />
                Download
              </button>
            </Tooltip>
            <button className="w-fit h-[36px] flex items-center px-[11px] rounded-full bg-[#272727] hover:bg-gray-500/40">
              <SlOptions size={16} />
            </button>
          </div>
        </div>
        <div className="w-full h-auto bg-[#272727] mt-3 rounded-lg py-3 px-4 cursor-pointer transition-all ease-linear duration-300">
          <div className="w-fit h-fit flex gap-2 text-base font-semibold text-white">
            <span>{videoDetail?.views + ' views'}</span>
            <span>{videoDetail?.uploadTime}</span>
            <span className="text-blue-400">{videoDetail?.title}</span>
          </div>
          <p
            id="des"
            className={
              openDes
                ? 'text-white mt-3 block transition-all ease-linear duration-300'
                : 'text-white mt-3 hidden transition-all ease-linear duration-300'
            }
          >
            {'Description: ' + videoDetail?.description}
          </p>
          <button
            className="text-white mt-3 font-semibold"
            onClick={() => setOpenDes((prev) => !prev)}
          >
            {openDes ? 'Show less' : '...more'}
          </button>
        </div>
      </div>
      <div className="w-[30%] h-full">
        <div className="w-full h-full overflow-y-scroll scroll-smooth no-scrollbar">
          {allData?.map((item, index) => (
            <div
              className="w-full h-auto flex gap-2 justify-center items-center rounded-xl mb-2 cursor-pointer"
              key={index}
              onClick={() => handleVideo(item?.id)}
            >
              <div className="w-[170px] h-[100px] relative shrink-0">
                <img
                  src={item?.thumbnailUrl ? item?.thumbnailUrl : ''}
                  //   width={330}
                  //   height={190}
                  className="w-[170px] h-[100px] shrink-0 object-cover rounded-xl"
                  alt="thumbnail"
                />
                <p className="absolute bottom-2 right-2 text-xs font-semibold text-white bg-[rgb(0,0,0,0.5)] w-auto h-auto flex items-center justify-center px-[6px] pb-[2px] text-center rounded">
                  {'100 videos'}
                </p>
              </div>
              <div className="w-full min-h-[100px] flex items-start justify-between pb-1">
                <div className="w-auto h-auto flex gap-[12px]">
                  <div className="w-auto h-auto flex flex-col">
                    <p className="w-fit max-h-[44px] text-wrap overflow-y-hidden text-[16px] font-semibold mb-1">
                      {item?.title}
                    </p>
                    <p className="w-fit h-auto text-wrap text-[14px] text-gray-300/80">
                      {item?.author}
                    </p>
                    <p className="w-fit h-auto text-wrap text-[12px] text-gray-300/80">
                      {item?.views + ' ' + 'views *'}
                      {' ' + item?.uploadTime}
                    </p>
                  </div>
                </div>
                <button className="w-fit h-fit">
                  <MoreVertIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <Aside />
      </div>
    </div>
  );
};

export default Video;
