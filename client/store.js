import { createStore } from 'redux';
import rootReducer from './components/reducer';
let store = createStore(rootReducer);

export default store;
