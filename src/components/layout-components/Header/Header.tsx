import React, {FC, useEffect} from 'react';
import css from "./Header.module.css";
import {Link} from "react-router-dom";
import avatar from "../../../assets/icons/avatar.svg";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {userService} from "../../../services/user.service";
import {userActions} from "../../../store/slices/user.slice";

export let accessTransfer = "";

const Header: FC = () => {
    const accessToken = userService.getAccessToken();
    const {user} = useAppSelector(state => state.userStore)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (accessToken && !user) {
            dispatch(userActions.me())
        }
    }, [accessToken, dispatch, user]);
    return (
        <div className={`container ${css.wrapper}`}>
            <div className={css.logo}>
                <Link to={"/"} className={css.flex} >
                    <div className={css.logoLeft}>Auto</div>
                    <div className={css.logoRight}>Portal</div>
                </Link>
            </div>
            <div className={css.flex}>
                <div className={css.avatar}><img src={avatar}  alt="avatar"/></div>

                {
                    !user? <Link className={css.login} to={"/cabinet"}>Login</Link> :  <Link className={css.login} to={"/cabinet/user"}>Cabinet</Link>
                }

            </div>
        </div>
    );
};

export {Header};
