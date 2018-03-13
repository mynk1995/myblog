import values from '../../values.js';
export default function logOutAction (){
  return (dispatch) => {

      dispatch({
        type: values.LOGOUTUSER,
        payload:[]
      })
  }
}
