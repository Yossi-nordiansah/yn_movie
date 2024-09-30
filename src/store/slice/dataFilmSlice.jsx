import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    dataFilm : []
};

export const dataFilmSlice = createSlice({
    name : "dataFilmSlice",
    initialState,
    reducers : {
        setDataFilm : (state, action) => {
            state.dataFilm = action.payload;
        }
    }
});

export const { setDataFilm } = dataFilmSlice.actions;

export function getDataFilm(){
    return async (dispatch, getState) => {
        try {
            const response = await axios.get("http://www.omdbapi.com/?apikey=966fb1b7&s=avengers");
            dispatch(setDataFilm(response.data.Search));
            const state = getState();
            console.log(state.dataFilm);
        } catch (error) {
            console.log(error);
        }
    }
} 
