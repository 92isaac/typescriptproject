import { createSlice } from '@reduxjs/toolkit'

const initialState = {};
export const searchSlice = createSlice({
    name: 'productSearch',
    initialState,
    reducers: {
        searchResult:(_state, action)=>{
            return action.payload
        }
    }
})


export const { searchResult } = searchSlice.actions

export default searchSlice.reducer