import React from "react";
import '../../style/HomeBar.css';
import TalesIcon from '../../assets/tales_logo_alt.png';
import SearchIcon from '../../assets/search.svg';
import MessageIcon from '../../assets/message-circle.svg';
import NotificationIcon from '../../assets/bell.svg';
import UserIcon from '../../assets/user.svg';

function HomeBar() {
    return( 
    <div className="border">
        <div className="homebarLeft">
        <img src={TalesIcon} alt="Logo" className="tales-icon"/>
        <input type="text" alt="Barra de pesquisa" id="searchbar" className="searchbar" placeholder="Pesquisar no Tales"/>
        <img src={SearchIcon} alt="Search" className="search-icon"/>
        </div>
        <div className="homebarRight">
        <img src={MessageIcon} alt="Message" className="message-icon"/>
        <div className="div-line"></div>
        <img src={NotificationIcon} alt="Notification" className="notif-icon"/>
        <div className="div-line"></div>
        <img src={UserIcon} alt="Profile" className="user-icon"/>
        </div>
    </div>
    );
}

export default HomeBar