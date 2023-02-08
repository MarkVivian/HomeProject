const { createSlice } = require("@reduxjs/toolkit");

export const AuthSlice = createSlice({
    name : "Authentication",
    initialState : {
         Login : {},
         SignUp : {}   
    },
    reducers : {
        
    }
})


export const actions = AuthSlice.actions