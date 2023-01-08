import {configureStore} from "@reduxjs/toolkit";
import apartmentSlice from "./slices/apartmentSlice";
import cardSlice from "./slices/cardSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        apartment : apartmentSlice,
        card: cardSlice,
        filter: filterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch