<?php
	$userName=$_POST["userName"];
	$userPasword=$_POST["userPasword"];
	$userConfirmPasword=$_POST["userConfirmPasword"];
	$userPhone=$_POST["userPhone"];
	$useremail=$_POST["useremail"];
	$db=new MySQLi("licalhost","root","","newaayatem");
	!mysqli_connect_error() or die("连接失败！")；
	$sql="insert into yonghu values('{$userName}','{$userPasword}','{$userConfirmPasword}','{$userPhone}','{$useremail}')";
	$result=$db->query($sql);
	if($result){
		header("location:denglu.html");
	}
	else{
		echo"很抱歉，注册失败！"；
	}
?>