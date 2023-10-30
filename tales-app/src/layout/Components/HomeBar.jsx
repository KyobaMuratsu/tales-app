import React from "react";
import '../../style/HomeBar.css';
import TalesIcon from '../../assets/tales_logo_alt.png';
import SearchIcon from '../../assets/search.svg';

function HomeBar() {
    return( 
    <div className="homebar">
        <img src={TalesIcon} alt="Logo" className="tales-icon"/>
        <input type="text" alt="Barra de pesquisa" id="searchbar" className="searchbar"/>
        <img src={SearchIcon} alt="Logo" className="search-icon"/>
    </div>
    );
}

export default HomeBar