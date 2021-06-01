import React,{ useState } from 'react';
import * as style from './style.js';
import * as action from './store/actionCreater.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Login (props) {
     
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    
    if(props.login){
    	return <Redirect to ='/'/>
    }
    else{
	return(
		    <style.LoginWrapper>
		        <style.LoginItem>
		            <style.Input placeholder ="請輸入帳號" onChange = {(e) => {setAccount(e.target.value)}} type = 'account'></style.Input>
		            <style.Input placeholder ="請輸入帳號" onChange = {(e) => {setPassword(e.target.value)}} type = 'password'></style.Input>
		            <button  style={{width:200, margin:25, background:"#ec6149", borderRadius:5}} onClick = {() => {props.sigh(account, password)}}>登陸</button>
		            <Link to = '/Register'><h5 style={{margin:25, color:'black'}}>註冊</h5></Link>
		        </style.LoginItem>
		    </style.LoginWrapper>
	    )
    }
}

const mapState = (state) => {
	return{
		login:state.login.login
	}
}

const mapDispatch = (dispatch) => {
	return {
		sigh (account, password) {
			dispatch(action.signIn(account, password));
		}
	}
}

export default connect(mapState, mapDispatch)(Login);