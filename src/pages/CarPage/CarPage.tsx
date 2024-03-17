import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../store/slices/car.slice";
import {Car} from "../../components/Car/Car";
import css from "./CarPage.module.css";

const CarPage:FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch]);
    const {cars} = useAppSelector(state => state.carStore);

    return (
        <div className={"container"}>
            {cars&&
                <div className={css.carContainer}>
                    {
                        cars.map(car=> <Car key={car._id} car={car}/>)
                    }
                </div>
            }
        </div>
    );
};

export {CarPage};