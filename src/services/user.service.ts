import {apiService} from "./api.service";
import {IUser} from "../interfaces";
import {urlConfig} from "../configs/url.config";
import {IResponse} from "../store/slices/user.slice";

const userService = {
    register: (user: Partial<IUser>) =>
        apiService.post<IResponse>(urlConfig.user.registerUser, user),

    registerVerify: (token: string | undefined) => apiService.put(`${urlConfig.user.registerUserVerify}${token}`)
};

export {
    userService
};
