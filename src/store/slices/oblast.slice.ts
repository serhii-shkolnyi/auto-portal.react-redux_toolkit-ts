import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IOblast} from "../../interfaces/oblast.interface";
import {oblastService} from "../../services/oblast.service";

export interface IResponse {
    oblasts: IOblast[];

}

const initialState: IResponse = {
    oblasts: [],

};

const getAll = createAsyncThunk<IOblast[], void>(
    'oblastSlice/getAll', async (_, {rejectWithValue}): Promise<any> => {
        try {
            const {data} = await oblastService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)


const oblastSlice = createSlice({
    name: 'oblastSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.oblasts = action.payload;
        })
});

const {reducer: oblastReducer, actions} = oblastSlice;

const oblastActions = {
    ...actions,
    getAll,
}
export {
    oblastActions,
    oblastReducer
};