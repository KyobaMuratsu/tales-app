import './CreatePost.css';
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImagePlaceholder from '../../../assets/image-placeholder-white.svg';
import TagsIcon from '../../../assets/hash.svg';


const handlePost = "";

function CreatePost(){

    const inputRef = useRef(null);

    const handleImageClick = () => {
        inputRef.current.click();
    }

    return(
        <main className="main">
            <form className="postpage-container">
                    <textarea  
                        maxLength="640"
                        type="text"
                        id="description"
                        autoComplete="off"
                        required
                        className="description-textbox"
                        placeholder='Qual história pretende compartilhar hoje?'/>

                <div className='post-bar'>
                    <div onClick={handleImageClick}>
                    <input 
                        type="file"
                        ref={inputRef}            
                        name="post-image"
                        id="postImage"
                        className="post-image-input"
                    />
                    <img src={ImagePlaceholder} alt="" className='post-image'></img>
                    </div>
                    <img src={TagsIcon} alt="" className='post-image'></img>
                </div>

                <button  
                    type="submit"
                    className="postpage-button">Publicar</button>
            </form>
        </main>
    );
}

export default CreatePost