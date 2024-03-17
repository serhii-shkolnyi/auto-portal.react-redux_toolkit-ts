import React, {FC, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hooks";
import css from "./CReateCar.module.css";
import {brandActions} from "../../store/slices/brand.slice";
import {modelActions} from "../../store/slices/model.slice";
import {ECurrency} from "../../enums/currency.enum";
import {log} from "util";
import {EOblasts} from "../../enums/oblast.enum";
import {carActions} from "../../store/slices/car.slice";
import {userActions} from "../../store/slices/user.slice";
import {useNavigate} from "react-router-dom";

const CreateCar: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
        dispatch(brandActions.getAll())
    }, [dispatch])

    const {brands} = useAppSelector(state => state.brandStore);

    const {models} = useAppSelector(state => state.modelStore);

    const {register, handleSubmit, reset, watch, formState: {errors}} = useForm();
    const brandId = watch("brand")
    useEffect(() => {
        if (brandId) {
            dispatch(modelActions.getAllForBrand({brandId}));
        }
    }, [brandId, dispatch]);

    const onSubmit = async (car: any) => {
        // @ts-ignore
        const {payload: {message}, meta: {requestStatus}} = await dispatch(carActions.createCar({car}));
        if (requestStatus === "rejected") {
            setErrorMessage(message)
        } else {
            // @ts-ignore
            setErrorMessage("авто створено")
        }
        reset();

    };

    return (
        <div className={css.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>


                <select {...register('brand')} name={"brand"} className={css.input}>
                    <option value="DEFAULT" disabled>brands</option>
                    {brands.map((brand) => <option key={brand._id}
                                                   value={brand._id}>{brand.brand}</option>)}
                </select>

                <select defaultValue={'DEFAULT'} {...register('model')} className={css.input}>
                    <option value="DEFAULT" disabled className={css.input}>models</option>
                    {models.map((model) => <option key={model._id}
                                                   value={model._id}>{model.model}</option>)}
                </select>
                <input className={css.input} type="text"
                       placeholder={'year'} {...register('year')} />
                <input className={css.input} type="text"
                       placeholder={'description'} {...register('description')} />
                <input className={css.input} type="text"
                       placeholder={'price'} {...register('price')} />
                <select defaultValue={'DEFAULT'} {...register('currency')} className={css.input}>
                    <option value="DEFAULT" disabled className={css.input}>currency</option>
                    {(Object.keys(ECurrency) as Array<keyof typeof ECurrency>).map((currency) => <option key={currency}
                                                                                                         value={currency}>{currency}</option>)}
                </select>

                <select defaultValue={'DEFAULT'} {...register('oblast')} className={css.input}>
                    <option value="DEFAULT" disabled className={css.input}>oblasts</option>
                    {(Object.values(EOblasts)).map((oblast) => <option key={oblast}
                                                                       value={oblast}>{oblast}</option>)}
                </select>
                <button className={css.button}>create car</button>
                <div className={css.errorMessage}>{errorMessage}</div>

            </form>
        </div>
    );
};

export {CreateCar};