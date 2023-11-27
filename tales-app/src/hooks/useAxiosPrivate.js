import axios from "../api/axios";
import useAuth from "./useAuth";

const useToken = () => {
    const {setAuth} = useAuth();

    const refresh = async () => {
        //tem que mudar o get
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return {...prev, acessToken: response.data.accessToken}
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useToken;