import React from 'react';
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';
import './index.css';

class SignUp extends React.Component {
      constructor(){
        super();
        this.state = {
          username:'',
          password:'',
        }
      }

      reset = () => {

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
      <center><h1>Sign Up </h1></center>
    <Form.Field>
      <label>Username</label>
      <input onChange={this.setUsername} placeholder='Enter Username here ' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <Input onChange={this.setPassword} type='password' placeholder="Password here" />
    </Form.Field>
    <Button type='submit'>Submit</Button>
    <span>Already have a account? <a onClick={this.props.toggle}>Login Here</a></span><br/> <span onClick={this.reset}> Reset</span>
  </Form>
      </div>
    );
  }
}
export default SignUp;
