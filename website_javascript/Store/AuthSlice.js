const { createSlice } = require("@reduxjs/toolkit");

export const authSlice = createSlice({
    name: "auth",
    initialState : {
        login : {
            userName : "",
            password : "",
            state : false
        },
        signUp : {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            state : false
        }
    },
    reducers : {
        Login(state, actions){
            state.login.userName = actions.payload[0]
            state.login.password = actions.payload[1]
            state.login.state = true//!state.login.state
        },
        SignUp(state, actions){
            state.signUp.firstName = actions.payload[0]
            state.signUp.lastName = actions.payload[1]
            state.signUp.email = actions.payload[2]
            state.signUp.password = actions.payload[3]
            state.signUp.state = true//!state.signUp.state
        }
    }
})

export const auth_Actions = authSlice.actions