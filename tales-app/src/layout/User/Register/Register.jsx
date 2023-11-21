import React from "react";
import '../../../style/Login.css';
import { GoogleLogin } from '@react-oauth/google'
import { Link } from "react-router-dom";

function Register() {
    return(
      <main className="main">
            <div className="container">
                <h1 className="title">Vamos começar?</h1>
                <p className="text">Matricula</p>
                <input type="text" name="Matricula-E-mail" id="login-matricula" className="textbox" />
                <p className="text">Senha</p>
                <input type="password" name="Senha-login" id="login-senha" className="textbox" />
                <p className="text">Repita a senha</p>
                <input type="password" name="Senha-login" id="login-senha" className="textbox" />
                <div className="space"></div>
                <input type="button" name="Login" id="submit" className="login-button" value="Registrar"/>
                <br/><p className="text">Já possui uma conta? <Link to={'/'}>Clique aqui!</Link>
                </p>
            </div>
        </main>
    );
}

export default Register