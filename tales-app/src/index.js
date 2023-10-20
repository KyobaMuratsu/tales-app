import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './style/index.css'

import App from './App';

const clientId = "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com";


ReactDOM.render(
  <GoogleOAuthProvider clientId={clientId}>
    <App/>
  </GoogleOAuthProvider>,
  document.getElementById('root')
)
