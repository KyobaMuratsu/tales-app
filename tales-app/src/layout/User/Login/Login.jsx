import React from "react";
import '../../../style/Login.css';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from "react-router-dom";

function Login(){
    return(
        
        <main className="main">
            <div className="container">
                <h1 className="title">Bem vindo(a)!</h1>
                <p className="text">Matrícula ou E-mail</p>
                <input type="text" name="Matricula ou email" id="login-matricula" className="textbox" />
                <p className="text">Senha</p>
                <input type="password" name="Senha-login" id="login-senha" className="textbox"/>
                <div className="space"></div>
                <input type="button" name="Login" id="submit" className="login-button" value="Login"/>
                <p className="text">ou</p>
                <GoogleLogin
                        onSuccess={credentialResponse => {
                            localStorage.setItem("AUTH_ID", JSON.stringify(credentialResponse));
                            console.log(credentialResponse);
                        }}
                        onFailure={() => {
                            console.log('Login Failed')
                        }}
                />
                <p className="text">Ainda não possui conta? <Link to={'/Register'}>Clique aqui!</Link>
                </p>
            </div>
            <Link justify-content="center" className="titulo" to={'/Feed'}>Home</Link>
        </main>
    );
}

export default Login