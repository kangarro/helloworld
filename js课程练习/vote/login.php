<?php
	include 'connect_sql.php';
	$number=$_GET['number'];
	$password=$_GET['password'];
	$s="select password from mumber where id=$number";
	$query=mysql_query($s);
	$row = mysql_num_rows($query);
	if($row!=0){
		$a="select password from mumber where password='$password' and id=$number ";
		$exe=mysql_query($a);
		$shu=mysql_num_rows($exe);
		if($shu==0){
			echo"wrong"; //密码错误
		}else{
			echo"success";
		}
	}else{
		echo"fail"; //用户不存在
	}
	
?>