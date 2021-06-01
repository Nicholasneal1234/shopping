import * as type from './actionType.js';

export const focusedChange = () => {
	return{
		type:type.FOCUSED_CHANGE,
		focused:true
	}
}

export const onBlurChange = () => {
	return{
		type:type.ONBLUR_CHANGE,
		focused:false
	}
}

export const productChange = (product) => {
	return{
		type:type.PRODUCT_CHANGE,
		product:product
	}
}

export const pdChange = () => {
	return{
		type:type.PD_CHANGE
	}
}

export const signOut = () => {
	return{
		type:type.SIGNOUT
	}
}
