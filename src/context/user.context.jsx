import { createContext, useState , useEffect} from "react";
import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";
// this is a actual context with default values 
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {}
})

// this is a provider to pass the values to another components 
export const UserProvider = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            setCurrentUser(user)
        })
        return unsubscribe // this method is going to get called after useEffect 
    }, [])
    const providerValue = {currentUser, setCurrentUser}
    return (
        <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>
    )
}