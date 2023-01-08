import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISelectedType {
    front: string,
    back: string
}

export type filterTypes = {
    selectedType: string | ISelectedType,
    selectedArea: string,
    priceFrom: string,
    priceTo: string,
    search: string
    searchInner: string
}

const initialState: filterTypes = {
    selectedType: "",
    selectedArea: "",
    priceFrom: '',
    priceTo: '',
    search: '',
    searchInner: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSelectedType: (state: filterTypes, action: PayloadAction<ISelectedType>) => {
            state.selectedType = action.payload
        },
        setSelectedArea: (state: filterTypes, action: PayloadAction<string>) => {
            state.selectedArea = action.payload
        },
        setPriceFrom: (state: filterTypes, action: PayloadAction<string>) => {
            state.priceFrom = action.payload
        },
        setPriceTo: (state: filterTypes, action: PayloadAction<string>) => {
            state.priceTo = action.payload
        },
        setSearch: (state: filterTypes, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setSearchInner: (state: filterTypes, action: PayloadAction<string>) => {
            state.searchInner = action.payload
        },
        setInitialFilters: (state: filterTypes) => {
            state.selectedType = ""
            state.selectedArea = ""
            state.priceFrom = ''
            state.priceTo = ''
            state.search = ''
            state.searchInner = ''
        }
    }
})

export const {
    setSelectedType,
    setSelectedArea,
    setSearch,
    setSearchInner,
    setPriceFrom,
    setPriceTo,
    setInitialFilters
} = filterSlice.actions
export default filterSlice.reducer