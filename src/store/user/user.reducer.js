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
            state.orders = action.payload.sort((a, b) => new Date(b.createdAt?.seconds * 1000) - new Date(a.createdAt?.seconds * 1000))
        }

    }
})

export const userReducer = userSlice.reducer
export const {setCurrentUser, setOrders} = userSlice.actions




