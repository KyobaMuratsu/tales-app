import React from "react";
import HomeBar from "../layout/Components/HomeBar";
import ConfigPage from "../layout/User/ConfigPage/Configurations";
import { GoogleOAuthProvider } from '@react-oauth/google'

function Configurations() {

   return(
        <>
        <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com" >
        <HomeBar></HomeBar>
        <ConfigPage></ConfigPage>
        </GoogleOAuthProvider>
        </>
)}

export default Configurations