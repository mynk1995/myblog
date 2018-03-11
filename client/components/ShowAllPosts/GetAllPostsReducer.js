import values from '../../values.js';
import axios from 'axios';
export default  function getAllPostsReducer(state={status:values.PENDING,payload:[{title:"pending"}]},action){
  console.log('Reducer Called - '+action.type);
  switch(action.type){
    case values.getNewPosts :
      return Object.assign({},state,{payload:action.payload});
    default : return Object.assign({},state);
  }
}
