import React from "react";
import Header from '../layout/Components/Header';
import Container from '../layout/Login/ContainerLogin';
import { GoogleOAuthProvider } from '@react-oauth/google'

function Login() {

   return(
        <>
        <GoogleOAuthProvider clientId= "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com" >
        <Header/>
        <Container/>
        </GoogleOAuthProvider>
        </>
)}

export default Login