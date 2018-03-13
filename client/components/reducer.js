import { combineReducers } from 'redux';
import getAllPostsReducer from './ShowAllPosts/GetAllPostsReducer';
import loginReducer from './LoginSignUp/loginReducer';
import signUpReducer from './LoginSignUp/signUpReducer';
const rootReducer  = combineReducers({
  getAllPostsReducer,
  loginReducer,
  signUpReducer
});

export default rootReducer;
