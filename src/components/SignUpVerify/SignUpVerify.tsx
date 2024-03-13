import React, {FC} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IUser} from "../../interfaces";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators";
import css from "../SignUp/SignUp.module.css"
import {useAppDispatch} from "../../hooks";
import {userActions} from "../../store/slices/user.slice";

const SignUpVerify: FC = () => {
    const {token} = useParams();

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const {handleSubmit} = useForm();
    const onSubmit = async () => {
        // @ts-ignore
        const {payload: {message}, meta: {requestStatus}} = await dispatch(userActions.registerVerify({token}))
        console.log(requestStatus)
        if (requestStatus === "rejected") {
            // @ts-ignore
            setErrorMessage(message)
        } else {
            navigate("/cabinet/login")
        }
    };

    return (
        <div className={css.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>

                <button className={css.button}>Активувати аккаунт</button>

            </form>
        </div>
    );
};

export {SignUpVerify};