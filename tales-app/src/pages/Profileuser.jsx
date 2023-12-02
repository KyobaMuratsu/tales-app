import React from "react";
import HomeBar from "../layout/Components/HomeBar";
import { GoogleOAuthProvider } from '@react-oauth/google'
import Profile from "../layout/User/Profile/Profile";

function Profileuser() {

   return(
        <>
        <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com" >
        <HomeBar></HomeBar>
        <Profile></Profile>
        </GoogleOAuthProvider>
        </>
)}

export default Profileuser