import axios from 'axios';
import { API_BASE_URL } from '../layout/Constants';

export default axios.create ({
    baseURL: API_BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: API_BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
});