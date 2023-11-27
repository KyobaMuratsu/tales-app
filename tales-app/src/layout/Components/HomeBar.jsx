import '../../style/HomeBar.css';
import TalesIcon from '../../assets/tales_logo_alt2.png';
import TalesLogo from '../../assets/tales_logo2.png';
import SearchIcon from '../../assets/search.svg';
import MessageIcon from '../../assets/message-circle-off.svg';
import NotificationIcon from '../../assets/bell.svg';
import MenuIcon from '../../assets/menu.svg'
import UserIcon from '../../assets/user.svg';
import ConfigIcon from '../../assets/settings.svg';
import LogoutIcon from '../../assets/log-out.svg';
import { Link } from 'react-router-dom';


import React, {useState, useEffect, useRef} from "react";

function HomeBar() {

    const [openNotif, setOpenNotif] = useState(false);
    const [openProf, setOpenProf] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)) {
              setOpenNotif(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    });

    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)) {
              setOpenProf(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    });

    return( 
    <div className="border">
        <div className="homebarLeft">
        <Link justify-content="center" className="titulo" to={'/Feed'}>
            <img src={TalesIcon} alt="Logo" className="tales-icon"/>
            </Link>
        <input type="text" alt="Barra de pesquisa" id="searchbar" className="searchbar" placeholder="Pesquisar no Tales"/>
        <img src={SearchIcon} alt="Search" className="search-icon"/>
        </div>

        <div className="homebarRight" ref={menuRef}>
        <img src={MessageIcon} alt="Message" className="message-icon"/>

        <div className="div-line"></div>

        <img src={NotificationIcon} alt="Notification" className="notif-icon" onClick={()=>{setOpenNotif(!openNotif); setOpenProf(false)}}/>
        <div className={`dropdown-menu ${openNotif? 'active' : 'inactive'}` }>
            <h3>Notificações<br/><span>Mantenha-se atualizado</span></h3>
            <ul>
                <DropdownItemNotification img = {TalesLogo} text = {"Você não possui notificações!"}/>
            </ul>
        </div>

        <div className="div-line"></div>

        <img src={MenuIcon} alt="Profile" className="menu-icon" onClick={()=>{setOpenProf(!openProf); setOpenNotif(false)}}/>
        <div className={`dropdown-menu2 ${openProf? 'active' : 'inactive'}`}>
            <h3>Menu<br/><span>Suas informações</span></h3>
            <ul>
                <DropdownItemProfile img = {UserIcon} text = {"Meu perfil"}/>
                <DropdownItemProfile img = {ConfigIcon} text = {"Configurações"}/>
                <DropdownItemProfile img = {LogoutIcon} text = {"Logout"}/>
            </ul>
        </div>
        </div>
    </div>
    );
}

function DropdownItemNotification(props){
    return(
        <li className="dropdownItemNotification">
            <img src={props.img} className="dropdownItemNotification-img"></img>
            <a className="h1">{props.text}</a>
        </li>
    );
}

function DropdownItemProfile(props){
    return(
        <li className="dropdownItemProfile">
            <img src={props.img} className="dropdownItemProfile-img"></img>
            <a className="h1">{props.text}</a>
        </li>
    );
}

export default HomeBar