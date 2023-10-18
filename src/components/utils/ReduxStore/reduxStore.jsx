import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice";
import allItemsReducer from "./allItemsSlice/allItemsSlice";

const reduxStore=configureStore({
    reducer:{
        cart:cartReducer,
        allItems:allItemsReducer,
    },
});

export default reduxStore;