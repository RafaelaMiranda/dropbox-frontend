import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rafaela-omnistack-backend.herokuapp.com',
});

export default api;