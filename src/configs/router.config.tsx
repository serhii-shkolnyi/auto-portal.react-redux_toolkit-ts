import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts/main-layout/MainLayout";
import {CabinetPage} from "../pages";
import {SignUp} from "../components/SignUp/SignUp";
import {Login} from "../components/Login/Login";
import {SignUpVerify} from "../components/SignUpVerify/SignUpVerify";

export const routerConfig = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
        children: [
            {
                path: "/cabinet",
                element: <CabinetPage/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to={"login"}/>
                    },
                    {
                        path: "login",
                        element: <Login/>
                    },
                    {
                        path: "register",
                        element: <SignUp/>,
                    },
                    {
                        path: "register/verify/:token",
                        element: <SignUpVerify/>
                    }
                ]
            }
        ]
    }
]);
