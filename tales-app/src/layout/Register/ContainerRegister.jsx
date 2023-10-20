import React from "react";
import '../../style/Login.css';
import { GoogleLogin } from '@react-oauth/google'
import { Link } from "react-router-dom";

function Container() {
    return(
      <main className="main">
            <div className="container">
                <h1 className="titulo">Vamos começar?</h1>
                <p className="text">Matricula</p>
                <input type="text" name="Matricula-E-mail" id="login-matricula" className="textbox" />
                <p className="text">Senha</p>
                <input type="password" name="Senha-login" id="login-senha" className="textbox" />
                <p className="text">Repita a senha</p>
                <input type="password" name="Senha-login" id="login-senha" className="textbox" />
                <input type="button" name="Login" id="submit" className="login-button" value="Registrar"/>
                <p className="text">OU</p>
                <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onFailure={() => {
                            console.log('Login Failed')
                        }}
                />
                <p className="text">Já possui uma conta? <Link to={'/'}>Clique aqui!</Link>
                </p>
            </div>
        </main>
    );
}

export default Container