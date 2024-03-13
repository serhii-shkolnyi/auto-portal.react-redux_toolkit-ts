import React, {FC} from 'react';
import css from "./Header.module.css";
import {Link} from "react-router-dom";
import avatar from "../../../assets/icons/avatar.svg";

const Header: FC = () => {
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
                <Link className={css.login} to={"/cabinet"}>Login</Link>
            </div>
        </div>
    );
};

export {Header};
