import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    visible : false,
    detailDataFilm : null,
    isLoading : false
}

export const modalSlice = createSlice({
    name : "modalSlice",
    initialState,
    reducers : {
        showModal: (state) => {
            state.visible = true;
        },
        hideModal: (state) => {
            state.visible = false;
            state.detailDataFilm = null;
        },
        setDetailDataFilm : (state, action) => {
            state.detailDataFilm = action.payload;
            state.isLoading = false;
        },
        setIsLoading : (state) => {
            state.isLoading = true;
        }
    }
});

export const { showModal, hideModal, setIsLoading,  setDetailDataFilm } = modalSlice.actions;

export const getDetailDataFilm = (id) => {
    return async (dispatch, getState) => {
        dispatch(setIsLoading());
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=966fb1b7&i=${id}`);
            dispatch(setDetailDataFilm(response.data));
            console.log(response.data)
            const state = getState();
            console.log(state.modalSlice.detailDataFilm); 
        } catch (error) {
            console.log(error)
        }
    } 
}


 