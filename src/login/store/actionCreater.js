import fb,{ auth } from '../../firebase/index.js';
import * as type from './actionType.js';

const userName = (name) => {
	return{
		type:type.USERNEAME_SET,
		name:name
	}
}

export const signIn = (account, password) => {
	return (dispatch) => {
		auth.signInWithEmailAndPassword(account, password)
		.then(() => {
			var user = auth.currentUser;
			console.log(user.email);
			if(user){
				alert("登入成功");
				dispatch(userName(user.email));
			}
			else{
				alert('登入失敗');
			}
		})
	}
}