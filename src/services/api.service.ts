import axios from "axios";
const baseURL = "http://localhost:5000"
const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config)=>{
    // config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
})

export {
    apiService
};