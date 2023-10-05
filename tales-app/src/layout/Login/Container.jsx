import React from "react";
import '../../style//Login.css';

function Container() {
    return(
        <main className="main">
            <div className="container">
                <h1 className="titulo">Bem vindo(a)!</h1>
                <p className="text">Matricula ou E-mail</p>
                <input type="text" name="Matricula-E-mail" id="login-matricula" className="textbox" />
                <p className="text">Senha</p>
                <input type="text" name="Senha-login" id="login-senha" className="textbox" />
                <input type="button" name="Login" id="submit" className="login-button"/>
            </div>
        </main>
    );
}

export default Container