import {combineReducers} from 'redux'
import { createStore,applyMiddleware } from 'redux'

import DefaultReducer from "./reducers/reducer"


const store = createStore(combineReducers({
  comp : DefaultReducer,

}))
 



export default store;