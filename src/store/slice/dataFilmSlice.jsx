//file datafilmslice
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    dataFilm : [],
    isLoading : false,
    error: null,
    totalResults: 0,
    errorMessage:null
};

export const dataFilmSlice = createSlice({
    name : "dataFilmSlice",
    initialState,
    reducers : {
        setDataFilm : (state, action) => {
            state.dataFilm = action.payload;
            state.totalResults = action.payload.totalResults;
            state.isLoading = false;
            state.error =  null;
            state.errorMessage = null;
        },
        setLoading : (state) => {
            state.isLoading = true;
        },
        setError : (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        setErrorMessage : (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
            state.dataFilm = [];
        }
    } 
});

export const { setDataFilm, setLoading, setError, setErrorMessage } = dataFilmSlice.actions;

export function getDataFilm(query){
    return async (dispatch, getState) => {
        dispatch(setLoading());
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=966fb1b7&s=${query}`);
            console.log(response.data)
            if (response.data.Response === "True"){
                dispatch(setDataFilm({
                    data: response.data.Search,
                    totalResults: response.data.totalResults
                }));
            } else {
                dispatch(setErrorMessage(response.data.Error));
                // dispatch(setDataFilm(null));
                console.log(response.data.Error)
            }
        } catch (error) {
            dispatch(setError(error.message));
            console.log(error.message);
        }
    }
} 
