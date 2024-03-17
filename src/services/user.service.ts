import {apiService} from "./api.service";
import {IUser} from "../interfaces";
import {urlConfig} from "../configs/url.config";
import {IResponse} from "../store/slices/user.slice";
import { IToken} from "../interfaces/response";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'

const userService = {
    async register(user: Partial<IUser>) {
       return  apiService.post<IResponse>(urlConfig.user.registerUser, user)
    },

    registerVerify: (token: string | undefined) => apiService.put(`${urlConfig.user.registerUserVerify}${token}`),

    async login (user: Partial<IUser>) {
        const {data} = await apiService.post<IToken>(urlConfig.user.loginUser, user);
        this.setTokens(data);
        const {data: me} = await this.me();
        return me
    },

    me () {
       return  apiService.get<IUser>(urlConfig.user.me)
    },
    updateMe(user: Partial<IUser>, id:string) {
        return apiService.patch(urlConfig.user.updateMe, {user, id})
    },

    setTokens({accessToken,refreshToken}: any): void {
        localStorage.setItem(accessTokenKey, accessToken)
        localStorage.setItem(refreshTokenKey, refreshToken)
    },
    getAccessToken(): string|null {
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken(): string|null {
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens(): void {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
};

export {
    userService
};
