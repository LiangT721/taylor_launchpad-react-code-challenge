import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countryList : [],
    countrySeleted:"Canada",
    universityList : [],
    loadingStatus:null,
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
        },
        setLoadingStatus: ( state, action ) => {
            state.loadingStatus = action.payload
        }
    }
})

export default universitiesSlice.reducer;

export const universitiesAction = universitiesSlice.actions;