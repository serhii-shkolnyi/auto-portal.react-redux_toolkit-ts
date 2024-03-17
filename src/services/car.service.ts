import {apiService} from "./api.service";
import {urlConfig} from "../configs/url.config";
import { } from "../interfaces/response";
import {ICar} from "../interfaces/car.interface";


const carService = {
    async createCar(car:ICar) {
       return  await apiService.post(urlConfig.car.createCar, car)
    },
    async getAll() {
        return  await apiService.get(urlConfig.car.car)
    },
    async getId(_id:string) {
        return  await apiService.post(urlConfig.car.carId, _id)
    },
    async getAllForUser() {
        return  await apiService.get(urlConfig.car.carUser)
    }
};

export {
    carService
};
