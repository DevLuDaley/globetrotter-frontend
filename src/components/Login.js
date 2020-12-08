import React from 'react'
import { connect } from 'react-redux'
// import { updateLoginForm } from "../actions/loginForm.js"
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser.js'
// const Login = (props) => {

const Login = ({username, password, updateLoginForm}) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updateFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(u)
    }
// const Login = ({props}) => {

    // var handleChange = (e) => {
    
// }

    var handleSubmit = (e) => {
        e.preventDefault();
    } 
    
    return (
    <form onSubmit={handleSubmit}>
        <input placeholder="username" value={loginForm.username} onChange={handleInputChange} type="text" name="username"/>
        <input placeholder="password" value={loginForm.password} onChange={handleInputChange} type="text" name="password"/>
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
// const mapDispatchToProps = (dispatch) => {
    
// }
 

// export default connect(null (Login))
export default connect(mapStateToProps, { updateLoginForm } )(Login)