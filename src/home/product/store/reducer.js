import * as type from './actionType.js';
import * as headType from '../../../common/head/store/actionType.js';

const defaultState = {
	dsc:{},
	num:{},
	picURL:{},
	price:{},
	title:{},
	pd1:false,
	pd2:false,
	pd3:false
}

export default (state = defaultState, action) => {
	if(action.type===type.DSC_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.dsc = action.dsc;
		return newState;
	}
	if(action.type===type.PICURL_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.picURL = action.picURL;
		return newState;
	}
	if(action.type===type.TITLE_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.title = action.title;
		return newState;
	}
	if(action.type===type.CHANGE_PD1){
		const newState = JSON.parse(JSON.stringify(state));
		newState.pd1 = action.pd1;
		newState.pd2 = false;
		newState.pd3 = false;
		return newState;
	}
	if(action.type===type.CHANGE_PD2){
		const newState = JSON.parse(JSON.stringify(state));
		newState.pd2 = action.pd2;
		newState.pd1 = false;
		newState.pd3 = false;
		return newState;
	}
	if(action.type===type.CHANGE_PD3){
		const newState = JSON.parse(JSON.stringify(state));
		newState.pd3 = action.pd3;
		newState.pd2 = false;
		newState.pd1 = false;
		return newState;
	}
	if(action.type===headType.PD_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.pd1 = false;
		newState.pd2 = false;
		newState.pd3 = false;
		return newState;
	}
	if(action.type===type.PRICE_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.price = action.price;
		return newState;
	}
	if(action.type===type.NUM_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.num = action.num;
		return newState;
	}
	if(action.type===type.NUMBER1_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.num.num1 = action.num1;
		return newState;
	}
	if(action.type===type.NUMBER2_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.num.num2 = action.num2;
		return newState;
	}
	if(action.type===type.NUMBER3_CHANGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.num.num3 = action.num3;
		return newState;
	}
	return state;
}