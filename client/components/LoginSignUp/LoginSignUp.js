import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
class LoginSignUp extends React.Component {
  constructor(){
    super();
    this.state={
      showLoginForm:true
    };
  }

  showSignUpForm = () => {
    this.setState({
      showLoginForm: !this.state.showLoginForm
    });
  }
  render(){


    return (
      <div className="LoginSignUpBox">
      {this.state.showLoginForm  === true ?  <Login toggle={this.showSignUpForm} /> : <SignUp toggle={this.showSignUpForm} /> }
      </div>
    );
  }
}
export default LoginSignUp;
