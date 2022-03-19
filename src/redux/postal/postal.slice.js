import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postcode : "",
    information : null,
    searchStatus : null, 
}

export const postalSlice = createSlice({
    name:'postal',
    initialState,
    reducers: {
        setPostal:(state, action )=> {
            state.postcode = action.payload;
        },
        setInformation: ( state, action ) => {
            state.information = action.payload;
        },
        setSearchStatus: ( state, action ) => {
            state.searchStatus = action.payload;
        }

    }
})

export default postalSlice.reducer;

export const postalAction = postalSlice.actions;