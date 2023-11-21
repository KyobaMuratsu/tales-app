import { useContext } from "react";
import AuthContext from "../layout/Components/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;