import React, { useEffect, useState } from "react";
import '../../../style/Login.css';
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../Constants";
import axios from "axios";
import { useUsuarioApi } from "../../../hooks/UsuarioApiHook";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const usuarioApi = useUsuarioApi();

// https://www.freecodecamp.org/portuguese/news/como-persistir-um-usuario-conectado-com-react/
    const handleSubmit = async e => {
        e.preventDefault();
        const user = { username, password};
        const response = await axios.post(
            API_BASE_URL,
            user
        );
        setUser(response.data);
        localStorage.setItem('user', response.data);
        console.log(response.data);
    };

    useEffect(() => {
        const loggedUser = localStorage.getItem("user");
        if(loggedUser){
            const foundUser = JSON.parse(loggedUser);
            setUser(foundUser);
        }
    }, []);

    if(user){
    return <div>{user.username}is Logged in</div>
    }

    return(
        <main className="main">
            <div className="container">
                <h1 className="titulo">Bem vindo(a)!</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <p className="text">Matricula ou E-mail</p>
                        <input type="text"
                                className="textbox"
                                value={username}
                                onChange={({ target }) => setUsername(target.value)} />

                    <p className="text">Senha</p>
                    <input type="password"
                            value={password}
                            className="textbox"
                            onChange={({ target }) => setPassword(target.value)} />

                    <input type="submit"
                            className="login-button"
                            value="Login"
                            />
                </form>
                <p className="text">OU</p>
                <GoogleLogin
                        onSuccess={async (credentialResponse) => {
                            localStorage.setItem("AUTH_ID", JSON.stringify(credentialResponse));
                            console.log(credentialResponse);
                            await usuarioApi.getUsuario(credentialResponse.credential);
                            navigate('/profile');
                        }}
                        onFailure={() => {
                            console.log('Login Failed')
                        }}
                />
                <p className="text">Ainda não possui conta? <Link to={'/register'}>Clique aqui!</Link>
                </p>
            </div>
            <Link justify-content="center" className="titulo" to={'/Feed'}>Home</Link>
        </main>
    );
}

export default Login