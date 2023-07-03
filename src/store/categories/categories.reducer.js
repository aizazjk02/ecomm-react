import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    categoriesMap : {}
}

// export const categoriesActionTypes = {
//     set_categoriesMap : "set_categoriesMap",
// }

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategoriesMap: (state, action) => {
            state.categoriesMap = action.payload
        }
    }
})

export const { setCategoriesMap } = categoriesSlice.actions 
export const categoriesReducer = categoriesSlice.reducer
// export const categoriesReducer = (state = initialState, action) => {
//     const { type, payload } = action
    
//     switch (type) {
//         case categoriesActionTypes.set_categoriesMap : return {...state, categoriesMap: payload}
//         default : return state
//     }
// }