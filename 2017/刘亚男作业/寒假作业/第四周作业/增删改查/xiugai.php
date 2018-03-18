<?php
    $id=$_POST["newsid"];
    $title=$_POST["title"];
    $Author=$_POST["Author"];
    $source=$_POST["source"];
    $content=$_POST["content"];
    $time=$_POST["time"];
    $db = new MySQLi("localhost","root","","newssystem");
    !mysqli_connect_error() or die("连接失败");
    $sql="update news set title='{$title}',Author='{$Author}',source='{$source}',content='{$content}',time='{$time}' where newsid='{$id}' ";
    $result=$db->query($sql);
    if($result){
        header("location:chakan.html");
    }
    else{
    	echo "修改失败";
    }
?>