
const initialState = {
    currentUser: null, 
    orders: []
}
export const userActionTypes = {
    set_current_user: "set_current_user", 
    set_orders : "set_orders", 
}
export const userReducer = (state = initialState, action) => {
    const { type, payload } = action 
    
    switch (type) {
        case userActionTypes.set_current_user: 
            return { ...state, currentUser: payload }
        case userActionTypes.set_orders: 
            return {...state, orders: payload}
        default: 
           return state
    }
}



