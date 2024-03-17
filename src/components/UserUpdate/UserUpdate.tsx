import React, {FC, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userUpdate} from "../../validators";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from "./UserUpdate.module.css";
import {IUser} from "../../interfaces";
import {userActions} from "../../store/slices/user.slice";

const UserUpdate:FC = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm<Partial<IUser>>({
        resolver: joiResolver(userUpdate),
        mode: "all"
    });

    const dispatch = useAppDispatch();
    const {user: currentUser} = useAppSelector(state => state.userStore);
    useEffect(() => {

        if (currentUser) {
            setValue('userName', currentUser.userName, {shouldValidate: true});
        }
    }, [setValue, currentUser]);

    const onSubmit = async (user: Partial<IUser>) => {

        if (currentUser !== null) {
            const id = currentUser._id
            dispatch(userActions.updateMe({user, id}));

        }
        reset();
    };

    return (
        <div>
            <div className={css.carFormContainer}>
                <form onSubmit={handleSubmit(onSubmit)} className={css.form}>

                    <input className={css.input} type="text"
                           placeholder={'user name'} {...register('userName')} />
                    <span>{errors.userName?.message}</span>

                    <button className={css.button} disabled={!isValid}>{currentUser ? 'update' : 'save'}</button>


                </form>

            </div>
        </div>
    );
};

export {UserUpdate};