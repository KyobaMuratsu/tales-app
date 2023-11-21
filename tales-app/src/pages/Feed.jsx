import React from "react";
import HomeBar from "../layout/Components/HomeBar";
import { GoogleOAuthProvider } from '@react-oauth/google'
import PostButton from "../layout/Components/PostButton";

function Feed() {

   return(
        <>
        <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com" >
        <HomeBar></HomeBar>
        <PostButton></PostButton>
        </GoogleOAuthProvider>
        </>
)}

export default Feed