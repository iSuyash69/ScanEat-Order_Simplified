import { createSlice } from "@reduxjs/toolkit";


const calculateTotalCost=(cost)=>{
    const totalCost=cost.reduce((acc,currentCost)=>acc+currentCost,0);
    return totalCost;
}

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        cost:[],
        totalCost:0,
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
            state.cost.pop();
            state.totalCost = calculateTotalCost(state.cost);
        },
        emptyCart:(state)=>{
            state.items.length=0;
        },
        addCost:(state,action)=>{
            state.cost.push(action.payload);
            state.totalCost=calculateTotalCost(state.cost)
        },
    }
});

export const {addItem,removeItem,emptyCart,addCost}=cartSlice.actions;
export default cartSlice.reducer;