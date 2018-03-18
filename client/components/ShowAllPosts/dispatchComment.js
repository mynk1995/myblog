import values from '../../values.js';
import axios from 'axios';
export default function disptachComment (data){
  let request = axios.post('/api/addComment',{data:data});

  return (dispatch) => {
    request.then(response=>{
      dispatch({
        type: values.addComment,
        payload:response.data.result
      })
    })
  }
}
