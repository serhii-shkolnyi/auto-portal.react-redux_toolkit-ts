import {apiService} from "./api.service";
import {urlConfig} from "../configs/url.config";
import { } from "../interfaces/response";
import {IBrand} from "../interfaces/brand.interface";
import {IModel} from "../interfaces/model.interface";


const modelService = {
    async getAllForBrand(brandId:string) {
       return  await apiService.post(urlConfig.models.models, {_brandId:brandId})
    },
    async getId(modelId:string) {
        return  await apiService.post(urlConfig.models.modelId, {_id:modelId})
    }
};

export {
    modelService
};
