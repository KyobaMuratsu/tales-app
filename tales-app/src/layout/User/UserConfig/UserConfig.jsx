import React, { useRef, useState } from "react";
import axios from "../../../api/axios";

function UserConfig() {
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[curso, setCurso] = useState('');
    const[picUrl, setPicUrl] = useState('');
    const[biografia, setBiografia] = useState('');
    const[dataEntrada, setDataEntrada] = useState('');
    const[dataNascimento, setDataNascimento] = useState('');

    const handleSubmit = async (e) => {
        
    }



    return(
        <main>
            <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button>Salvar</button>
            </form>
        </main>
    );
}

export default UserConfig;