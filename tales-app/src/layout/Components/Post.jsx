import '../../style/Post.css';
import React, { useRef, useState } from "react";
import Imagem from '../../assets/luf1.jpeg';
import Imagem2 from '../../assets/luf2.png';
import Imagem3 from '../../assets/luf3.png';
import Imagem4 from '../../assets/luf4.png';
import Imagem5 from '../../assets/luf5.png';
import TextareaAutosize from 'react-textarea-autosize';


const handlePost = "";

function Post(){

    return(
        <main className="main">
            <PostGenerator userImg={Imagem} user="Bruno Tremarin" postImg={Imagem} description="xxxxxxxxxxxxxxx"/>
            <PostGenerator userImg={Imagem2} user="Nícolas Cardoso" postImg={Imagem2} description="''E aqueles que foram vistos dançando foram julgados insanos por aqueles que não podiam escutar a música.''"/>
            <PostGenerator userImg={Imagem3} user="Nícolas Cardoso" postImg={Imagem3} description="yyyyyyyyyyyyyyy"/>
            <PostGenerator userImg={Imagem4} user="Rafael Kirchmair" postImg={Imagem4} description="só os loucos sabem"/>
            <PostGenerator userImg={Imagem5} user="Daniel Bairros" postImg={Imagem5} description="nem sei qm é esse outro cara da ft"/>
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