import React from 'react'
import { connect } from 'react-redux'
// import { updateLoginForm } from "../actions/loginForm.js"
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'
// const Login = (props) => {

const Login = ({ loginFormData, updateLoginForm, login }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
        console.log('🚀 ~ file: Login.js ~ line 13 ~ Login ~ loginFormData', loginFormData);
        console.log('🚀 ~ file: Login.js ~ line 21 ~ Login ~ updatedFormInfo', updatedFormInfo);
    }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
      <input type="submit" value="Log In"/>
    </form>
  )
}
//! connect this component to the store. Ask for parts of the state from the store and add them to props
const mapStateToProps = state => {
  return {
      // username: state.loginFormData.username,
      // password: state.loginFormData.password
    loginFormData: state.loginForm
  }
}


export default connect(mapStateToProps, { updateLoginForm, login } )(Login)