import React from 'react';
import {connect} from 'react-redux';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './index.css';

class CreatePost extends React.Component {
  constructor(){
    super();
    this.state = {
    };
  }

  render(){


    return (
      <div className="createPostForm">
      <center>Write a new article</center>
      <Form>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Title of Article' />
        </Form.Field>
        <Form.TextArea label='Start writing here ...' placeholder='Tell us more about you...' />
        <Form.TextArea label='Write a small summary here ...' placeholder='A bit summary...' />

        <Form.Field>
          <label>Pic Url</label>
          <input placeholder='pic url' />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <input placeholder='category here' />
        </Form.Field>
        <Form.Field>
          <label>Tags (seperated by comma)</label>
          <input placeholder='tags' />
        </Form.Field>
        <Form.Field>
          <label>Current Date time</label>
          <input readOnly placeholder={new Date()} />
        </Form.Field>
        <Form.Field>
          <label>Likes</label>
          <input readOnly placeholder='0' />
        </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>

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
)(CreatePost);
