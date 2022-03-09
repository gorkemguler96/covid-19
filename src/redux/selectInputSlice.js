// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from "axios";
//
// const asd = ["Turkey"]
//
// export const fetchCountry = createAsyncThunk('country/getCountryAsync', async () => {
//     const res = await axios(`https://covid19.mathdro.id/api/countries/${asd}`)
//     return res.data
// })
//
// export const selectInputSlice = createSlice({
//     name: 'country',
//     initialState: {
//         items: [],
//         // asd: "Turkey"
//     },
//     reducers: {},
//     extraReducers: {
//         [fetchCountry.fulfilled] : (state,action) => {
//             state.items =action.payload
//             // console.log(state.selectInput)
//         }
//     }
// })
//
// export const {  } = selectInputSlice.actions
//
// export default selectInputSlice.reducer
