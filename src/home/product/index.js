import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as style from '../style.js';
import * as action from './store/actionCreater.js';

function Product (props) {
	const [number1 ,setNumber1] = useState(0);
	const [number2 ,setNumber2] = useState(0);
	const [number3 ,setNumber3] = useState(0);
    var list1 = [];
    var list2 = [];
    var list3 = [];

	for(let i =1; i<=props.num.num1; i=i+1){
		list1.push(i);
	}

	for(let i =1; i<=props.num.num2; i=i+1){
		list2.push(i);
	}


    for(let i =1; i<=props.num.num3; i=i+1){
		list3.push(i);
	}


	useEffect(
		() => {
			props.dscChange();
			props.picURLChange();
			props.titleChange();
			props.priceChange();
			props.numChange();
		}
		,
		[]
    );
    if(props.pd1===true||props.pdd1===true&&props.pd2===false&&props.pd3===false){
    	return(
    		<style.ProductDetailWrapper>
    		    <style.ProductDetailItem>
    		        <img src = {props.picURL.picURL1} style = {{left:300}} className = 'pic'/>
    		        <h1 className = 'h1'>{props.title.title1}</h1>
    		        <p style = {{fontWeight:'bold'}}>{props.dsc.dsc1}</p>
    		        <h5 style = {{fontWeight:'bold'}}>售價{props.price.price1}</h5>
    		        <h5 style = {{fontWeight:'bold'}}>剩餘數量{props.num.num1}</h5>
    		        <select onChange = {(e) => {setNumber1(e.target.value)}}>
    		            {
    		            	list1.map((item, index) => {
    		            		return <option key = {index}>{item}</option>
    		            	})
    		            }
    		        </select>
    		        <button onClick = {() =>{props.numberChange1(number1, props.num.num2, props.num.num3)}}>確認</button>
    		    </style.ProductDetailItem>
    		</style.ProductDetailWrapper>
    		)
    }
    else if(props.pd2===true||props.pdd2===true&&props.pd1===false&&props.pd3===false){
    	return(
    		<style.ProductDetailWrapper>
    		    <style.ProductDetailItem>
    		        <img src = {props.picURL.picURL2} style = {{left:300}} className = 'pic'/>
    		        <h1 className = 'h1'>{props.title.title2}</h1>
    		        <p style = {{fontWeight:'bold'}}>{props.dsc.dsc2}</p>
    		        <h5 style = {{fontWeight:'bold'}}>售價{props.price.price2}</h5>
    		        <h5 style = {{fontWeight:'bold'}}>剩餘數量{props.num.num2}</h5>
    		        <select onChange = {(e) => {setNumber2(e.target.value)}}>
    		            {
    		            	list2.map((item, index) => {
    		            		return <option key = {index}>{item}</option>
    		            	})
    		            }
    		        </select>
    		        <button onClick = {() =>{props.numberChange2(props.num.num1, number2, props.num.num3)}}>確認</button>
    		    </style.ProductDetailItem>
    		</style.ProductDetailWrapper>
    		)
    }
    else if(props.pd3===true||props.pdd3===true&&props.pd2===false&&props.pd1===false){
    	return(
    		<style.ProductDetailWrapper>
    		    <style.ProductDetailItem>
    		        <img src = {props.picURL.picURL3} style = {{left:300}} className = 'pic'/>
    		        <h1 className = 'h1'>{props.title.title3}</h1>
    		        <p style = {{fontWeight:'bold'}}>{props.dsc.dsc3}</p>
    		        <h5 style = {{fontWeight:'bold'}}>售價{props.price.price3}</h5>
    		        <h5 style = {{fontWeight:'bold'}}>剩餘數量{props.num.num3}</h5>
    		        <select onChange = {(e) => {setNumber3(e.target.value)}}>
    		            {
    		            	list3.map((item, index) => {
    		            		return <option key = {index}>{item}</option>
    		            	})
    		            }
    		        </select>
    		        <button onClick = {() =>{props.numberChange3(props.num.num1, props.num.num2, number3)}}>確認</button>
    		    </style.ProductDetailItem>
    		</style.ProductDetailWrapper>
    		)
    }
    else{
    	return(
		<style.ProductWrapper>
		    <style.ProductItem>
		        <Link to="/#" onClick = {props.pic1}><img src ={props.picURL.picURL1} className = 'pic'/></Link>
		        <h1 className = 'h1'>{props.title.title1}</h1>
		        <h5 className = 'h5'>{props.dsc.dsc1}</h5>
		    </style.ProductItem>
		    <style.ProductItem>
		        <Link to="/#" onClick = {props.pic2}><img src ={props.picURL.picURL2} className = 'pic'/></Link>
		        <h1 className = 'h1'>{props.title.title2}</h1>
		        <h5 className = 'h5'>{props.dsc.dsc2}</h5>
		    </style.ProductItem>
		    <style.ProductItem>
		        <Link to="/#" onClick = {props.pic3}><img src ={props.picURL.picURL3} className = 'pic'/></Link>
		        <h1 className = 'h1'>{props.title.title3}</h1>
		        <h5 className = 'h5'>{props.dsc.dsc3}</h5>
		    </style.ProductItem>
		</style.ProductWrapper>
	    )
    }
}	

const mapState = (state) => {
	return{
		dsc:state.product.dsc,
		picURL:state.product.picURL,
		title:state.product.title,
		pd1:state.head.pd1,
		pd2:state.head.pd2,
		pd3:state.head.pd3,
		pdd1:state.product.pd1,
		pdd2:state.product.pd2,
		pdd3:state.product.pd3,
		price:state.product.price,
		num:state.product.num
	}
}

const mapDispatch = (dispatch) => {
	return{
		dscChange() {
			dispatch(action.changeDsc())
		}
		,
		picURLChange() {
			dispatch(action.changePicURL());
		}
		,
		titleChange() {
			dispatch(action.changeTitle());
		}
		,
		pic1() {
			dispatch(action.changePd1());
		}
		,
		pic2() {
			dispatch(action.changePd2());
		}
		,
		pic3() {
			dispatch(action.changePd3());
		}
		,
		priceChange() {
			dispatch(action.changePrice());
		}
		,
		numChange() {
			dispatch(action.changeNum());
		}
		,
		numberChange1(num, num2, num3) {
			dispatch(action.changeNumber1(num, num2, num3))
		}
		,
		numberChange2(num, num2, num3) {
			dispatch(action.changeNumber2(num, num2, num3))
		}
		,
		numberChange3(num, num2, num3) {
			dispatch(action.changeNumber3(num, num2, num3))
		}
	}
}

export default connect( mapState, mapDispatch )(Product);