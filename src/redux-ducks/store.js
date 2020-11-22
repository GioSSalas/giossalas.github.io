import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import langReducer from './langDucks'

const rootReducer=combineReducers({
    lang:langReducer,
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default function generateStore(){
    const store=createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))
    return store
}