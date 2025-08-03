import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    allPost : [],
    status: false
};

const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.userInfo = action.payload;
            state.status = true;
            
        },
        setPost: (state, action) => {
            state.allPost = action.payload
            
        },
        logOut: (state) => {  
            state.userInfo = {};
            state.status = false;
        },
    }
});

export const { logIn, logOut , setPost} = userSlicer.actions;

export default userSlicer.reducer;
