import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {ICar} from "../../interfaces/car.interface";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from "./Car.module.css";
import {userActions} from "../../store/slices/user.slice";
import {brandService} from "../../services/brand.service";
import {modelService} from "../../services/model.service";

interface IProps extends PropsWithChildren {
    car: ICar;
}

const Car: FC<IProps> = ({car}) => {
    const dispatch = useAppDispatch();
    const brandId: string = car.brand;
    const modelId: string = car.model;

    useEffect(() => {
        fetchBrand().then()
        fetchModel().then()
        dispatch(userActions.me())
    }, [dispatch]);

    const {user} = useAppSelector(state => state.userStore)

    const [brand, setBrand] = useState("");
    const fetchBrand = async ()=> {
        const {data} = await brandService.getAll()
        if (data) {
            for (const brand1 of data) {
                if (brandId === brand1._id) {
                    return setBrand(brand1.brand)
                }
            }
        }
    }
    const [model, setModel] = useState("");
    const fetchModel = async ()=> {
        const {data} = await modelService.getAllForBrand(brandId)
        if (data) {
            for (const model1 of data) {
                if (modelId === model1._id) {
                    return setModel(model1.model)
                }
            }
        }
    }

    return (
        <div className={css.wrapper}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AjtWax5dixQ6Lq-ogM3Q1wqSok5Fs2HQ7HEffe0VRA&s"
                alt="car"/>
            <div>користувач: {user?.userName}</div>
            <div>бренд: {brand}</div>
            <div>модель: {model}</div>
            <div>рік: {car.year}</div>
            <div>область:{car.oblast}</div>
            <div>ціна: {car.price}{car.currency}</div>
            <div className={css.description}>опис: {car.description}</div>
        </div>
    );
};

export {Car};