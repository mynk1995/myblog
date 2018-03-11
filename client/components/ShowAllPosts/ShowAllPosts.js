import React from 'react';
import {connect} from 'react-redux';
import {Card, Icon, Image  } from 'semantic-ui-react';
import getNewPostsAction from './action';
import './index.css';
class ShowAllPosts extends React.Component {

  articleCard = (article) => {
    let commentsSize =0;
    if(article.comments) {
      commentsSize = article.comments;
      commentsSize = commentsSize.length
    }
      return  <Card className="article">

        <Card.Content>
        <Card.Header>
          {article.title}
        </Card.Header>
          <Card.Meta>
            <Image floated="left" size="mini" src={article.authorPic} />
            {article.authorName}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
        <Card.Description>
          {article.body}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='like' />
            {article.likes} Likes
          <a>
            <Icon name='comment' />
            {commentsSize === undefined ? 0 : commentsSize } Comments
          </a>
        </Card.Content>
      </Card>
    }

  displayData = () => {
    return this.props.allPostsData.payload.map((value,index)=>{
      return this.articleCard(value);
    });
  }
  fetchNew = (event)=>{
    this.props.getNewPosts([{title:'dispatch working'}]);
  }
  render(){
    console.log('rendering');
    return (
      <div >
      All Posts
      <button onClick={this.fetchNew.bind(this)}>Fetch New Posts</button>
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
    getNewPosts : (payload) => dispatch(getNewPostsAction(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAllPosts);
