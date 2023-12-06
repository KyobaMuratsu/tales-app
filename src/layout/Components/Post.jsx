import '../../style/Post.css';
import React, { useRef, useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';

function Post({content}) {

    const imagem = content.imagemUrlPostagem;
    const ImagemAcess = imagem.replace("C:\\Users\\bruno\\OneDrive\\Documentos\\projeto\\tales-app\\public\\Imagens", "");

    return(
    <div className="post-container">
                    <div className='userinfo-div'>
                        {/* <img src={content.imagemUrlPostagem} alt="" className='userinfo-img'></img> */}
                        {/* <a className='userinfo-username'>{props.user}</a> */}
                    </div>
                    <img src={`/imagens/${ImagemAcess}`} alt="" className='post-image'></img>
                    <TextareaAutosize
                    maxLength="640"
                    type="text"
                    className="post-description"
                    placeholder="Descrição do momento"
                    value={content.textoPostagem}
                    readonly="true"
                    />
            </div>
    );
}

export default Post