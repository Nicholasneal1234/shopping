import React from 'react';

function About () {
	return(
		<div>
		    <h1>除了稍微介紹我這篇作品以外同時也附上我最近以及未來的目標</h1>
		    <h2>使用了react以及firebase來完成此作品:</h2>
		    <h3>***登入以及註冊的資訊是使用fireauth來完成的,其他資訊都放在firestore以及redux裡，使用react-redux裡的Provider以及connect來獲取這些資料並且渲染到畫面上***</h3>
		    <h2>最近的目標:</h2>
            <h3>***最近會去加強css的部分，因為接觸網頁開發的時間只有半年左右，所以我幾乎沒怎麼去學習css。同時再去把js弄得更清楚以及開始學習webpack***</h3>
            <h2>未來的目標:</h2>
            <h3>***之後如果有空閒的時候我想學習SQL以及PHP，除此之外我也不排斥學習其他任何東西，不管是前端、後端、網頁、app、lineBOT等都可以***</h3>
		</div>
		)
}

export default About;