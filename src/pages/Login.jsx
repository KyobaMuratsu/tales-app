import React from "react";
import LoginHeader from "../layout/Components/LoginHeader";
import Container from '../layout/User/Login/Login';
import { GoogleOAuthProvider } from '@react-oauth/google'

function Login() {

   return(
        <>
        <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com" >
        <LoginHeader/>
        <Container/>
        </GoogleOAuthProvider>
        </>
)}

export default Login