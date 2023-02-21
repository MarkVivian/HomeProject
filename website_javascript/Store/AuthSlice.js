const { createSlice } = require("@reduxjs/toolkit");

export const authSlice = createSlice({
    name: "auth",
    initialState : {
        userName : "",
        userPassword : ""
    },
    reducers : {
        Login(state, actions){
            state.userName = actions.payload
            state.userPassword = actions.payload
        }
    }
})

export const actions = authSlice.actions