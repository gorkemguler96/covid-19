import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchData = createAsyncThunk('data/getDataAsync', async (inputNumber) => {
    const res = await axios(`https://covid19.mathdro.id/api`)
    return res.data
})

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
        selectInput: null,
    },
    reducers: {
        inputChange: (state,action) => {
            state.selectInput = action.payload
        }
    },
    extraReducers: {
        [fetchData.fulfilled] : (state,action) => {
            state.items =action.payload
        },
    }
})

export const { inputChange } = dataSlice.actions

export default dataSlice.reducer
