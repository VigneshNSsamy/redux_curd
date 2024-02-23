
import { combineReducers } from 'redux';
import contactsReducer from './contactReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer
});

export default rootReducer;
