import { combineReducers } from 'redux';
import SearchReducer from './search-reducer';
const rootReducer = combineReducers({  
  SearchReducer : SearchReducer
});
export default rootReducer;
