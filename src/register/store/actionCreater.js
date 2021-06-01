import fb,{ auth } from '../../firebase/index.js';



export const changeAcAndPa = (account, password) => {
	return (dispatch) => {
		auth.createUserWithEmailAndPassword(account, password)
		.then(() => {
			alert("sucess");
		})
		.catch(() => {
			alert('帳號格式錯誤');
		})
	}
}