import React, { useContext } from "react";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import detailContext from "../Contexts/DetailProvider";
import Aside, { CloseAside } from "../Components/Aside";
import userContext from "../Contexts/UserProvider";

const YourChannel = () => {
  const { asideOpen, theme } = useContext(detailContext);
  const { userDetail } = useContext(userContext);

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
            : "w-[240px] h-auto shrink-0 overflow-y-scroll scroll-smooth bg-[#0F0F0F] no-scrollbar"
        }
      >
        {asideOpen ? <CloseAside /> : <Aside />}
      </div>
      <div className="w-full px-20 h-screen bg-[#0F0F0F] text-white py-7 justify-center overflow-y-scroll no-scrollbar">
        <div className="w-fit h-auto flex gap-4 justify-start items-start">
          <img
            src={userDetail?.photoURL || ""}
            alt="img"
            width={120}
            height={120}
            className="w-[120px] h-[120px] bg-stone-500 rounded-full"
          />
          <div className="w-auto h-auto flex flex-col justify-between gap-2">
            <p className="w-full h-auto text-4xl font-bold text-white">
              {userDetail?.displayName || ""}
            </p>
            <p className="w-full h-auto text-sm font-normal text-gray-400 mb-1">
              @{userDetail?.displayName.trim().toLowerCase() || ""} . View channel
            </p>
            <div className="w-auto h-auto flex gap-2">
              <button className="w-auto h-[32px] px-3 pb-[1px] text-center rounded-full bg-[rgb(255,255,255,0.10)] hover:bg-gray-700/70 text-xs font-medium">
                <SwitchAccountOutlinedIcon
                  className="mr-1"
                  sx={{ width: 15, height: 15 }}
                />
                Switch account
              </button>
              <button className="w-auto h-[32px] px-3 pb-[1px] text-center rounded-full bg-[rgb(255,255,255,0.10)] hover:bg-gray-700/70 text-xs font-medium">
                <GoogleIcon className="mr-1" sx={{ width: 15, height: 15 }} />
                Google Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourChannel;
