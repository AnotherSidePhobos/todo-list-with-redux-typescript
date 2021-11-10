import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { listReducer } from './reducers/listReducer';
import notifyReducer  from './reducers/notifyReducer';

let rootReducer = combineReducers({
    list: listReducer,
    notify: notifyReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// this staitment for state is avaiable in devtools extention
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export type RootState = ReturnType<typeof rootReducer>;

export default store;