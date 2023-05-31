// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
// Your web app's Firebase configuration
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBILDvRpAObSygIVs_TeL5-0H42PF-Wak8",
    authDomain: "crown-clothing-87fae.firebaseapp.com",
    projectId: "crown-clothing-87fae",
    storageBucket: "crown-clothing-87fae.appspot.com",
    messagingSenderId: "878006960366",
    appId: "1:878006960366:web:0342c513d5e56fe3afb3ff"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
const googleAuthProvider = new GoogleAuthProvider()

googleAuthProvider.setCustomParameters({
    prompt: "select_account"
})


/**
 * ? Functions related to authentcation ...
 */
export const signInWithGoogleAuth = async () => {
    return await signInWithPopup(auth, googleAuthProvider)
}

// handle documents
// this function just creates a user entry inside the db. It has nothing to do with the auth. 
export const createUserDocFromAuth = async (userAuth, additionalProps) => {
    const docRef = doc(db, "users", userAuth.uid)
    console.log("🚀 ~ file: firebase.utils.js:35 ~ createUserDocFromAuth ~ docRef:", docRef)
    const docSnapShot = await getDoc(docRef)
    console.log("🚀 ~ file: firebase.utils.js:38 ~ createUserDocFromAuth ~ docSnapShot:", docSnapShot.exists())

    if (!docSnapShot.exists()) {
        const { email, displayName } = userAuth
        const createdAt = new Date()
        try {
            await setDoc(docRef, {
                displayName, email, createdAt, ...additionalProps
            })

        } catch (error) {
            console.log("🚀 ~ file: firebase.utils.js:49 ~ createUserDocFromAuth ~ error:", error)

        }
    }
    else return docRef

}

/**
 * ! Function to add product data to firebase db 
 */

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)

    const batch = writeBatch(db)

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log("Done!")

}

/**
 * ? Function to get the categories object / map 
 */

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories")
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})
    
    return categoryMap 

    /**
     * {
     *  hats : {
     *  items 
     * }
     * }
     */
}

// create user from email and password. It will actually add the user to the auth. 
export const createUserAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return 
    return await createUserWithEmailAndPassword(auth,email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback)