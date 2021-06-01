import * as type from './actionType.js';
import * as headType from '../../common/head/store/actionType.js';

const defaultState = {
	name:'',
	login:false
}

export default (state = defaultState, action) => {
	if(action.type===type.USERNEAME_SET){
		const newState = JSON.parse(JSON.stringify(state));
		newState.name = action.name;
		newState.login = true;
		return newState;
	}
	if(action.type===headType.SIGNOUT){
		const newState = JSON.parse(JSON.stringify(state));
		newState.login = false;
		return newState;
	}
	return state;
}

