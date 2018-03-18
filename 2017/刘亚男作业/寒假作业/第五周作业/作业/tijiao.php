<?php
	$title = $_POST["title"];
    $Author = $_POST["Author"];
    $source = $_POST["source"];
    $content = $_POST["content"];
    $db = new MySQLi("localhost","root","","newssystem");
    !mysqli_connect_error() or die("添加失败！！");
    $sql = "insert into news(title,Author,source,content) values('{$title}','{$Author}','{$source}','{$content}')";
    $result = $db-> query($sql);
    if($result){
    	header("location:fabuxinwen.html");
    }
    else{
    	echo"很抱歉，添加失败！！";
    }
?>