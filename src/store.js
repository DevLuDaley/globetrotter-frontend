import { createStore, applyMiddleware, compose , combineReducers} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducer'
import currentUser from './reducers/currentUserReducer'
import loginForm from './reducers/loginFormReducer'



const reducer = combineReducers({users: usersReducer,
    currentUser,
    loginForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//! redux store
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store