import './CreatePost.css';
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const handlePost = "";

function CreatePost(){
    return(
        <main className="post-main">
            <div className="post-container">
                <form onSubmit={handlePost} className="post-form">
                <h1 className="title">Descrição</h1>
                    <input  type="text"
                            name="Descrição"
                            id="postDescription"
                            className="post-textbox"
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