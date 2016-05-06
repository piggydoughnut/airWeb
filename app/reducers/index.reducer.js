import { combineReducers } from 'redux'
import messages from './messages.reducer'
import user from './user.reducer'
import gallery from './gallery.reducer'
import { routerReducer } from 'react-router-redux'

const airMsgReducer = combineReducers({
    messages,
    user,
    gallery,
    routing: routerReducer
});

export default airMsgReducer;
