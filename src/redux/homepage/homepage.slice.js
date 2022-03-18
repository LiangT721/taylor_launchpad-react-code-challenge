import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messageList : [],
    messageSeleted:null,
    postPopUp:false,

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
        setPostPopUp: ( state ) => {
            state.postPopUp = !state.postPopUp
        },
        postMessageList: ( state, action ) => {
            let newList = [ action.payload, ...state.messageList ];
            state.messageList = newList;
        },
    }
})

export default homepageSlice.reducer;

export const homepageAction = homepageSlice.actions;