<?php
	class Kids{
		public function printItem($string){
			echo 'Kids:'.$string.PHP_EOL;
		}
		public function printPHP(){
			echo 'kid is good.'.PHP_EOL;
		}
	}
	class child extends Kids{
		public function printItem($string){
			echo 'Child:'.$string.PHP_EOL;
		}
	}
	$Kids=new Kids();
	$child=new child();
	$Kids->printItem('lovable');
	$Kids->printPHP();
	$child->printItem('lovable');
	$child->printPHP();
?>