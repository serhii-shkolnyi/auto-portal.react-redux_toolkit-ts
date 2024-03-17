import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import css from "./CabinetPage.module.css";

const CabinetPage:FC = () => {
    return (
        <div className={css.wrapper}>
            <Outlet/>

        </div>
    );
};

export {CabinetPage};