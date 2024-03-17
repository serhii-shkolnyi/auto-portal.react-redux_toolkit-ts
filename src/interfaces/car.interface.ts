import {ECurrency} from "../enums/currency.enum";
import {EOblasts} from "../enums/oblast.enum";

export interface ICar {
    _id:string
    brand: string;
    model: string;
    year: string;
    description: string;
    price: number;
    currency: ECurrency;
    oblast: EOblasts;

}