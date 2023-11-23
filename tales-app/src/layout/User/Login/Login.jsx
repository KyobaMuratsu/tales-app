import React, { useEffect, useRef, useState } from "react";
import '../../../style/Login.css';
import axios from '../../../api/axios';
import { GoogleLogin } from '@react-oauth/google';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useRefreshToken } from "../../../hooks/useRefreshToken";

const LOGIN_URL = 'auth/login';

function Login(){
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[errorMessage, setErrorMessage] = useState('');
  
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [login, password])
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                    JSON.stringify({login, password}),
                    {
                        headers: {'Content-Type': 'application/json'},
                        withCredentials: false,
                    },
                );
            console.log(JSON.stringify(response?.data));
            sessionStorage.setItem("Token", JSON.stringify(response?.data))
            // console.log(JSON.stringify(response?.data));
            const acessToken = response?.data?.acessToken;
            const roles = response?.data?.roles;
            setAuth({login, password, roles, acessToken});
            setLogin('');
            setPassword('');
            navigate(from, {replace: true});
        } catch (error) {
            if(!error?.response){
                setErrorMessage('No Server Responde');
            }else if(errorMessage.response?.status === 400){
                setErrorMessage('Missing Username or Password');
            }else if(errorMessage.response?.status === 401){
                setErrorMessage('Unauthorized');
            }else if(errorMessage.response?.status === 403){
                setErrorMessage('Usuer does not exist');
            }else {
                setErrorMessage('Login Failed');
            }
            errRef.current.focus();
            
        }
    }

    return(
        <main className="main">
            <div className="container">
                <h1 className="title">Bem vindo(a)!</h1>
                <p className="text">Matrícula</p>
                <form onSubmit={handleSubmit} className="form">
                    <input  type="text"
                            name="Matricula"
                            id="loginMatricula" 
                            className="textbox" 
                            ref={userRef}
                            onChange={(matricula) => setLogin(matricula.target.value)}
                            value={login} 
                            required />
                <p className="text">Senha</p>
                    <input  type="password" 
                            name="Senha"
                            id="loginSenha" 
                            className="textbox" 
                            ref={userRef}
                            onChange={(password) => setPassword(password.target.value)}
                            value={password}
                            required />
                <div className="space"></div>
                    <button type="submit"
                            name="Login"
                            id="submit" 
                            className="login-button" 
                            value="Login" >Login </button>
                </form>
                <p className="text">ou</p>
                <GoogleLogin
                        onSuccess={credentialResponse => {
                            sessionStorage.setItem("AUTH_ID", JSON.stringify(credentialResponse));
                            console.log(credentialResponse);
                        }}
                        onFailure={() => {
                            console.log('Login Failed')
                        }}
                />
                <p className="text">Ainda não possui conta? <Link to={'/Register'}>Clique aqui!</Link>
                </p>
            </div>
            <Link justify-content="center" className="titulo" onSubmit={useRefreshToken} to={'/Feed'}>Home</Link>
        </main>
        
        )}

export default Login