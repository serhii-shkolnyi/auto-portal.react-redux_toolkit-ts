import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IBrand} from "../../interfaces/brand.interface";
import {brandService} from "../../services/brand.service";

export interface IResponse {
    brands: IBrand[];
    brand: IBrand | null;

}

const initialState: IResponse = {
    brands: [],
    brand: null ,

};

const getAll = createAsyncThunk<IBrand[], void>(
    'userSlice/getAll', async (_, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await brandService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)
const getId = createAsyncThunk<IBrand, { brandId: string }>(
    'userSlice/getId', async ({brandId}, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await brandService.getId(brandId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)


const brandSlice = createSlice({
    name: 'brandSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.brands = action.payload;
        })
        .addCase(getId.fulfilled, (state, action) => {
            state.brand = action.payload;
        })
});

const {reducer: brandReducer, actions} = brandSlice;

const brandActions = {
    ...actions,
    getAll,
    getId,
}
export {
    brandActions,
    brandReducer
};