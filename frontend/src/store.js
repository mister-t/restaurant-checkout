import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { categoryListReducer, activeCategoryReducer } from './reducers/categoryReducers';
import { itemListReducer, itemsByCategoryReducer } from './reducers/itemReducers';

const reducer = combineReducers({
  categoryList: categoryListReducer,
  activeCategory: activeCategoryReducer, //need to create this reducer; otherwise, combineReducer is going to throw an error even though the property might have been specified in 'initialState'
  itemList: itemListReducer,
  itemsByCategoryList: itemsByCategoryReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;