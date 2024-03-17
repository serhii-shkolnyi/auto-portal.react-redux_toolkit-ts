import {apiService} from "./api.service";
import {urlConfig} from "../configs/url.config";
import { } from "../interfaces/response";


const oblastService = {
    async getAll() {
       return  await apiService.get(urlConfig.oblast.oblasts)
    }
};

export {
    oblastService
};
