import { legacy_createStore as createStore , combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { categoryListReducer } from './reducers/categoryReducers';
import { itemListReducer } from './reducers/itemReducers';

const reducer = combineReducers({
  categoryList: categoryListReducer,
  itemList: itemListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;