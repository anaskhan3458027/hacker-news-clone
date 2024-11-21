import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer
});

const store = createStore(rootReducer);

export default store;