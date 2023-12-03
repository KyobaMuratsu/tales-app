import './Configurations.css';
import React, { useRef, useState } from "react";
import ImagePlaceholder from '../../../assets/user.svg';
import TagsIcon from '../../../assets/hash.svg';

function Configurations(){

    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

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
            <div className="configs-container">
                <h1 className="configs-title">Configurações do perfil</h1>

                <form className='form'>

                <p className="configs-text">Seu nome<br/><span className='configs-span'>Altere o seu nome de exibição no perfil</span></p>
                <input  type="text"
                            name="tagCadastrar"
                            id="tag-cadastro" 
                            className="configs-textbox1 configs-textbox2"
                            value={nome}
                            required
                            />

                <p className="configs-text">E-mail<br/><span className='configs-span'>Altere seu email</span></p>
                <input  type="text"
                            name="tagCadastrar"
                            id="tag-cadastro" 
                            className="configs-textbox1 configs-textbox2"
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
                 <form className="form">
                    <input  type="text"
                            name="tagCadastrar"
                            id="tag-cadastro" 
                            className="configs-textbox1" 
                            />
                    <button type="submit"
                            name="submitTag"
                            id="submit-tag" 
                            className="tag-button" 
                            value="Tag" >Inserir</button>
                    <a className='configs-span configs-tags'>Suas tags:</a>
                </form>
                <button type="submit"
                            name="submitChanges"
                            id="submit-changes" 
                            className="submitchanges-button"
                            value="Tag">Salvar alterações</button>
                </form>
            </div>
        </main>
    );
}

export default Configurations