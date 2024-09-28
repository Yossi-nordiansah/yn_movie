import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0
};

export const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
    },
})

console.log(counterSlice, "counterslice");