<?php
	$user=$_POST["user"];
	$psd=$_POST["psd"];
	$db=new MySQLi("localhost","root","","newssystem");
	!mysqli_connect_error() or die("连接失败！")；
	$sql="select psd from yonghu where user='{$user}'";
	$result=$db->query($sql);
	$v=$result->fetch_row();
	if($psd==$v[0]){
		header("location:fabuxinwen.html");
	}
	else{
		echo"您输入的用户名或密码不正确，请重新输入！";
	}
?>