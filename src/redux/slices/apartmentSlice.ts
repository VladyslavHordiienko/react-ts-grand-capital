import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {filterTypes} from "../slices/filterSlice";

export const fetchApartments = createAsyncThunk('apartment/fetchApartments', async () => {
    const {data} = await axios.get(`https://635ea1c803d2d4d47af3255b.mockapi.io/apartments`)
    return data
})

// export const fetchFilteredApartments = createAsyncThunk('apartment/fetchFilteredApartments', async (filter:filterTypes) => {
//     const {search, selectedType} = filter
//     console.log(search)
//     const type = selectedType === 'Квартира' ? 'apartment' :  selectedType === 'Дім' ? 'house' : ''
//     const {data} = await axios.get(`https://635ea1c803d2d4d47af3255b.mockapi.io/apartments?type=${type}&search=${search}`)
//     return data
// })

export interface IApartments {
    id: string
    title: string
    city: string
    district: string
    price: string
    priceForM2: string
    photos: string[]
    description: string[]
    location: string[]
    area: string
    type: string
    features: string[]
}

type apartmentTypes = {
    apartments: IApartments[] | []
    currentPage: number
}

const initialState: apartmentTypes = {
    apartments: [],
    currentPage: 1
}

const apartmentSlice = createSlice(
    {
        name: 'apartment',
        initialState,
        reducers: {
            setCurrentPage: (state: apartmentTypes, action: PayloadAction<number>) => {
                state.currentPage = action.payload
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchApartments.fulfilled, (state, action) => {
                state.apartments = action.payload
            })
            // builder.addCase(fetchFilteredApartments.fulfilled, (state, action) => {
            //     console.log(action.payload)
            //     state.apartments = action.payload
            // })
        }
    }
)
export const {setCurrentPage} = apartmentSlice.actions
export default apartmentSlice.reducer
