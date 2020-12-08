import React from 'react'
import { connect } from 'react-redux'
// import { updateLoginForm } from "../actions/loginForm.js"
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser.js'
// const Login = (props) => {

const Login = ({loginFormData, updateLoginForm, login}) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updateFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updateFormInfo)
    }
// const Login = ({props}) => {

    // var handleChange = (e) => {
    
// }

    const handleSubmit = (e) => {
        e.preventDefault();
    } 
    
    return (
    <form onSubmit={handleSubmit}>
        <input placeholder="username" value={loginFormData.username} onChange={handleInputChange} type="text" name="username"/>
        <input placeholder="password" value={loginFormData.password} onChange={handleInputChange} type="text" name="password"/>
        <input type="submit" value="Log In"/>
    </form>  );
}
//! connect this component to the store. Ask for parts of the state from the store and add them to props
const mapStateToProps = (state) => {
    return{
        username: state.loginFormData.username,
        password: state.loginFormData.password
    }
}
// const mapDispatchToProps = (dispatch) => {
    
// }
 

// export default connect(null (Login))
export default connect(mapStateToProps, { updateLoginForm } )(Login)