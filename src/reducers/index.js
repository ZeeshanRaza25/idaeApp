import { combineReducers, createStore } from 'redux';

import AuthenticationReducer from './AuthenticationReducer';

const RootReducers = combineReducers({
    auth: AuthenticationReducer,
});

const Store = createStore(RootReducers)
export default Store