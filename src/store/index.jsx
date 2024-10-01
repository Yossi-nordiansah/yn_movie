import { configureStore } from "@reduxjs/toolkit";
import { dataFilmSlice } from "./slice/dataFilmSlice";

const store = configureStore({
    reducer: {
        dataFilm : dataFilmSlice.reducer
    },
});

export default store;