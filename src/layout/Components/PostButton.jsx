import React from "react";
import '../../style/PostButton.css';
import Button from '../../assets/botaoPublicacao1.png';
import { Link } from "react-router-dom";
import { useRefreshToken } from "../../hooks/useRefreshToken";

function PostButton() {

    const refresh = useRefreshToken();
    
    return( 
            <div className="post-border">
            <Link to={'/CreatePost'}>
            <img src={Button} className="post-button" onClick={() => refresh()}/>
            </Link>
            </div>
            
    );
}

export default PostButton