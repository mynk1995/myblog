import values from '../../values.js';
import axios from 'axios';
export default  function signUpReducer(state={status:values.NOTLOGIN,payload:[]},action){
  switch(action.type){
    case values.SIGNUP :
      return Object.assign({},state,{payload:action.payload});
    default : return Object.assign({},state);
  }
}
