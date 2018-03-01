<?php
	$db=new mysqli("localhost","root","","newssystem");
	!mysqli_connect_error() or die("连接错误");
	$sql="select * from news";
    $result=$db->query($sql);
	while($attr=$result->fetch_row()){
		echo "
		<tr>
		<td>{$attr[0]}</td>
		<td>{$attr[1]}</td>
		<td>{$attr[2]}</td>
		<td>{$attr[3]}</td>
	    <td>{$attr[5]}</td>
		<td><a onclick=\" return confirm('确定删除')\" href='shanchu.php?newsid={$attr[0]}'>删除</a></td>
		<td><a href="xiugai.html">修改</a></td>
		</tr> ";
	}
?>