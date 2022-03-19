import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countryList : [],
    countrySeleted:"Canada",
    universityList : []
}

export const universitiesSlice = createSlice({
    name:'universities',
    initialState,
    reducers:{
        setCountryList: ( state, action ) => {
            state.countryList = action.payload
        },
        setCountrySelected: (state, action ) => {
            state.countrySeleted = action.payload
        },
        setUniversityList: ( state, action ) => {
            state.universityList = action.payload
        }
    }
})

export default universitiesSlice.reducer;

export const universitiesAction = universitiesSlice.actions;