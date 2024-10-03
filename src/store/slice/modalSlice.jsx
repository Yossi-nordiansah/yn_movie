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
            state.cardDetails =  null;
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

export const getDetailDataFilm = (title) => {
    return async (dispatch) => {
        dispatch(setIsLoading());
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=966fb1b7&t=${title}`);
            console.log(response.data)
            dispatch(setDetailDatalFilm(response.data))
        } catch (error) {
            console.log(error)
        }
    } 
}

export const { showModal, hideModal, setIsLoading, setDetailDatalFilm } = modalSlice.actions;
