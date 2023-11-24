import '../../../style/CreatePost.css';
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImagePlaceholder from '../../../assets/image-placeholder.svg';

const handlePost = "";

function CreatePost(){

    const inputRef = useRef(null);

    return(
        <main className="main">
            <form className="postpage-container">
                <h1 className="postpage-title">Criar publicação</h1>
                <h1 className='postpage-subtitle'>Compartilhe seus momentos para que sejam lembrados</h1>
                <label className="postpage-text">Adicione uma descrição</label>
                    <input  
                        type="text"
                        id="description"
                        autoComplete="off"
                        required
                        className="description-textbox"
                        placeholder='O que você gostaria de contar?'/>

                <label className="postpage-text">Selecione uma imagem</label>
                    <input 
                        type="file"
                        ref={inputRef}            
                        name="post-image" 
                        id="postImage" 
                        className="post-image-input"
                        />
                    <img src={ImagePlaceholder} alt="" className='post-image'></img>

                <button  
                    type="submit"
                    className="postpage-button">Publicar</button>
            </form>
        </main>
    );
}

export default CreatePost