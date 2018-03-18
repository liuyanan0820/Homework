function checkForm(){ 
    var nametip = checkUserName(); 
    var passtip = checkPassword();  
    var conpasstip = ConfirmPassword(); 
    var phonetip = checkPhone(); 
    return nametip && passtip && conpasstip && phonetip; 
} 
function checkUserName(){ 
    var username = document.getElementById('userName'); 
    var errname = document.getElementById('nameErr'); 
    var pattern = /^\w{3,}$/;
    if(username.value.length == 0){ 
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
    var userpasswd = document.getElementById('userPasword'); 
    var errPasswd = document.getElementById('passwordErr'); 
    var pattern = /^\w{4,12}$/;
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
function ConfirmPassword(){ 
    var userpasswd = document.getElementById('userPasword'); 
    var userConPassword = document.getElementById('userConfirmPasword'); 
    var errConPasswd = document.getElementById('conPasswordErr'); 
    if((userpasswd.value)!=(userConPassword.value) || userConPassword.value.length == 0){ 
        errConPasswd.innerHTML="上下密码不一致" 
        errConPasswd.className="error" 
        return false; 
    } 
    else{ 
        errConPasswd.innerHTML="OK" 
        errConPasswd.className="success"; 
        return true; 
    }    
} 
function checkPhone(){ 
    var userphone = document.getElementById('userPhone'); 
    var phonrErr = document.getElementById('phoneErr'); 
    var pattern = /^1[34578]\d{9}$/;
    if(!pattern.test(userphone.value)){ 
        phonrErr.innerHTML="手机号码不合规范" 
        phonrErr.className="error" 
        return false; 
    } 
    else{ 
        phonrErr.innerHTML="OK" 
        phonrErr.className="success"; 
        return true; 
    } 
} 
function checkEmail(){
	var useremail=document.getElementById('useremail');
	var emailErr=document.getElementById('emailErr');
	var pattern=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
	if(!pattern.test(useremail.value)){
		emailErr.innerHTML="电子邮箱格式不合规范"
		emailErr.className="error"
		return false;
	}
	else{
		emailErr.innerHTML="OK"
		emailErr.className="success";
		return true;
	}
}
