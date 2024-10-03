import { configureStore } from "@reduxjs/toolkit";
import { dataFilmSlice } from "./slice/dataFilmSlice";
import { modalSlice } from "./slice/modalSlice";
// import { thunk } from "redux-thunk";

const store = configureStore({
    reducer: {
        dataFilm : dataFilmSlice.reducer,
        modalDetail : modalSlice.reducer
    },
    // middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;