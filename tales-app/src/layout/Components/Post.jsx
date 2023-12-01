import '../../style/Post.css';
import React, { useRef, useState } from "react";
import Imagem from '../../assets/luf6.jpg';
import Imagem2 from '../../assets/luf7.png';
import Imagem3 from '../../assets/luf8.png';
import TextareaAutosize from 'react-textarea-autosize';


const handlePost = "";

function Post(){

    return(
        <main className="main">
            <PostGenerator userImg={Imagem3} user="Nícolas Cardoso" postImg={Imagem3} description="''E aqueles que foram vistos dançando foram julgados insanos por aqueles que não podiam escutar a música.''"/>
            <PostGenerator userImg={Imagem2} user="Rafael Kirchmair" postImg={Imagem2} description="Só os loucos sabem"/>
        </main>
    );
}

function PostGenerator(props) {
    return(
    <div className="post-container">
                    <div className='userinfo-div'>
                        <img src={props.userImg} alt="" className='userinfo-img'></img>
                        <a className='userinfo-username'>{props.user}</a>
                    </div>
                    <img src={props.postImg} alt="" className='post-image'></img>
                    <TextareaAutosize
                    maxLength="640"
                    type="text"
                    className="post-description"
                    placeholder="Descrição do momento"
                    value={props.description}
                    readonly="true"
                    />
            </div>
    );
}

export default Post