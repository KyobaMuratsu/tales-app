import React from "react";
import UserConfig from "../layout/User/UserConfig/UserConfig.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import HomeBar from "../layout/Components/HomeBar.jsx";

function UserConfiguration() {
   
   return(
   <>
   <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com">
   <HomeBar></HomeBar>
   <UserConfig></UserConfig>
   </GoogleOAuthProvider>
   </>
   );
}

export default UserConfiguration