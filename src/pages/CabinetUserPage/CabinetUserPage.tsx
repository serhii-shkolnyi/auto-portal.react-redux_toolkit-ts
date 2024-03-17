import React, {FC, useEffect} from 'react';
import css from "./CabinetUserPage.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {userService} from "../../services/user.service";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userActions} from "../../store/slices/user.slice";

const CabinetUserPage: FC = () => {
    const accessToken = userService.getAccessToken();
    const {user} = useAppSelector(state => state.userStore)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (accessToken && !user) {
            dispatch(userActions.me())
        }
    }, [accessToken, dispatch, user]);
    return (
        <div className={`${css.wrapper} container`}>
            <div className={css.menu}>
                <NavLink to={"/cabinet/user/user-details"}>
                    User details
                </NavLink>
                <NavLink to={"/cabinet/user/user-update"}>
                    User update
                </NavLink>
                <NavLink to={"/cabinet/user/create-car"}>
                    Create car
                </NavLink>
            </div>
            <div className={css.info}>
                <Outlet/>
            </div>

        </div>
    );
};

export {CabinetUserPage};