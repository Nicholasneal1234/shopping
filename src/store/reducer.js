import { combineReducers } from 'redux';
import * as headReducer from '../common/head/store/index.js';
import * as productReducer from '../home/product/store/index.js';
import * as loginReducer from '../login/store/index.js';

export default combineReducers({
	head:headReducer.reducer,
	product:productReducer.reducer,
	login:loginReducer.reducer
});