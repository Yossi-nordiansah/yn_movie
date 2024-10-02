import { configureStore } from "@reduxjs/toolkit";
import { dataFilmSlice } from "./slice/dataFilmSlice";
import { modalSlice } from "./slice/modalSlice";

const store = configureStore({
    reducer: {
        dataFilm : dataFilmSlice.reducer,
        modalDetail : modalSlice.reducer
    },
});

export default store;