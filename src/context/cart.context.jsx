import { createContext, useEffect, useState } from "react";

/**
 * !Actual Context 
 */
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    cartItemsCount: 0,
    cartTotal:0,
    setCartsItemsCount: () => { },
    addProductToCart: () => { },
    removeProductFromCart: () => { },
    clearProductFromCart: () => { }
})



/**
 * !Helper Functions 
 */
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    if (existingCartItem)
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const calculateCartItemsCount = (cartItems) => {
    return cartItems.reduce((total, item) => total += item.quantity, 0)
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

const calculateCartTotal = (cartItems) => {
    return cartItems.reduce((total, cartItem) => total += (cartItem.quantity * cartItem.price), 0)
}
/**
 * ! Provider component 
 */
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    console.log("🚀 ~ file: cart.context.jsx:21 ~ CartProvider ~ cartItems:", cartItems)

    useEffect(() => {
        setCartItemsCount(calculateCartItemsCount(cartItems))
        setCartTotal(calculateCartTotal(cartItems))
    }, [cartItems])

    const addProductToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))

    }

    const removeProductFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearProductFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear))
    }
    const providerValues = { isCartOpen, setIsCartOpen, addProductToCart, removeProductFromCart, clearProductFromCart, cartItems, cartItemsCount, cartTotal }

    return (
        <CartContext.Provider value={providerValues}>{children}</CartContext.Provider>
    )

}