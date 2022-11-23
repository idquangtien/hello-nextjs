import { configureStore } from '@reduxjs/toolkit';
import todoSlicer from './slicer/todoSlicer';
import termDepositSlicer from './slicer/termDepositSlicer';

const store = configureStore({
    reducer: {
        todo: todoSlicer.reducer,
        termDeposit: termDepositSlicer.reducer,
    }
})
export default store;