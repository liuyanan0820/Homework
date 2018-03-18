<?php
	header("Content-Type:text/html;charset=utf-8");
  if(isset($_REQUEST['authcode'])){
    session_start();
    if(strtolower($_REQUEST['authcode'])== $_SESSION['authcode']){
      echo "<script language=\"javascript\">";
      echo "document.location=\"./form.php\"";
      echo "</script>";
    }
    else{
      echo "<script language=\"javascript\">";
      echo "alert('输入错误!');";
      echo "document.location=\"./form.php\"";
      echo "</script>";
    }
    exit();
  }
?>