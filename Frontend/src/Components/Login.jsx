import {
  Backdrop,
  Checkbox,
  CircularProgress,
  Divider,
  TextField,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { MdOutlineLock } from 'react-icons/md';
import googleIcon from '../assets/Icon-Google.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import { auth } from '../Utilities/Firebase';
import {
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import userContext from '../Contexts/UserProvider';
import detailContext from '../Contexts/DetailProvider';

const Login = () => {
  const { userDetail, setUserDetail } = useContext(userContext);
  const { setPopup } = useContext(detailContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `${import.meta.env.VITE_LOCAL_URL}/signup`,
        {
          firstName,
          lastName,
          email,
          password,
        },
        { withCredentials: true }
      );
      if (data.error) {
        toast.error(data.error, { duration: 4000 });
      }
      toast.success(data.message, { duration: 4000 });
      setUserDetail(data.user);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      const user = auth.currentUser;
      await sendEmailVerification(user);
      console.log(user);
      if (user) {
        setUserDetail(user);
        setPopup(false);
        toast.success('Login Successfully!', { duration: 4000 });
        navigate('/home');
      }
      await axios.post(
        `${import.meta.env.VITE_LOCAL_URL}/signup`,
        {
          _id: userDetail?.uid,
          firstName: userDetail?.displayName.split(' ')[0],
          lastName: userDetail?.displayName.split(' ')[1],
          email: userDetail?.email,
          displayName: userDetail?.displayName,
          createdAt: userDetail?.createdAt,
          creationTime: userDetail?.creationTime,
          lastLoginAt: userDetail?.lastLoginAt,
          lastSignInTime: userDetail?.lastSignInTime,
          photoURL: userDetail?.photoURL,
          //password,
        },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[rgb(0,0,0,0.50)] absolute top-0 left-0 z-40">
      <div className="w-[500px] h-[650px] bg-white rounded-lg">
        <form
          action=""
          method="post"
          className="w-full h-full flex flex-col p-10"
          onSubmit={handleSubmit}
        >
          <div className="w-full h-auto flex flex-col items-center gap-2 mb-10">
            <span className="w-fit h-fit p-2 bg-green-500 flex justify-center items-center rounded-full">
              <MdOutlineLock color="white" size={25} />
            </span>
            <p className="text-2xl font-semibold">Sign Up</p>
          </div>
          <div className="w-full h-fit flex justify-between items-center gap-4 mb-4">
            <TextField
              //id="outlined-basic"
              label="FirstName"
              variant="outlined"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              //id="outlined-basic"
              label="LastName"
              variant="outlined"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="w-full h-auto flex flex-col gap-4 mb-1">
            <TextField
              //id="outlined-basic"
              label="E-mail"
              type="email"
              variant="outlined"
              fullWidth
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              //id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-fit h-fit flex gap-2 items-center mb-5">
            <Checkbox id="me" aria-label="Checkbox demo" size="small" />
            <label htmlFor="me" className="mb-[2px]">
              Remember me
            </label>
          </div>
          <button
            className="w-full h-auto py-2 text-lg bg-blue-500 text-white mb-1"
            onClick={handleSubmit}
          >
            Sign in
          </button>
          <div className="w-full h-fit flex justify-between">
            <p className="text-blue-500 cursor-pointer">Forgot password</p>
            <p className="text-blue-500 cursor-pointer">
              Don't have an account? Sign Up
            </p>
          </div>
          <div className="w-auto h-auto flex justify-center items-center gap-2">
            <hr className="bg-gray-400 w-full h-[1px]" />
            <p className="text-xl text-center my-5">or</p>
            <hr className="bg-gray-400 w-full h-[1px]" />
          </div>
          <div
            className="w-[240px] h-auto flex py-[10px] self-center gap-6 justify-center items-center bg-gray-200/80 cursor-pointer"
            onClick={handleGoogleLogin}
          >
            <img src={googleIcon} alt="img" />
            <p className="text-base">Sign Up with google</p>
          </div>
        </form>
      </div>
    </div>
  );
};

/*   <Backdrop
    //   sx={{ color: "#fff" }}
    //   open={userDetail}
    //   //  onClick={userDetail}
    //   >
    //     <CircularProgress color="inherit" />
    //   </Backdrop>
    // )}*/
export default Login;
