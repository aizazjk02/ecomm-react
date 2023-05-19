// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
// Your web app's Firebase configuration
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import { useRef } from "react";
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

export const signInWithGoogleAuth = async () => {
    return await signInWithPopup(auth, googleAuthProvider)
}

// handle documents

export const createUserDocFromAuth = async (userAuth) => {
    const docRef = doc(db, "users", userAuth.uid)
    console.log("🚀 ~ file: firebase.utils.js:35 ~ createUserDocFromAuth ~ docRef:", docRef)
    const docSnapShot = await getDoc(docRef)
    console.log("🚀 ~ file: firebase.utils.js:38 ~ createUserDocFromAuth ~ docSnapShot:", docSnapShot.exists())

    if (!docSnapShot.exists()) {
        const { email, displayName } = userAuth
        const createdAt = new Date()
        try {
            await setDoc(docRef, {
                displayName, email, createdAt
            })

        } catch (error) {
            console.log("🚀 ~ file: firebase.utils.js:49 ~ createUserDocFromAuth ~ error:", error)

        }
    }
    else return docRef

}

export const createUserDocWithEmailAndPassword = async (formFields) => {
    console.log("user creation")
    const { email, displayName, password } = formFields
    const docRef = doc(db, "users", email)
    console.log("🚀 ~ file: firebase.utils.js:60 ~ createUserDocWithEmailAndPassword ~ docRef:", docRef)
    const docSnapShot = await getDoc(docRef)
    console.log("🚀 ~ file: firebase.utils.js:62 ~ createUserDocWithEmailAndPassword ~ docSnapShot:", docSnapShot.exists())
    if (!docSnapShot.exists()) {
        const createdAt = new Date()
        try {
            await setDoc(docRef, {
                displayName,
                email,
                password,
                createdAt
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    else return docRef
}