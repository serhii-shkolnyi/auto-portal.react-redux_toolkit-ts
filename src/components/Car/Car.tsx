import React, {FC, PropsWithChildren, useEffect} from 'react';
import {ICar} from "../../interfaces/car.interface";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from "./Car.module.css";
import {userActions} from "../../store/slices/user.slice";
import {brandActions} from "../../store/slices/brand.slice";
import {modelActions} from "../../store/slices/model.slice";


interface IProps extends PropsWithChildren {
    car: ICar;
}

const Car: FC<IProps> = ({car}) => {
    const dispatch = useAppDispatch();
    const brandId: string = car.brand;
    const modelId: string = car.model;

    const {user} = useAppSelector(state => state.userStore)
    const {brand} = useAppSelector( state => state.brandStore);
    const {model} = useAppSelector(state => state.modelStore);


    useEffect(() => {

       dispatch(brandActions.getId({brandId}));
        dispatch(modelActions.getId({modelId}));
        dispatch(userActions.me())
    }, []);

    return (
        <div className={css.wrapper}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AjtWax5dixQ6Lq-ogM3Q1wqSok5Fs2HQ7HEffe0VRA&s"
                alt="car"/>
            <div>користувач: {user?.userName}</div>
            <div>бренд: {brand?.brand}</div>
            <div>модель: {model?.model}</div>
            <div>рік: {car.year}</div>
            <div>область:{car.oblast}</div>
            <div>ціна: {car.price}{car.currency}</div>
            <div className={css.description}>опис: {car.description}</div>
        </div>
    );
};

export {Car};