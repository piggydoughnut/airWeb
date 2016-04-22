import { combineReducers } from 'redux'
import messages from './messages.reducer'
import user from './user.reducer'
import { routerReducer } from 'react-router-redux'

const airMsgApp = combineReducers({
    messages,
    user,
    routing: routerReducer
});

export default airMsgApp;
