function validate(){

	var username=document.getElementById('username').value
	var email=document.getElementById('email').value
	var password=document.getElementById('password').value
	var cpassword=document.getElementById('cpassword').value

	checkUsername(username)
	checkEmail(email)
	checkPassword(password)
	checkPasswordsMatch(password,cpassword)
}
function checkUsername(username){
	if(username.length>7){
		document.getElementById('username').classList.add('success')
		//document.getElementById('username').classList.add('success') after changing username also the green color is present so we use replace
		document.getElementById('username').classList.replace('error','success')
		document.getElementById('username_error').innerText=''
	}
	else{
		document.getElementById('username').classList.add('error')
		document.getElementById('username_error').innerText='username must be 8 letters long'
	}
}
function checkEmail(email){
	if(email.includes('@gmail.com')){
		document.getElementById('email').classList.add('success')
		//document.getElementById('username').classList.add('success') after changing username also the green color is present so we use replace
		document.getElementById('email').classList.replace('error','success')
		document.getElementById('email_error').innerText=''
	}
	else{
		document.getElementById('email').classList.add('error')
		document.getElementById('email_error').innerText='enter valid emailid'
	}

}
function checkPassword(password){
	if(password.length>7){
		document.getElementById('password').classList.add('success')
		//document.getElementById('username').classList.add('success') after changing username also the green color is present so we use replace
		document.getElementById('password').classList.replace('error','success')
		document.getElementById('password_error').innerText=''
	}
	else{
		document.getElementById('password').classList.add('error')
		document.getElementById('password_error').innerText='password must be 8 letters long'
	}


}
function checkPasswordsMatch(password,cpassword){
	if(password==cpassword&&password!=''){
		document.getElementById('cpassword').classList.add('success')
		//document.getElementById('username').classList.add('success') after changing username also the green color is present so we use replace
		document.getElementById('cpassword').classList.replace('error','success')
		document.getElementById('cpassword_error').innerText=''
	}
	else{
		document.getElementById('cpassword').classList.add('error')
		document.getElementById('cpassword_error').innerText='passwords doesnot matches'
	}

}
