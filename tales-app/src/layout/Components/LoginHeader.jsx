import React from "react";

import '../User/Login/Login.css';

import Logo from '../../assets/tales_logo.png';

function LoginHeader() {
    return( 
    <header className="header">  
        <img src={Logo} alt="Logo" className="logo-image"/>
    </header>
    );
}

export default LoginHeader