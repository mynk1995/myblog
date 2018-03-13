import React from 'react';
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';
import './index.css';

class Login extends React.Component {
      constructor(){
        super();
        this.state = {
          username:'',
          password:'',
        }
      }

      reset = () => {
        this.props.toggle();
      }
      signUpUser = (value) => {
        console.log(this.state);
      }

      setUsername = (e) => {
        this.setState({
          username:e.target.value
        });
      }

      setPassword = (e) => {
        console.log(e.target.value);
        this.setState({
          password:e.target.value
        });
      }

  render(){

    return (
      <div className="FormSize backgroundColorForm">
      <Form onSubmit={this.signUpUser}>
      <center><h1>Login</h1></center>
    <Form.Field>
      <label>Username</label>
      <input onChange={this.setUsername} placeholder='Enter Username here ' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <Input onChange={this.setPassword} type='password' placeholder="Password here" />
    </Form.Field>
    <Button type='submit'>Login</Button>
    <span>Already have a account? <span onClick={this.props.toggle}><a>SignUp Here</a></span></span><br/> <span onClick={this.reset}> Reset</span>
  </Form>
      </div>
    );
  }
}
export default Login;
