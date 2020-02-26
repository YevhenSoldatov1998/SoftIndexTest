import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { tableReducer } from "./tableReducer";

const rootReducers = combineReducers({
    table: tableReducer,
    form: formReducer
})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
// type State
export type AppState = ReturnType<typeof rootReducers>
