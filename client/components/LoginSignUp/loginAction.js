import values from '../../values.js';
import axios from 'axios';
export default function loginAction (data){
  let request = axios.get('/api/posts');

  return (dispatch) => {
    request.then(response=>{
      dispatch({
        type: values.getNewPosts,
        payload:response.data.result
      })
    })
  }
}
