import * as type from './actionType.js';

const defaultState = {
	focused:false,
	pd1:false,
	pd2:false,
	pd3:false
}

export default(state = defaultState, action) => {
	if(action.type===type.FOCUSED_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.focused = action.focused;
		return newState;
	}
	if(action.type===type.ONBLUR_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.focused = action.focused;
		return newState;
	}
	if(action.type===type.PRODUCT_CHANGE){
		if(action.product==='直尺'){
			const newState = JSON.parse(JSON.stringify(state));
			newState.pd1=true;
			newState.pd2=false;
			newState.pd3=false;
			return newState;
		}
		if(action.product==='微積分'){
			const newState = JSON.parse(JSON.stringify(state));
			newState.pd2=true;
			newState.pd1=false;
			newState.pd3=false;
			return newState;
		}
		if(action.product==='眼鏡'){
			const newState = JSON.parse(JSON.stringify(state));
			newState.pd3=true;
			newState.pd2=false;
			newState.pd1=false;
			return newState;
		}
	}
	if(action.type===type.PD_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.pd1=false;
		newState.pd2=false;
		newState.pd3=false;
		return newState;
	}
	return state;
}