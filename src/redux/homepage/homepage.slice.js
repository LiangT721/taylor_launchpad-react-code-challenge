import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messageList : [],
    messageSeleted:{id:0},
    postPopUp:false,
    editToggle:false,

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
        editMessage: (state, action) => {
            let newlist = state.messageList.map((el => {
                if(el.id == action.payload.id){
                    return action.payload;
                }else{
                    return el
                }
            }))
            state.messageList = newlist
        },
        setEditToggle: ( state ) => {
            state.editToggle = !state.editToggle;
        }
    }
})

export default homepageSlice.reducer;

export const homepageAction = homepageSlice.actions;