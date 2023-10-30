import React from "react";
import HomeBar from "../layout/Components/HomeBar";
import Container from '../layout/User/Feed/Feed';
import { GoogleOAuthProvider } from '@react-oauth/google'

function Feed() {

   return(
        <>
        <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com" >
        <HomeBar/>
        </GoogleOAuthProvider>
        </>
)}

export default Feed