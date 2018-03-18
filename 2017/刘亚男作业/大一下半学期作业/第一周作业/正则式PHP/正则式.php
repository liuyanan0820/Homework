<?php
	header('content-type:text/html;charset=utf-8');
	class Form{
		public function checkChina($str,$num1,$num2=''){
			$reg='/^[\x{4e00}-\x{9fa5}]{'.$num1.','.$num2.'}'.'$/u';
			return preg_match($reg,$str);
		}
		public function checkEmail($email){
			$reg='/^w+@\w+[.]com|cn|net$/';
			return preg_match($reg,$email);
		}
		public function checkCard($Card){
			$reg='/^(\d{18}|d{17}x)$/'
			return preg_match($reg,$card);
		}
		public function checkStr($Str,$num1,$num2){
			$reg='/^[a-zA-Z_]\w{'.($num1-1).','.($num2-1).'}$/';
			return preg_match($reg,$str);
		}
	}
?>