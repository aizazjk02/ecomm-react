import { compose, createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import { rootReducer } from "./root-reducer"


//root - reducer

const middleWares = [logger]

const enhancers = compose(applyMiddleware(...middleWares))
// create store 
export const store = createStore(rootReducer, undefined, enhancers)