import React, { useRef, useState } from "react";
import '../Login/Login.css';
import axios from "../../../api/axios"
import { GoogleLogin } from '@react-oauth/google'
import { Link } from "react-router-dom";
import { useEffect } from "react";

const REGISTER_URL = '/register/save';

function Register() {

    const userRef = useRef('');
    const errorRef = useRef('');

    const [matricula , setMatricula] = useState('');
    const [userFocus , setUserFocus] = useState(false);

    const [senha , setSenha] = useState('');
    const [passwordFocus , setPasswordFocus] = useState(false);

    const [matchPassword , setMatchPassword] = useState('');
    const [matchFocus , setMatchFocus] = useState(false);

    const [errorMessage , setErrorMessage] = useState('');
    const [success , setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
        console.log(matricula);
        console.log(matchPassword);
    }, [matricula, senha, matchPassword])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ matricula, senha }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            sessionStorage.setItem(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setMatricula('');
            setSenha('');
            setMatchPassword('');
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No Server Response');
            } else if (err.response?.status === 409) {
                setErrorMessage('Username Taken');
            } else {
                setErrorMessage('Registration Failed')
            }
            errorRef.current.focus();
        }
    }

    return(
        <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="/">Sign In</a>
                </p>
            </section>
        ) : (
    
      <main className="main">
        <p ref={errorRef} className={errorMessage ? "errmsg" : "offscreen"} aria-live="assertive">{errorMessage}</p>
            <form onSubmit={handleSubmit} className="container">
                <h1 className="title">Vamos começar?</h1>
                <label className="text" htmlFor="matricula">Matricula</label>
                    <input  
                        type="text"
                        id="matricula"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(params) => {
                            setMatricula(params.target.value)
                        }}
                        value={matricula}
                        required
                        onFocus={() => {
                            setUserFocus(true)
                        }}
                        onBlur={() => {
                            setUserFocus(false)
                        }}
                        className="textbox" />

                <label className="text" htmlFor="senha">Senha
                </label>
                    <input 
                        type="password"
                        onChange={(params) => {
                             setSenha(params.target.value)
                        }}
                        value={senha}
                        required
                        onFocus={() => { 
                            setPasswordFocus(true)
                        }}
                        onBlur={() => {
                            setPasswordFocus(false)
                        }}                    
                        name="Senha-login" 
                        id="logiSenha" 
                        className="textbox" />

                {/* <label className="text" htmlFor="confirme_senha">Repita a senha
                </label>
                    <input  
                        type="password"
                        onChange={(params) => {
                             setMatchPassword(params.target.value)
                        }}
                        value={matchPassword}
                        required
                        onFocus={() => { 
                            setMatchFocus(true)
                        }}
                        onBlur={() => {
                            setMatchFocus(false)
                        }}                    
                        name="Senha-login" 
                        id="logirepeteSenha" 
                        className="textbox" /> */}
                <div className="space"></div>
                    <button  
                        type="submit"
                        className="login-button">Registrar</button>
                
                <p className="text">ou</p>
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
            <p ref={errorRef} className={errorMessage ? "errormessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
            </form>
        </main>
                   )}
                   </>
    );
}

export default Register