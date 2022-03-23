import { createStore, applyMiddleware,  combineReducers } from "redux"
import notes_reducer from'./reducers/notes.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ notes_reducer })
const middleware = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))