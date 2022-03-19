import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countryList : [],
    countrySeleted:"Canada",
    universitiesList : []
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
        }
    }
})

export default universitiesSlice.reducer;

export const universitiesAction = universitiesSlice.actions;