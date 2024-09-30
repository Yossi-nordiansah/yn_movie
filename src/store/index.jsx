import { configureStore } from "@reduxjs/toolkit";
import { dataFilmSlice } from "./slice/dataFilmSlice";

const store = configureStore({
    reducer: {
        dataFilmSlice : dataFilmSlice.reducer
    },
});

export default store;