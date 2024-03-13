import {EAccountStatus, EAccountType} from "../enums";

export interface IUser {
    userName: string;
    phone: string;
    email: string;
    password: string;
    accountType: EAccountType;
    accountStatus: EAccountStatus;
    avatar: string | null;
}