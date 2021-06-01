import fb from '../../../firebase/index.js';
import * as type from './actionType.js';

const dsc = (dsc) => {
	return{
		type:type.DSC_CHANGE,
		dsc:dsc
	}
}

const picURL = (picURL) => {
	return{
		type:type.PICURL_CHANGE,
		picURL:picURL
	}
}

const title = (title) => {
	return{
		type:type.TITLE_CHANGE,
		title:title
	}
}

export const changeDsc = () => {
	const dscc = fb.firestore().collection('shopping').doc('commodity').collection('dsc').doc('dsc');
	return  (dispatch) => {
			    dscc.get()
			    .then((res) => {
				    dispatch(dsc(res.data()));
			    })
		    }
}

export const changePicURL = () => {
	const picURLL = fb.firestore().collection('shopping').doc('commodity').collection('dsc').doc('picURL');
	return (dispatch) => {
		picURLL.get()
		.then((res) => {
			dispatch(picURL(res.data()));
		})
	}
}

export const changeTitle = () => {
	const titlee = fb.firestore().collection('shopping').doc('commodity').collection('dsc').doc('title');
	return (dispatch) => {
		titlee.get()
		.then((res) => {
			dispatch(title(res.data()));
		})
	}
}

export const changePd1 = () => {
	return{
		type:type.CHANGE_PD1,
		pd1:true
	}
}

export const changePd2 = () => {
	return{
		type:type.CHANGE_PD2,
		pd2:true
	}
}

export const changePd3 = () => {
	return{
		type:type.CHANGE_PD3,
		pd3:true
	}
}

export const price = (price) => {
	return{
		type:type.PRICE_CHANGE,
		price:price
	}
}

export const changePrice = () => {
	const pricee = fb.firestore().collection('shopping').doc('commodity').collection('dsc').doc('price');
	return (dispatch) => {
		pricee.get()
		.then((res) => {
			dispatch(price(res.data()));
		})
	}
}

const num = (num) => {
	return{
	    type:type.NUM_CHANGE,
	    num:num
    }
}

export const changeNum = () => {
	const numm = fb.firestore().collection('shopping').doc('commodity').collection('dsc').doc('num');
	return (dispatch) => {
		numm.get()
		.then((res) => {
			dispatch(num(res.data()));
		})
	}
}

const number1 = (num) => {
	return{
	    type:type.NUMBER1_CHANGE,
	    num1:num
    }
}

export const changeNumber1 = (num, Num2, Num3) => {
	const numm = fb.firestore().collection('shopping').doc('commodity').collection('dsc').doc('num');
	return(dispatch) => {
		numm.get()
		.then((res) => {
			const data = res.data().num1 - num;
			if(data<0){
				alert('數量不夠');
			}
			else{
			    dispatch(number1(data));
			    numm.set({num1:data, num2:Num2, num3:Num3});
		    }
		})
	}
}

const number2 = (num) => {
	return{
	    type:type.NUMBER2_CHANGE,
	    num2:num
    }
}

export const changeNumber2 = (num, Num2, Num3) => {
	const numm = fb.firestore().collection('shopping').doc('commodity').collection('dsc').doc('num');
	return(dispatch) => {
		numm.get()
		.then((res) => {
			const data = res.data().num2 - Num2;
		    dispatch(number2(data));
			numm.set({num2:data, num1:num, num3:Num3});
		})
	}
}

const number3 = (num) => {
	return{
	    type:type.NUMBER3_CHANGE,
	    num3:num
    }
}

export const changeNumber3 = (num, Num2, Num3) => {
	const numm = fb.firestore().collection('shopping').doc('commodity').collection('dsc').doc('num');
	return(dispatch) => {
		numm.get()
		.then((res) => {
			const data = res.data().num3 - Num3;
			dispatch(number3(data));
			numm.set({num1:num, num2:Num2, num3:data});
		})
	}
}