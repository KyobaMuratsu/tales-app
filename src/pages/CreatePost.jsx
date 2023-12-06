import React from "react";
import HomeBar from "../layout/Components/HomeBar";
import { GoogleOAuthProvider } from '@react-oauth/google'
import PostCreation from "../layout/User/CreatePost/CreatePost.jsx";

function CreatePost() {

   return(
        <>
        <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com" >
        <HomeBar></HomeBar>
        <PostCreation></PostCreation>
        </GoogleOAuthProvider>
        </>
)}

export default CreatePost