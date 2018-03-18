<?php
	$title=$_POST["title"];
	$Authhor=$_POST["Author"];
	$source=$_POST["source"];
	$content=$POST["content"];
	$db=new MySQli("localhost","root","","newssystem");
	!mysqli_connect_error() or die("添加失败！")；
	$sql="insert into news(title,Author,source,content) values('{$title}','{$Authhor}','{$source}','{$content}')";
	$result=$db->query($sql);
	if($result){
		header("location:fabuxinwen.html");
	}
	else{
		echo"很抱歉，添加失败！";
	}
?>