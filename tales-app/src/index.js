import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './layout/Components/AuthProvider';

import './style/index.css'

import App from './App';

const clientId = "389698188235-6rjeapv7a0p3mquilchkavfb3283g8vo.apps.googleusercontent.com";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
  <GoogleOAuthProvider clientId={clientId}>
    <AuthProvider>
    <App/>
    </AuthProvider>
  </GoogleOAuthProvider>
  </>
);
