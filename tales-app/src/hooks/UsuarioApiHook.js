import { useMemo } from "react";
import { useApi } from "./ApiBase";

export function useUsuarioApi(){
    const instancia = useApi();

    async function getUsuario(token) {
        const response = await instancia.post(`/OAuthlogin/${token}`, token);
    }

    return useMemo(
        () => ({
            getUsuario,
        }),
        [] // ????????????
    );
}