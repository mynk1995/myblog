import values from '../../values.js';
import axios from 'axios';
export default  function loginReducer(state={status:values.LOGIN,payload:[]},action){
  switch(action.type){
    case values.LOGIN :
      return Object.assign({},state,{payload:action.payload});
    case values.LOGOUTUSER :
      return Object.assign({},state,{status:values.NOTLOGIN,payload:action.payload});
    default : return Object.assign({},state);
  }
}
