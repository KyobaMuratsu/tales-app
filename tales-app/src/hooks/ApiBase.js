import axios from 'axios';
import { API_BASE_URL } from '../layout/Constants';

export function useApi() {
    const instancia = axios.create({
        baseURL: API_BASE_URL, // passa a url base do teu back, localhost
    });

    async function get(url, token) {
        // instancia.interceptors.request.use(function(config) {
        //     config.headers.Authorization = token ? `Bearer ${token}` : '';
        //     return config;
        // });

        // url é o resto da rota, por exemplo /eventos
        try {
            const response = await instancia.get(url);

            return response.data;
        } catch (erro) {
            if (erro.response.status === 401) {}

            throw erro;
        }
    }

    async function post(url, data, token) {
        console.log('dentro do post');
        console.log(token);
        // instancia.interceptors.request.use(function(config) {
        //     config.headers.Authorization = token ? `Bearer ${token}` : '';
        //     return config;
        // });

        try {
            const response = await instancia.post(url, data);

            return response.data;
        } catch (erro) {
            if (erro.response.status === 401) {}

            throw erro;
        }
    }

    async function put(url, data, token) {
        instancia.interceptors.request.use(function(config) {
            config.headers.Authorization = token ? `Bearer ${token}` : '';
            return config;
        });

        try {
            const response = await instancia.put(url, data);

            return response.data;
        } catch (erro) {
            if (erro.response.status === 401) {}

            throw erro;
        }
    }

    async function deleteRequest(url) {
        try {
            const response = await instancia.delete(url);

            return response.data;
        } catch (erro) {
            throw erro;
        }
    }

    return {
        get,
        post,
        put,
        deleteRequest,
    };
}