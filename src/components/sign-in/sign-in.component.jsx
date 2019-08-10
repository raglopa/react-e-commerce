import React from "react"

import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { signInWithGoogle, auth } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = async e => {
    e.preventDefault()

    this.setState({ email: "", password: "" })

    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
