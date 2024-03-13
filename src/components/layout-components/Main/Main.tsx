import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import css from "./Main.module.css";

const Main:FC = () => {
    return (
        <div className={css.wrapper}>
            <Outlet/>
        </div>
    );
};

export {Main};