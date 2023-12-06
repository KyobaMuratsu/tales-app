import './UserConfig.css';
import React, { useRef, useState } from "react";
import ImagePlaceholder from '../../../assets/user.svg';
import TagsIcon from '../../../assets/hash.svg';
import axios from '../../../api/axios';
import { useNavigate } from 'react-router-dom';

const USERCONFIG = "userConfig";

function UserConfig() {
    const Token = JSON.parse(sessionStorage.getItem('Token'));

    const navigate = useNavigate();

    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
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
        setImage(event.target.files[0]);
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
        formData.append('picUrl', image);
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('tags', blob);  // Enviar as tags como uma string JSON

        try {
            const response = await axios.put(USERCONFIG, formData, {
                headers: {
                    'Authorization': `${Token}`,

                },
            });
            navigate("/Feed");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="main">
            <div className="configs-container">
                <h1 className="configs-title">Configurações do perfil</h1>

            <form className='form' onSubmit={handleSubmit}>
                <p className="configs-text">Seu nome<br/><span className='configs-span'>Altere o seu nome de exibição no perfil</span></p>
                <input  type="text"
                            name="tagCadastrar"
                            id="tag-cadastro" 
                            className="configs-textbox1 configs-textbox2"
                            onChange={(nome) => setNome(nome.target.value)}
                            value={nome}
                            required
                            />

                <p className="configs-text">E-mail<br/><span className='configs-span'>Altere seu email</span></p>
                <input  type="text"
                            name="tagCadastrar"
                            id="tag-cadastro" 
                            className="configs-textbox1 configs-textbox2"
                            onChange={(email) => setEmail(email.target.value)}
                            value={email}
                            required
                            />

                    <p className="configs-text">Sua foto de perfil<br/><span className='configs-span'>Clique abaixo para alterar</span></p>
                    <div onClick={handleImageClick}>
                        <input 
                        name="config-image"
                        id="configImage"
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        ref={inputRef}            
                        className="configs-image-input"
                        onChange={handleImageChange}
                    />
                    {image ? (<img src={URL.createObjectURL(image)} alt="" className='configs-image-selected'></img>) : (<img src={ImagePlaceholder} alt="" className='configs-image'></img>)}
                    </div>

                 <p className="configs-text">Adicionar tags:<br/><span className='configs-span'>As tags devem ser inseridas uma por vez, 
                 contendo o código de sua turma. Exemplo: 4I, 2T, 1M...</span></p>

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

                <button
                        type="submit"
                        name="submitChanges"
                        id="submit-changes"
                        className="submitchanges-button"
                        value="Tag">Salvar alterações
                </button>
            </form>
            </div>
        </main>
    );
}

export default UserConfig;