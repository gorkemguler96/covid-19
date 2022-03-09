import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './dataSlice'
import selectInputSlice from "./selectInputSlice";

export default configureStore({
    reducer: {
        data: dataSlice,
        country: selectInputSlice
    },
})
