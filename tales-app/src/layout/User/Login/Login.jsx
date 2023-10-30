import React from "react";
import '../../../style/Login.css';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from "react-router-dom";

function Login(){
    return(
        <main className="main">
            <div className="container">
                <h1 className="titulo">Bem vindo(a)!</h1>
                <p className="text">Matricula ou E-mail</p>
                <input type="text" name="Matricula-E-mail" id="login-matricula" className="textbox" />
                <p className="text">Senha</p>
                <input type="password" name="Senha-login" id="login-senha" className="textbox" />
                <input type="button" name="Login" id="submit" className="login-button" value="Login"/>
                <p className="text">OU</p>
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
        </main>
    );
}

export default Login