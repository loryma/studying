import { combineReducers } from 'redux'
import reducer from './reducer';

const rootReducer = combineReducers({chatId: reducer});
export default rootReducer;