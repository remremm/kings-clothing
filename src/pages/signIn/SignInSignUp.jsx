import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';
import './SignInSignUp.styles.scss';

const SignInSignUp = (props) => {
  return(
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUp;