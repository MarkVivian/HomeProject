const { createSlice } = require("@reduxjs/toolkit");

export const authSlice = createSlice({
    name: "auth",
    initialState : {
        signUp : {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
        },
        state : false,
        login :{
            position: ""
        }
    },
    reducers : {
        SignUp(state, actions){
            state.signUp.firstName = actions.payload[0]
            state.signUp.lastName = actions.payload[1]
            state.signUp.email = actions.payload[2]
            state.signUp.password = actions.payload[3]
            state.state = actions.payload[4]
        },
        Position(state, actions){
            state.login.position = actions.payload
        }
    }
})

export const auth_Actions = authSlice.actions