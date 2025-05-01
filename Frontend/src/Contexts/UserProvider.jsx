import React, { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { auth } from "../Utilities/Firebase";
import axios from "axios";
import detailContext from "./DetailProvider";
const userContext = createContext();

const UserProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const { setPopup } = useContext(detailContext);

  // useEffect(()=>{
  //   const checkInMongodb = async () => {
  //   const { data } = await axios.get("http://localhost:3030/me", {
  //     withCredentials: true,
  //   });
  //   if (data.error) {
  //     toast.error(data.error, { duration: 4000 });
  //   }
  //   console.log(data);
  //   setUserDetail(data.user);
  //   if (!data.error) {
  //     toast.success("Welcome back!", { duration: 4000 });
  //   }
  // };
  // checkInMongodb();
  // },[])

  useEffect(() => {
    const checkInGoogle = async () => {
      await auth.onAuthStateChanged(async (user) => {
        console.log(user);
        setUserDetail(user);
        if (!user) setPopup(true);
        if (auth.user) {
          setUserDetail(user);
          //return setUserLogin(true);
        } else {
          //setUserLogin(false);
          //checkInMongodb();
        }
      });
    };
    checkInGoogle();
  }, []);

  return (
    <userContext.Provider
      value={{ userDetail, setUserDetail, userLogin, setUserLogin }}
    >
      {children}
    </userContext.Provider>
  );
};

export default userContext;
export { UserProvider };
