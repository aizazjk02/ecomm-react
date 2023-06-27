const initialState = {
    isCartOpen: false, 
    cartItems: [], 
}

export const cartActionTypes = {
    set_cart_items: "set_cart_items",
    set_isCart_open: "set_isCart_open"
}

export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action 
    switch (type) {
        case cartActionTypes.set_cart_items: return { ...state, cartItems: payload }
        case cartActionTypes.set_isCart_open: return {...state, isCartOpen : payload}
        default : return state 
    }
}