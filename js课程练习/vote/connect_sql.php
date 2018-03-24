<?php
	header('Content-type:text/html;charset=utf-8');
	$host="47.94.171.176";
	$user="lyy";
	$password="lyysb";
	$con=mysql_connect($host,$user,$password);
	if($con){
		mysql_select_db("lyydb");
		mysql_query("set names utf-8");
		
	}else{
		echo "connect fail";
	}

?>