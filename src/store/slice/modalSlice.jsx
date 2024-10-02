import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible : false,
    cardDetails : null
}

export const modalSlice = createSlice({
    name : "modalSlice",
    initialState,
    reducers : {
        showModal: (state, action) => {
            state.visible = true;
            state.cardDetails = action.payload;
        },
        hideModal: (state) => {
            state.visible = false;
            state.cardDetails =  null;
        }
    }
})



export const { showModal, hideModal } = modalSlice.actions;
