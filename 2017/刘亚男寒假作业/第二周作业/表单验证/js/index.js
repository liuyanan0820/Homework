function checkForm(){
	var nametip=checkUserName();
	var passtip=checkPassword();
	var conpasstip=ConfirmPassword();
	var phonetip=checkPhone();
	return nametip && passtip && conpasstip && phonetip;
}
function checkUserName(){
	var username=document.getElementById('userName');
	var errname=document.getElementById('nameErr');
	var pattern=/^\w{3,}$/;
	if(username.value.length==0){
		errname.innerHTML="用户名不能为空"
		errname.className="error"
		return false;
	}
	if(!pattern.test(username.value)){
		errname.innerHTML="用户名不合规范"
		errname.className="error"
		return false;
	}
	else{
		errname.innerHTML="OK"
		errname.className="success";
		return true;
	}
}
function checkPassword(){
	var userpasswd=document.getElementById('userPassword');
	var errPasswd=document.getElementById('passwordErr');
	var pattern=/^\w{6,12}$/;
	if(!pattern.test(userpasswd.value)){
		errPasswd.innerHTML="密码不合规范"
		errPasswd.className="error"
		return false;
	}
	else{
		errPasswd.innerHTML="OK"
		errPasswd.className="success";
		return true;
	}
}
function checkPhone(){
	var userphone=document.getElementById('userPhone');
	var phoneErr=document.getElementById('phoneErr');
	var pattern=/^1[34578]\d{9}$/;
	if(!pattern.test(userphone.value)){
		phoneErr.innerHTML="手机号码不合规范"
		phoneErr.className="error"
		return false;
	}
	else{
		phoneErr.innerHTML="OK"
		phoneErr.className="success";
		return true;
	}
}
