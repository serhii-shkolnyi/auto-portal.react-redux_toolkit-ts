import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import css from "./SignUp.module.css";
import {IUser} from "../../interfaces";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators";
import {useAppDispatch} from "../../hooks";
import {userActions} from "../../store/slices/user.slice";
import {Link, useNavigate} from "react-router-dom";

const SignUp: FC = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<Partial<IUser>>({
        resolver: joiResolver(userValidator)
    });
    const [errorMessage, setErrorMessage] = useState();

    const dispatch = useAppDispatch();
    const onSubmit = async (user: Partial<IUser>) => {
        // @ts-ignore
        const {payload: {message}, meta: {requestStatus}} = await dispatch(userActions.register({user}));
        if (requestStatus === "rejected") {
            setErrorMessage(message)
        }else{
           // @ts-ignore
            setErrorMessage("На вказанну Вами пошту відправлен лист для активації аккаунту")
        }
        reset();
    };

    return (
        <div className={css.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>

                <input className={css.input} type="text"
                       placeholder={'user name'} {...register('userName')} />
                <span>{errors.userName?.message}</span>

                <input className={css.input} type="email"
                       placeholder={'test@gmail.com'} {...register('email')} />
                <span>{errors.email?.message}</span>

                <input className={css.input} type="text"
                       placeholder={'+38(099)999-99-99'} {...register('phone')} />
                <span>{errors.phone?.message}</span>

                <input className={css.input} type="text"
                       placeholder={'password'} {...register('password')} />
                <span>{errors.password?.message}</span>

                <button className={css.button}>register</button>

                <div className={css.errorMessage}>{errorMessage}</div>


            </form>
        </div>
    );
};

export {SignUp};