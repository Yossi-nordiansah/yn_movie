//file datafilmslice
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    dataFilm : [],
    isLoading : false,
    error: null,
    totalResults: 0
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
        },
        setLoading : (state) => {
            state.isLoading = true;
        },
        setError : (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

export const { setDataFilm, setLoading, setError } = dataFilmSlice.actions;

export function getDataFilm(query){
    return async (dispatch, getState) => {
        dispatch(setLoading());
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=966fb1b7&s=${query}`);
            dispatch(setDataFilm({
                data: response.data.Search,
                totalResults: response.data.totalResults
            }));
            const state = getState();
        } catch (error) {
            console.log(error);
        }
    }
} 
