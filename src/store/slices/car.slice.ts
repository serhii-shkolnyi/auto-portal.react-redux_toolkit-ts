import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";

export interface IResponse {
    cars: ICar[];
    car: ICar | null;

}

const initialState: IResponse = {
    cars: [],
    car: null,


};

const createCar = createAsyncThunk<ICar[], { car:any}>(
    'carSlice/createCar', async ({car}, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await carService.createCar(car);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)
const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll', async (_, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)
const getId = createAsyncThunk<ICar, { _id: string }>(
    'carSlice/getId', async ({_id}, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await carService.getId(_id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)
const getAllForUser = createAsyncThunk<ICar[], void>(
    'carSlice/getAllForUser', async (_, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await carService.getAllForUser();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(createCar.fulfilled, (state, action) => {
            state.cars = action.payload;
        })
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload;
        })
        .addCase(getAllForUser.fulfilled, (state, action) => {
            state.cars = action.payload;
        })
        .addCase(getId.fulfilled, (state, action) => {
            state.car = action.payload;
        })
});

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    createCar,
    getAll,
    getAllForUser,
    getId
}
export {
    carActions,
    carReducer
};