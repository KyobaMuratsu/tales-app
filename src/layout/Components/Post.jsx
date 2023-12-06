import '../../style/Post.css';
import React, { useRef, useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';

function Post({content}) {

    const imagemPost = content.imagemUrlPostagem;
    const ImagemPostAcess = imagemPost.replace("C:\\Users\\bruno\\OneDrive\\Documentos\\projeto\\tales-app\\public\\Imagens", "");

    const imagemUser = content.picUrl;
    const ImagemUserAccess = imagemUser.replace("C:\\Users\\bruno\\OneDrive\\Documentos\\projeto\\tales-app\\public\\Imagens", "");

    return(
    <div className="post-container">
                    <div className='userinfo-div'>
                        <img src={`/imagens/${ImagemUserAccess}`} alt="" className='userinfo-img'></img>
                        <a className='userinfo-username'>{content.userName}</a>
                    </div>
                    <img src={`/imagens/${ImagemPostAcess}`} alt="" className='post-image'></img>
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