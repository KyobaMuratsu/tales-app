import React from "react";
import '../../style//Login.css';
import GoogleLogo from '../../assets/GoogleLogo.png';
import { Link } from "react-router-dom";

function Container() {
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
                <button name="Login" id="submit" className="google-login-button">
                    <img src={GoogleLogo} alt="googlelogo" className="google-login-button-icon"/>
                    <p className="google-text">Sign in with Google</p>
                </button>
                <p className="text">Ainda não possui conta? <Link to={'/Register'}>Clique aqui!</Link>
                </p>
            </div>
        </main>
    );
}

export default Container