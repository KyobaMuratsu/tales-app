import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './style/index.css'

import App from './App';


ReactDOM.render(
  <GoogleOAuthProvider clientId='389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com'>
    <App/>
  </GoogleOAuthProvider>,
  document.getElementById('root')
)
