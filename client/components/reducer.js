import { combineReducers } from 'redux';
import getAllPostsReducer from './ShowAllPosts/GetAllPostsReducer';

const rootReducer  = combineReducers({
  getAllPostsReducer
});

export default rootReducer;
