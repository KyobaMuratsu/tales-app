import { useNavigate } from "react-router";
import axios from "../api/axios";
import useAuth from "./useAuth";

export const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const refreshToken = JSON.parse(sessionStorage.getItem('Token'));
    const Navigate = useNavigate();

    const refresh = async () => {
        try {
            
        const response = await axios.get('auth/refresh', {
            headers: {'Authorization': `${refreshToken}` },
        });
        setAuth(prev => {
            return {...prev, accessToken: response.data.accessToken}
        })
        
        if(response.data === false){
            sessionStorage.removeItem('Token');
            Navigate("/");
        }
    } catch (error) {
        sessionStorage.removeItem('Token');
        Navigate("/");
    }
    }
    return refresh;
};