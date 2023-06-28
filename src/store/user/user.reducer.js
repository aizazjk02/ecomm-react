import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    currentUser: null, 
    orders: []
}

const userSlice = createSlice({
    name: "user",
    initialState, 
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        },
        setOrders(state, action) {
            state.orders = action.payload
        }

    }
})

export const userReducer = userSlice.reducer
export const {setCurrentUser, setOrders} = userSlice.actions




