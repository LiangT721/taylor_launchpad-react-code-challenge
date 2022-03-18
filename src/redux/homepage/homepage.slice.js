import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messageList : [],
}

export const homepageSlice = createSlice({
    name:'homepage',
    initialState,
    reducers:{
        setMessageList: ( state, action ) => {
            state.messageList = action.payload
        },
    }
})

export default homepageSlice.reducer;

export const homepageAction = homepageSlice.actions;