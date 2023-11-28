import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await sessionStorage.removeItem('Token');
            navigate("/");
        } catch (error) {
            console.error("Erro durante o logout:", error);
        }
    }

    return logout;
}

export default useLogout;