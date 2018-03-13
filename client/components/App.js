import React from 'react';
import {connect} from 'react-redux';
import ShowAllPosts from './ShowAllPosts/ShowAllPosts';
import TopMenu from './TopMenu/TopMenu';
import LoginSignUp from './LoginSignUp/LoginSignUp';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showLoginFormValue:0
    };
  }

  showForm = () => {
    this.setState({
      showLoginFormValue: !this.state.showLoginFormValue
    });
  }

  render(){


    return (
      <div className="bgColorGreen">
      <TopMenu toggleForm={this.showForm} />
      {this.state.showLoginFormValue  == 1 ? <LoginSignUp /> : null }
      <ShowAllPosts />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  loginReducer : state.loginReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
