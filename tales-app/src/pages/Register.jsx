import React from "react";
import LoginHeader from "../layout/Components/LoginHeader";
import Container from "../layout/User/Register/Register";
import { GoogleOAuthProvider } from '@react-oauth/google';

function Register() {
   
   return(
   <>
      <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com">
      <LoginHeader></LoginHeader>
      <Container></Container>
      </GoogleOAuthProvider>
      </>
   );
}

export default Register