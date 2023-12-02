import React from "react";
import './Profile.css';
import axios from "../../../api/axios";
import { useState } from "react";

function Profile(){
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[curso, setCurso] = useState('');
    const[picUrl, setPicUrl] = useState('');
    const[biografia, setBiografia] = useState('');
    const[dataEntrada, setDataEntrada] = useState('');
    const[dataNascimento, setDataNascimento] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        try {
            
        } catch (error) {
            
        }
    }

    return(
        <main className="container-profile">
            <div className="container-profile-user-pic"></div>
            <div className="container-profile-user">
                <p></p>
            </div>
        </main>
    );
}

export default Profile