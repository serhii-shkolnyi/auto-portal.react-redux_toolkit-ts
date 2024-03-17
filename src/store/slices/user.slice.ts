import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IUser} from "../../interfaces";
import {userService} from "../../services/user.service";
import { IResponseRegister} from "../../interfaces/response";

export interface IResponse {
    user: IUser | null
    // accessToken: string |null;
    // refreshToken: string |null;
}

const initialState: IResponse = {
    user: null,
    // accessToken: null,
    // refreshToken: null,

};
const register = createAsyncThunk<IResponseRegister, { user: Partial<IUser> }>(
    'userSlice/register', async ({user}, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await userService.register(user);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const registerVerify = createAsyncThunk<void, { token: string | undefined }>(
    'userSlice/registerVerify', async ({token}, {rejectWithValue}) => {
        try {
            const {data} = await userService.registerVerify(token);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);

        }
    }
)

const login = createAsyncThunk<IUser, { user: Partial<IUser> }>(
    'userSlice/login', async ({user}, {rejectWithValue}): Promise<any> => {
        try {
            return  await userService.login(user);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const me = createAsyncThunk<IUser, void>(
    'userSlice/me', async (_, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await userService.me();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)
const updateMe = createAsyncThunk<IUser, { user: Partial<IUser>, id: string }>(
    'userSlice/updateMe', async ({user,id}, {rejectWithValue}): Promise<any> => {
        console.log(user, id)
        try {
            const {data} = await userService.updateMe(user,id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.data;
        })
        .addCase(registerVerify.fulfilled, (state, action) => {

        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        .addCase(me.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        .addCase(updateMe.fulfilled, (state, action) => {
            state.user = action.payload;
        })
});

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions,
    register,
    registerVerify,
    login,
    me,
    updateMe
}
export {
    userActions,
    userReducer
};