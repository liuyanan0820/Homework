<?php
	$id=$_GET["newsid"];
	$db=new mysqli("localhost","root","","newssystem");
	!mysqli_connect_error() or die("连接失败");
	$sql="delete from news where newsid='{$id}'";
	$result=$db->query($sql);
	if ($result){
		header("location:chakan.html");
	}
	else{
		echo "删除失败";
	}
?>