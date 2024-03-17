import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts/main-layout/MainLayout";
import {CabinetPage, CabinetUserPage} from "../pages";
import {SignUp} from "../components/SignUp/SignUp";
import {Login} from "../components/Login/Login";
import {SignUpVerify} from "../components/SignUpVerify/SignUpVerify";
import {UserDetails, UserUpdate} from "../components";
import {CreateCar} from "../components/CreateCar/CreateCar";
import {CarPage} from "../pages/CarPage/CarPage";

export const routerConfig = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={"cars"}/>
            },
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
                    },
                    {
                        path: "user",
                        element: <CabinetUserPage/>,
                        children: [
                            {
                                index: true,
                                element: <Navigate to={"user-details"}/>
                            },
                            {
                                path: "user-details",
                                element: <UserDetails/>
                            },
                            {
                                path: "user-update",
                                element: <UserUpdate/>
                            },
                            {
                                path: "create-car",
                                element: <CreateCar/>
                            }
                        ]
                    }
                ]
            },
            {
                path: "/cars",
                element: <CarPage/>
            }
        ]
    }
]);
