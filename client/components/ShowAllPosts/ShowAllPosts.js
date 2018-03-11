import React from 'react';
import {connect} from 'react-redux';
import {Card, Icon, Image, Comment  } from 'semantic-ui-react';
import getNewPostsAction from './action';
import './index.css';
class ShowAllPosts extends React.Component {
  constructor(){
    super();
    this.state = {
      comments:[]
    };
  }

  showComments = (comments) => {
    let picUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpU2LYHH7U9wUw8zPftu73UaVs66SgFWQMlfZpmANJBmh2zjIX`;

    return comments.map((comment,index)=>{
      return <Comment>
              <Comment.Avatar src={picUrl} />
                <Comment.Content>
                  <Comment.Author as='a'>{comment.userName}</Comment.Author>
                  <Comment.Metadata>
                    <div>2 Days Ago</div>
                  </Comment.Metadata>
                  <Comment.Text>{comment.comment}</Comment.Text>
                  <Comment.Actions>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
    });
  }

  showCommentsOfArticle = (id)=> {
      const index = this.state.comments.findIndex(value=> value == id);
      if (index >=0){
        let arrayOfComments = this.state.comments;
        arrayOfComments.splice(index,1);
        this.setState({comments:arrayOfComments});
      } else {
        let arrayOfComments = this.state.comments;
        arrayOfComments.push(id);
        this.setState({comments:arrayOfComments});
      }
  }

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
          <a onClick={ () => {this.showCommentsOfArticle(article['_id'])} }>
            <Icon name='comment' />
            {commentsSize === undefined ? 0 : commentsSize } Comments
          </a>
            <Comment.Group>
            {this.state.comments.findIndex( value => value == article['_id']) >= 0 ? this.showComments(article.comments)  : null }
            </Comment.Group>
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
      <div>
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
