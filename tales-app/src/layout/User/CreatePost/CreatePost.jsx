import './CreatePost.css';
import React, { useRef, useState } from "react";
import ImagePlaceholder from '../../../assets/image-placeholder-white.svg';
import TagsIcon from '../../../assets/hash.svg';
import axios from '../../../api/axios';
import { PUBLICAR_URL } from '../../Constants';

function CreatePost(){

    const inputRef = useRef(null);
    const [image, setImage] = useState(null);
    const [textoPostagem, setTextoPostagem] = useState('');
    const Token = JSON.parse(sessionStorage.getItem('Token'));

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('textoPostagem', textoPostagem);  // Adicionando o texto da postagem ao FormData

        try {
            const response = await axios.post(PUBLICAR_URL, formData, {
                headers: {
                    'Authorization': `${Token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(Token);
            console.log(textoPostagem);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <main className="main">
            <form onSubmit={handleSubmit} className="postpage-container">
                <textarea  
                    maxLength="640"
                    type="text"
                    id="TextoPostagem"
                    autoComplete="off"
                    onChange={(textoPostagem) => setTextoPostagem(textoPostagem.target.value)}
                    value={textoPostagem}
                    required
                    className="description-textbox"
                    placeholder='Qual história pretende compartilhar hoje?'/>

                <div className='post-bar'>
                    <div onClick={handleImageClick}>
                        <input 
                            name="post-image"
                            id="postImage"
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            ref={inputRef}            
                            className="post-image-input"
                            onChange={handleImageChange}
                        />
                        {image ? (<img src={URL.createObjectURL(image)} alt="" className='post-image-selected'></img>) : (<img src={ImagePlaceholder} alt="" className='post-image'></img>)}
                    </div>
                    <img src={TagsIcon} alt="" className='post-tag'></img>
                </div>

                <button  
                    type="submit"
                    className="postpage-button"
                    value="Post">Publicar</button>
            </form>
        </main>
    );
}

export default CreatePost;
