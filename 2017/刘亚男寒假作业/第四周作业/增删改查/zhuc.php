<?php
	$user=$_POST["user"];
	$psd=$_POST["psd"];
	$db=new MySQLi("licalhost","root","","newaayatem");
	!mysqli_connect_error() or die("连接失败！")；
	$sql="insert into yonghu values('{$user}','{$psd}')";
	$result=$db->query($sql);
	if($result){
		header("location:dlyz.html");
	}
	else{
		echo"很抱歉，注册失败！"；
	}
?>