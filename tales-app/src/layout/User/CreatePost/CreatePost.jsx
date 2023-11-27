import './CreatePost.css';
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from '../../../api/axios';
import { PUBLICAR_URL } from '../../Constants';

function CreatePost(){

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const Token = sessionStorage.getItem('Token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(PUBLICAR_URL,
                JSON.stringify({title, description, Token}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false,
                },
            );
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <main className="post-main">
            <div className="post-container">
                <form onSubmit={handleSubmit} className="post-form">
                <h1 className="title">Titulo</h1>
                <input  type="text"
                            name="Descrição"
                            id="postTitle"
                            className="post-textbox-titulo"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title} 
                            required/>
                <h1 className="title">Descrição</h1>
                    <textarea  type="text"
                            name="Descrição"
                            id="postDescription"
                            className="post-textbox-desc"
                            onChange={(description) => setDescription(description.target.value)}
                            value={description} 
                            required/>
                <div className="space"></div>
                    <button type="submit"
                            name="Post"
                            id="submit-post" 
                            className="login-button" 
                            value="Post">Publicar</button>
                </form>
            </div>
        </main>
    );
}

export default CreatePost