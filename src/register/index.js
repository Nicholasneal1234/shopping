import React, { useState } from 'react';
import * as style from './style.js';
import { connect } from 'react-redux';
import * as action from './store/actionCreater';

function Register (props) {
    
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    return(
	    <style.LoginWrapper>
		    <style.LoginItem>
		        <style.Input placeholder ="請輸入帳號" onChange = {(e) => {setAccount(e.target.value)}} type = 'account'></style.Input>
		        <style.Input placeholder ="請輸入帳號" onChange = {(e) => {setPassword(e.target.value)}} type = 'password'></style.Input>
		        <button onClick = {() => {props.acAndPaChange(account, password)}} style={{width:200, margin:25, background:"#ec6149", borderRadius:5}}>註冊</button>
		    </style.LoginItem>
		</style.LoginWrapper>
	)
}

const mapDispatch = (dispatch) => {
	return{
		acAndPaChange (account, password) {
			dispatch(action.changeAcAndPa(account, password));
		}
	}
}

export default  connect(null,mapDispatch)(Register);
