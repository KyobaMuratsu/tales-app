import React from "react";
import HomeBar from "../layout/Components/HomeBar";
import { GoogleOAuthProvider } from '@react-oauth/google'
import PostButton from "../layout/Components/PostButton";
import Post from "../layout/Components/Post"
import Feed from "../layout/User/Feed/Feed";

function Feedinfo() {

   return(
        <>
        <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com" >
        <HomeBar></HomeBar>
        <Feed></Feed>
        <PostButton></PostButton>
        </GoogleOAuthProvider>
        </>
)}

export default Feedinfo