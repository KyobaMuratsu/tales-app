import React from "react";
import '../../style/PostButton.css';
import Button from '../../assets/botao_publicacao.png';
import { Link } from "react-router-dom";
import { useRefreshToken } from "../../hooks/useRefreshToken";

function PostButton() {

    const refresh = useRefreshToken();
    
    return( 
        <Link to={'/CreatePost'}>
            <div className="post-border">
            <img src={Button} className="post-button" onClick={() => refresh()}/>
            </div>
        </Link>
    );
}

export default PostButton