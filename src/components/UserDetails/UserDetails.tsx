import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../store/slices/car.slice";
import {Car} from "../Car/Car";
import css from "./UserDetails.module.css";
import {userActions} from "../../store/slices/user.slice";
import {EAccountType} from "../../enums";

const UserDetails:FC = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.carStore);
    useEffect(() => {
        dispatch(carActions.getAllForUser())
        dispatch(userActions.me())
    }, [dispatch]);

    const {user} = useAppSelector(state => state.userStore)
    const onClick = async ()=>{
        if (user !== null) {
            const id = user?._id;
            const accountType = {accountType: EAccountType.PREMIUM}
            dispatch(userActions.updateMe({user:accountType, id}));
        }
    }

    return (
        <div>
            <div className={css.userInfo}>
                <div>користувач: <b>{user?.userName}</b></div>
                <div>тип аккаунту: <b>{user?.accountType}</b></div>
                <div>статус аккаунту : <b>{user?.accountStatus}</b></div>
                <div className={css.premium} onClick={onClick}>Придбати PREMIUM аккаунт</div>
            </div>

            {cars &&
                <div className={css.carContainer}>
                    {cars.map(car=> <Car key={car._id} car={car}/>)}
                </div>
            }
        </div>
    );
};

export {UserDetails};