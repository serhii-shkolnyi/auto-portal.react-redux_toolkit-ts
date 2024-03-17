import axios from "axios";
import {userService} from "./user.service";
const baseURL = "http://localhost:5000"
const apiService = axios.create({baseURL});


apiService.interceptors.request.use((config)=>{
    const accessToken = userService.getAccessToken();

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
})

export {
    apiService
};