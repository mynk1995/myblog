import React from 'react';
import {connect} from 'react-redux';

class ShowAllPosts extends React.Component {

  getData = () => {
    let obj =this.props.addPost();
    for(var x in obj){
      console.log(obj[x]);
    }
  }

  displayData = () => {
    return this.props.allPostsData.payload.map((value,index)=>{
      return <li key={index}>{value.title}</li>
    });
  }

  render(){
    console.log(this.props.allPostsData);

    return (
      <div >
      All Posts
      {this.getData()}
      {this.displayData()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allPostsData : state.getAllPostsReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost : () => dispatch({
      type : 'DESTROY_TODO',
      payload:[{title:'name'}]
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAllPosts);
