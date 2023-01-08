import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IApartments} from "./apartmentSlice";

export const fetchCardApartment = createAsyncThunk(
    'card/fetchCardApartment',
    async (title:string) => {
        const {data} = await axios.get<IApartments[]>(`https://635ea1c803d2d4d47af3255b.mockapi.io/apartments/?title=${title}`)
        return data
    })


type cardTypes = {
    cardApartment:IApartments[] | null
}

const initialState:cardTypes = {
    cardApartment: null
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCardApartment.fulfilled, (state, action) => {
            state.cardApartment = action.payload
        })
    },
})

export const {} = cardSlice.actions
export default cardSlice.reducer