import React from "react";
import '../../style/PostButton.css';
import Button from '../../assets/botao_publicacao.png';
import { Link } from "react-router-dom";

function PostButton() {
    return( 
        <Link to={'/CreatePost'}>
            <div className="post-border">
            <img src={Button} className="post-button"/>
            </div>
        </Link>
    );
}

export default PostButton