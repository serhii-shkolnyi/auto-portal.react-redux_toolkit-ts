import {apiService} from "./api.service";
import {urlConfig} from "../configs/url.config";
import { } from "../interfaces/response";


const brandService = {
    async getAll() {
       return  await apiService.get(urlConfig.brand.brands)
    },
    async getId(brandId:string) {
        return  await apiService.post(urlConfig.brand.brandId, {_id:brandId})
    }
};

export {
    brandService
};
