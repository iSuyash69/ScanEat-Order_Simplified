import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice";

const reduxStore=configureStore({
    reducer:{
        cart:cartReducer,
    },
});

export default reduxStore;