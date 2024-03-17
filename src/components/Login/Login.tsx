import React, {FC, useState} from 'react';
import {IUser} from "../../interfaces";
import {joiResolver} from "@hookform/resolvers/joi";
import {userLogin} from "../../validators";
import {useAppDispatch} from "../../hooks";
import {Link, useNavigate} from "react-router-dom";
import {userActions} from "../../store/slices/user.slice";
import css from "./Login.module.css";
import {useForm} from "react-hook-form";

const Login:FC = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<Partial<IUser>>({
        resolver: joiResolver(userLogin)
    });
    const [errorMessage, setErrorMessage] = useState();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSubmit = async (user: Partial<IUser>) => {
        // @ts-ignore
        const {payload: {message}, meta: {requestStatus}} = await dispatch(userActions.login({user}));
        if (requestStatus === "rejected") {
            setErrorMessage(message)
        }else{
            navigate("/")
        }
        reset();
    };

    return (
        <div className={css.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>

                <input className={css.input} type="email"
                       placeholder={'test@gmail.com'} {...register('email')} />
                <span>{errors.email?.message}</span>

                <input className={css.input} type="text"
                       placeholder={'password'} {...register('password')} />
                <span>{errors.password?.message}</span>

                <button className={css.button}>register</button>

                <div className={css.errorMessage}>{errorMessage}</div>

                <Link className={css.register} to={"/cabinet/register"}>Зареєструватися на AUTO-PORTAL</Link>
            </form>
        </div>
    );
};

export {Login};