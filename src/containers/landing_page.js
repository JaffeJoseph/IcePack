import React, { Component } from 'react';
import SignIn from '../components/landingPage/sign_in';
import SignUp from '../components/landingPage/sign_up';

class LandingPage extends Component {
  constructor() {
    super();
    this.onSignInClick = this.onSignInClick.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
    this.state = {
      signInIsHidden: true,
      signUpIsHidden: true,
    };
  }

  onSignInClick() {
    this.setState({
      signInIsHidden: !this.state.signInIsHidden,
      signUpIsHidden: true,
    });
  }

  onSignUpClick() {
    this.setState({
      signUpIsHidden: !this.state.signUpIsHidden,
      signInIsHidden: true,
    });
  }

  render() {
    return (
      <div className="container landing-page">
        <h1 className="col-xs-12 text-xs-center data-">Austin Digital Jobs</h1>
        <h2 className="text-xs-center">Ice-Breaker</h2>
        <button
            className="btn btn-primary"
            onClick={this.onSignInClick}
                >
                    Sign In
        </button>

        <button
            className="btn btn-primary"
            onClick={this.onSignUpClick}
                >
                    Sign Up
        </button>

        <div className="signIn-signUp">
          {!this.state.signInIsHidden && <SignIn />}
          {!this.state.signUpIsHidden && <SignUp />}
        </div>
      </div>
    );
  }
}

export default LandingPage;
