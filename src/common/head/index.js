import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as style from './style.js';
import { Link } from 'react-router-dom';
import * as action from './store/actionCreater.js';

function Head (props) { 
	const [ search, setSearch ] = useState('');
	return(
		<div>
		    <style.HeadWrapper>
		        <style.Headd>
		            <Link to = '/' onClick = {props.changePd}><style.HeadItem className = 'left'>首頁</style.HeadItem></Link>
		            <Link to = '/About'><style.HeadItem className = 'right'>關於</style.HeadItem></Link>
		            {props.login?<Link to = '/#' onClick = {props.signout}><style.HeadItem className = 'right'>登出</style.HeadItem></Link>:<Link to = '/Login'><style.HeadItem className = 'right'>登入</style.HeadItem></Link>}
		            {props.login?<style.HeadItem className = 'right-s'>歡迎{props.name}</style.HeadItem>:<style.HeadItem className = 'right-s'>未登入</style.HeadItem>}
		            <style.SearchWrapper>
		                <style.HeadSearch onFocus = {props.changeFocuse} className = {props.focused?'focused':''} onBlur = {props.changeBlur} onChange = {(e) => {setSearch(e.target.value)}}></style.HeadSearch>
		                <style.Button onClick = {() => {props.changeProduct(search)}}>確認</style.Button>
		            </style.SearchWrapper>
		        </style.Headd>
		    </style.HeadWrapper>
		</div>
	)
}

const mapState = (state) => {
	return{
		focused:state.head.focused,
		login:state.login.login,
		name:state.login.name
	}
}

const mapDispatch = (dispatch) => {
	return{
		changeFocuse(){
			dispatch(action.focusedChange());
		}
		,
		changeBlur(){
			dispatch(action.onBlurChange());
		}
		,
		changeProduct(product){
			dispatch(action.productChange(product));
		}
		,
        changePd(){
        	dispatch(action.pdChange());
        }
        ,
        signout(){
        	dispatch(action.signOut());
        }
	}
}

export default connect(mapState,mapDispatch)(Head);