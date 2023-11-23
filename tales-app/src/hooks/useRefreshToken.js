import { Navigate } from "react-router";
import axios from "../api/axios";
import useAuth from "./useAuth";

export const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const refreshToken = JSON.parse(sessionStorage.getItem('Token'));

    const refresh = async () => {
        const response = await axios.get('auth/refresh', {
            headers: {'Authorization': `${refreshToken}` },
            withCredentials: true
        });
        if(response.data === false){
            sessionStorage.removeItem('Token');
            <Navigate to="/" replace={true}/>
        }
    }
    return refresh;
};