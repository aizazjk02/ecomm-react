import { compose, createStore, applyMiddleware } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { rootReducer } from "./root-reducer"
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
//root - reducer
const persistConfig = {
    key: "root", 
    storage,
    blacklist:["user"]
}
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(Boolean)
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__) || compose
// const enhancers = composeEnhancer(applyMiddleware(...middleWares))
// create store 
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck : false}).concat(middleWares)
})

export const persistor = persistStore(store)