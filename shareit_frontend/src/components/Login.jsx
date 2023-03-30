import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import bgVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode';
import { client } from '../client';

const Login = () => {

    const navigate = useNavigate();

    const responseGoogle = (response) => {
        // console.log(jwt_decode(response.credential));
        localStorage.setItem('user', JSON.stringify(jwt_decode(response.credential)));
        const { name, jti, picture } = jwt_decode(response.credential);
        // console.log(name, picture, jti);
        const doc = {
            _id: jti,
            _type: 'user',
            userName: name,
            image: picture,
        }

        client.createIfNotExists(doc)
            .then(() => {
                navigate('/', {replace: true});
            })
    }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={bgVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} alt="logo" width="130" />
        </div>
        <div className="">
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={responseGoogle}
            cookiePolicy='single_host_origin'
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
