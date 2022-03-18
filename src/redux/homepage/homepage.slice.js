import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messageList : [],
    messageSeleted:{},

}

export const homepageSlice = createSlice({
    name:'homepage',
    initialState,
    reducers:{
        setMessageList: ( state, action ) => {
            state.messageList = action.payload
        },
        setMessageSeleted: ( state, action ) => {
            state.messageSeleted = action.payload
        },
    }
})

export default homepageSlice.reducer;

export const homepageAction = homepageSlice.actions;