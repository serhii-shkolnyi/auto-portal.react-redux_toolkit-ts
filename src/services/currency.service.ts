import {apiService} from "./api.service";
import {urlConfig} from "../configs/url.config";
import { } from "../interfaces/response";


const currencyService = {
    async getAll() {
       return  await apiService.get(urlConfig.currency.currency)
    }
};

export {
    currencyService
};
