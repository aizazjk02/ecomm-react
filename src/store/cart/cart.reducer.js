// import { cartActionTypes } from "./cart.reducer"
import { createSlice } from "@reduxjs/toolkit"

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    if (existingCartItem)
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}


const removeCartItem = (cartItems, productToRemove) => {
    // if product exists then check for the quantity
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id)
    // if quantity is < 0 then remove the product from cart 
    if (existingCartItem) {
        if (existingCartItem.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
        }
        else {
            return cartItems.map(cartItem => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
        }
    }
    // if quantity is > 0 then decerase the quantity by 1 
    return cartItems
}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
}


const initialState = {
    isCartOpen: false,
    cartItems: [],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setIsCartOpen: (state, action) => { state.isCartOpen = action.payload },
        addProductToCart: (state, action) => { state.cartItems = addCartItem(state.cartItems, action.payload) },
        removeProductFromCart: (state, action) => { state.cartItems = removeCartItem(state.cartItems, action.payload) },
        clearProductFromCart: (state, action) => { state.cartItems = clearCartItem(state.cartItems, action.payload) },
        clearCart: (state, action) => { state.cartItems = action.payload }
    }
})

export const { setIsCartOpen, addProductToCart, removeProductFromCart, clearProductFromCart, clearCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
