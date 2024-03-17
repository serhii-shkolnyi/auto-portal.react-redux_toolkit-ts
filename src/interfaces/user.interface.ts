import {EAccountStatus, EAccountType} from "../enums";

export interface IUser {
    _id: string;
    userName: string;
    phone: string;
    email: string;
    password: string;
    accountType: EAccountType;
    accountStatus: EAccountStatus;
    avatar: string | null;
}