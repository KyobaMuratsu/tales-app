import React from "react";
import Header from "../layout/Components/Header";
import Container from "../layout/User/Register/Register";
import { GoogleOAuthProvider } from '@react-oauth/google';

function Register() {
   return(
   <>
   <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com">
   <Header></Header>
   <Container></Container>
   </GoogleOAuthProvider>
   </>
   );
}

export default Register