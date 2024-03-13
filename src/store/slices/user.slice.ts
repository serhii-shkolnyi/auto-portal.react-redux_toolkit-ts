import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IUser} from "../../interfaces";
import {EAccountStatus, EAccountType} from "../../enums";
import {userService} from "../../services/user.service";

export interface IResponse {
    data:IUser
}

const initialState:IUser  = {
    userName: "",
    phone: "",
    email: "",
    password: "",
    accountType: EAccountType.BASIC,
    accountStatus: EAccountStatus.INACTIVE,
    avatar: null,
};

const register = createAsyncThunk<IResponse, {user:Partial<IUser>}>(
    'userSlice/register', async ({user}, {rejectWithValue}):Promise<any> => {
        try {
            const {data} = await userService.register(user);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const registerVerify = createAsyncThunk<void, {token:string|undefined}>(
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


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(register.fulfilled, (state, action) => {
            state.userName = action.payload.data.userName;
            state.phone = action.payload.data.phone;
            state.email = action.payload.data.email;
            state.accountType = action.payload.data.accountType;
            state.accountStatus = action.payload.data.accountStatus;
            state.avatar = action.payload.data.avatar
        })
        .addCase(registerVerify.fulfilled, (state, action)=>{

        })
});

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions,
    register,
    registerVerify

}
export {
    userActions,
    userReducer
};