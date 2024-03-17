import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/user.slice";
import {brandReducer} from "./slices/brand.slice";
import {modelReducer} from "./slices/model.slice";
import {carReducer} from "./slices/car.slice";

const store = configureStore({
    reducer: {
        userStore: userReducer,
        brandStore: brandReducer,
        modelStore: modelReducer,
        carStore: carReducer,

    }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
};