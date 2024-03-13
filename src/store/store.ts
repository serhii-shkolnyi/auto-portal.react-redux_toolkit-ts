import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/user.slice";

const store = configureStore({
    reducer: {
        userStore: userReducer,

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