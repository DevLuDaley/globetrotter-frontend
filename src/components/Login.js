import React from 'react'
import { connect } from 'react-redux'
// import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
// const Login = (props) => {

// const Login = ({username, password}) => {
const Login = ({props}) => {

    var handleChange = (e) => {
    
}

    var handleSubmit = (e) => {
        e.preventDefault();
    } 
    
    return (
    <form onSubmit={handleSubmit}>
        <input value={props.username} onChange={handleChange} type="text" name="username"/>
        <input value={props.password} onChange={handleChange} type="text" name="password"/>
        <input type="submit" value="Log In"/>
    </form>  );
}
//! connect this component to the store. Ask for parts of the state from the store and add them to props
const mapStateToProps = (state) => {
    return{
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}
const mapDispatchToProps = (dispatch) => {
    
}
 

export default connect(mapStateToProps (Login))