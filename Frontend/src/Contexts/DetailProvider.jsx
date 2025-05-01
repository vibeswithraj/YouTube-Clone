import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const detailContext = createContext();

const DetailProvider = ({ children }) => {
  const [asideOpen, setAsideOpen] = useState(false);
  const [theme, setTheme] = useState(true);
  const [videoDetail, setVideoDetail] = useState();
  const [allData, setAllData] = useState([{}, {}, {}, {}, {}, {}]);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [subscription, setSubscription] = useState([]);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_LOCAL_URL}/subscriptions`
        );
        if (data.error) {
          toast.error(data.error);
        }
        console.log(data);
        setSubscription(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubscription();
  }, [allData]);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_LOCAL_URL}/data`
        );
        setAllData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    // setTimeout(() => {
    getData();
    // }, 2000);
  }, []);

  return (
    <detailContext.Provider
      value={{
        popup,
        setPopup,
        loading,
        setLoading,
        allData,
        setAllData,
        asideOpen,
        setAsideOpen,
        theme,
        setTheme,
        videoDetail,
        setVideoDetail,
      }}
    >
      {children}
    </detailContext.Provider>
  );
};

export default detailContext;
export { DetailProvider };
