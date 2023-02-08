import { AuthSlice } from "./Authenticate";

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
    reducer : {
        Authentication : AuthSlice.reducer   
    }
})

export default Store;