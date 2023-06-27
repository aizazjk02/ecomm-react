import { cartActionTypes } from "./cart.reducer"


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


export const setIsCartOpen = (boolean) => {
    return {type : cartActionTypes.set_isCart_open, payload: boolean}
}

export const addProductToCart = (cartItems, productToAdd) => {
    const newCartItems = (addCartItem(cartItems, productToAdd))
    return {type : cartActionTypes.set_cart_items, payload : newCartItems}

}

export const removeProductFromCart = (cartItems, productToRemove) => {
    const newCartItems = (removeCartItem(cartItems, productToRemove))
    return { type: cartActionTypes.set_cart_items, payload: newCartItems }
}

export const clearProductFromCart = (cartItems, productToClear) => {
    const newCartItems = (clearCartItem(cartItems, productToClear))
    return { type: cartActionTypes.set_cart_items, payload: newCartItems }
}

export const clearCart = () => {
    return { type: cartActionTypes.set_cart_items, payload: [] }
}