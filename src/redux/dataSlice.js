import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchData = createAsyncThunk('data/getDataAsync', async () => {
    const res = await axios(`https://covid19.mathdro.id/api`)
    return res.data
})

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: []
    },
    reducers: {},
    extraReducers: {
        [fetchData.fulfilled] : (state,action) => {
            state.items =action.payload
            console.log(action.payload)
        }
    }
})

export const { decrement } = dataSlice.actions

export default dataSlice.reducer
