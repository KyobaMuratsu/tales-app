import React from "react";
import '../../style/PostButton.css';
import Button from '../../assets/botao_publicacao.png';
import TalesIcon from '../../assets/tales_logo_alt.png';

function PostButton() {
    return( 
        <div className="post-border">
        <img src={Button} className="post-button"/>
        </div>
    );
}

export default PostButton