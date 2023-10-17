import React from "react";

import '../../style/Login.css';

import Logo from '../../assets/Logo.png';

function Header() {
    return( 
    <header className="header">  
        <img src={Logo} alt="Logo" className="logo-image"/>
    </header>
    );
}

export default Header