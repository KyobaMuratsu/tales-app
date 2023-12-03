import React from "react";
import '../../style/PostButton.css';
import Button from '../../assets/botaoPublicacao3.png';
import { Link } from "react-router-dom";
import { useRefreshToken } from "../../hooks/useRefreshToken";

function PostButton() {

    const handleRefresh = () => {
        refresh();
    }

    const refresh = useRefreshToken();
    
    return( 
            <div className="post-border">
            <Link to={'/CreatePost'}>
            <img src={Button} className="post-button"/>
            </Link>
            </div>
            
    );
}

export default PostButton