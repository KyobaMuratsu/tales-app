import './CreatePost.css';
import React, { useRef, useState } from "react";
import ImagePlaceholder from '../../../assets/image-placeholder-white.svg';
import TagsIcon from '../../../assets/hash.svg';


const handlePost = "";

function CreatePost(){

    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    };

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
                        name="postpage-image"
                        id="postpageImage"
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        ref={inputRef}            
                        className="postpage-image-input"
                        onChange={handleImageChange}
                    />
                    {image ? (<img src={URL.createObjectURL(image)} alt="" className='postpage-image-selected'></img>) : (<img src={ImagePlaceholder} alt="" className='postpage-image'></img>)}
                    </div>
                    <img src={TagsIcon} alt="" className='postpage-tag'></img>
                </div>

                <button  
                    type="submit"
                    className="postpage-button">Publicar</button>
            </form>
        </main>
    );
}

export default CreatePost