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

    const [tagInput, setTagInput] = useState("");
    const [tags, setTags] = useState([]);

    const jsonTag = JSON.stringify(tags);
    const blob = new Blob([jsonTag],{
        type: 'application/json'
    })

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(file);
    };
    const handleTagInputChange = (event) => {
        setTagInput(event.target.value);
    };

    const handleAddTag = () => {
        setTags([...tags, tagInput]);
        setTagInput("");
    };

    const handleRemoveTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('textoPostagem', textoPostagem);
        formData.append('tags', blob)  // Adicionando o texto da postagem ao FormData

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
                            className="postpage-image-input"
                            onChange={handleImageChange}
                        />
                    {image ? (<img src={URL.createObjectURL(image)} alt="" className='postpage-image-selected'></img>) : (<img src={ImagePlaceholder} alt="" className='postpage-image'></img>)}
                    </div>
                    <img src={TagsIcon} alt="" className='postpage-tag'></img>
                    <div className="form">
                        <input
                            type="text"
                            name="tagCadastrar"
                            id="tag-cadastro"
                            className="configs-textbox1"
                            onChange={handleTagInputChange}
                            value={tagInput}
                        />

                        <button
                            type="button"
                            name="submitTag"
                            id="submit-tag"
                            className="tag-button"
                            onClick={handleAddTag}
                        >Inserir</button>
                        <div className='configs-span configs-tags'>
                            {tags.map((tag, index) => (
                                <span key={index} className='tag-item'>
                                    {tag}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveTag(index)}
                                        className="remove-tag-button"
                                    > x
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
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
