export default function getAllPostsReducer(state={payload:[{title:"rahu rana javascript"}]},action){
  console.log('Reducer Called - '+action.type);
  return state;
}
