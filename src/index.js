import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose , combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import usersReducer from './reducers/users'
// import store from './store.js'
// import { BrowserRouter } from 'react-router-dom'

// const store = createStore(
  // reducer, )
// const users = () => []
const reducer = combineReducers({users: usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//! redux store
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))



// ! ReactDOM.render(<Provider store={ store }><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
