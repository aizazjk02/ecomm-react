
import { userActionTypes } from "./user.reducer"
export const setCurrentUser = (user) => {
    return {type: userActionTypes.set_current_user, payload: user}
}
export const setOrders = (orders) => {
    return {type: userActionTypes.set_orders, payload: orders}
}