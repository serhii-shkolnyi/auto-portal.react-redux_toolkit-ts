import {IUser} from "./user.interface";

export interface IResponseRegister {
    data: IUser;
}

export interface IToken {
    accessToken: string;
    refreshToken: string;
}

export interface IResponseLogin {
    data: IToken;
}