import { createContext, useState , useEffect} from "react";
import { onAuthStateChangedListner, getOrders } from "../utils/firebase/firebase.utils";
// this is a actual context with default values 
export const UserContext = createContext({
    currentUser: null,
    orders:[],
    setCurrentUser: () => {}
})
// this is a provider to pass the values to another components 
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const fetchOrders = async (uid) => {
            const result = await getOrders(uid)
            setOrders(result)
        }
        const unsubscribe = onAuthStateChangedListner((user) => {
            setCurrentUser(user)
            fetchOrders(currentUser?.uid)
            
        })
        return unsubscribe // this method is going to get called after useEffect 
    }, [currentUser])
    const providerValue = {currentUser, setCurrentUser, orders}
    return (
        <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>
    )
}