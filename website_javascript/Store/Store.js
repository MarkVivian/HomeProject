const { configureStore } = require("@reduxjs/toolkit");
const { authSlice } = require("./AuthSlice");

const Store = configureStore({
    reducer : {
        Auth : authSlice.reducer
    }
})

export default Store