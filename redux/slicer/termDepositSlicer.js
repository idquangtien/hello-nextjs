import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../../core/apis';

const name = 'saving';
const initialState = {
    loading: false,
    error: '',
    data: {
        customerInfo: {},
        savingInfo: {
            amount: "100",
            term: '6M',
        }
    }
}

const TermDepositSlicer = createSlice({
    name,
    initialState,
    reducers: {
        updateAmount: (state, action) => {
            state.data.savingInfo.amount = action.payload;
        },
        updateTerm: (state, action) => {
            console.log(action.payload);
            state.data.savingInfo.term = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getInitSaving.pending, (state, action) => {
                console.log('pending');
                state.loading = true;
            })
            .addCase(getInitSaving.fulfilled, (state, action) => {
                console.log('fulfilled');
                state.loading = false;
                console.log('action >>>>', action.payload);
            })
            .addCase(getInitSaving.rejected, (state, action) => {
                console.log('rejected');
                state.loading = false;
            })
    }

})

export const getInitSaving = createAsyncThunk(`${name}/getInitSaving`, async (request) => {
    const { data } = await api.post('getInitSaving');
    return data;
})

export default TermDepositSlicer;