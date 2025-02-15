

import { createStore } from 'redux';
import combineReducers from '../Reducers/combineReducers'; // Fix typo
// Create store with DevTools support
const store = createStore(combineReducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
