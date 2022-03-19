import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countryList : [],
    universitiesList : []
}

export const universitiesSlice = createSlice({
    name:'universities',
    initialState,
    reducers:{
        setCountryList: ( state, action ) => {
            state.countryList = action.payload
        }
    }
})

export default universitiesSlice.reducer;

export const universitiesAction = universitiesSlice.actions;