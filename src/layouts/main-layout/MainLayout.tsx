import React, {FC} from 'react';
import {Footer, Header, Main} from "../../components";
import css from "./MainLayout.module.css";
const MainLayout:FC = () => {
    return (
        <div className={css.layout}>
            <header className={css.header}>
                <Header/>
            </header>

            <main className={css.main}>
                <Main/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export {MainLayout};