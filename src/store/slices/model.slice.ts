import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IModel} from "../../interfaces/model.interface";
import {modelService} from "../../services/model.service";
import {IBrand} from "../../interfaces/brand.interface";
import {brandService} from "../../services/brand.service";

export interface IResponse {
    models: IModel[];
    model: IModel | null;

}

const initialState: IResponse = {
    models: [],
    model: null,

};

const getAllForBrand = createAsyncThunk<IModel[], { brandId:any}>(
    'userSlice/getAllForBrand', async ({brandId}, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await modelService.getAllForBrand(brandId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)
const getId = createAsyncThunk<IModel, { modelId: string }>(
    'modelSlice/getId', async ({modelId}, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await modelService.getId(modelId);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)


const modelSlice = createSlice({
    name: 'brandSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllForBrand.fulfilled, (state, action) => {
            state.models = action.payload;
        })
        .addCase(getId.fulfilled, (state, action) => {
            state.model = action.payload;

        })
});

const {reducer: modelReducer, actions} = modelSlice;

const modelActions = {
    ...actions,
    getAllForBrand,
    getId
}
export {
    modelActions,
    modelReducer
};