const { createSlice } = require("@reduxjs/toolkit");

export const authSlice = createSlice({
    name: "auth",
    initialState : {
        signUp : {
            firstName : "",
            lastName : "",
            userEmail : "",
            userPassword : "",
            userNumber : "",
            state : false
        },
        login :{
            firstName : "",
            userPassword : "",
            state : false
        },
        Allowed : {
            message : "",
            state : false,
            control : false
        }
    },
    reducers : {
        SignFunction(state, actions){
            state.signUp.firstName = actions.payload[0]
            state.signUp.lastName = actions.payload[1]
            state.signUp.userEmail = actions.payload[2]
            state.signUp.userPassword = actions.payload[3]
            state.signUp.userNumber = actions.payload[4]
            state.signUp.state = true
        },
        loginFunction(state, actions){
            state.login.firstName = actions.payload[0]
            state.login.userPassword = actions.payload[1]
            state.login.state = true
        },
        confirmation(state, actions){
            state.Allowed.message = actions.payload[0]
            state.Allowed.state = actions.payload[1]
            state.Allowed.control = actions.payload[2]
        }
    }
})

export const auth_Actions = authSlice.actions