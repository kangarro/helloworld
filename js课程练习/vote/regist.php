<?php
	include'connect_sql.php';                          
	$number=$_GET['number'];
	$name=$_GET['name'];
	$password=$_GET['password'];
	$query=mysql_query("select id from mumber where id=$number");
	$rows=mysql_num_rows($query);
	$qquery=mysql_query("select name from mumber where name='$name'");
	$row=mysql_num_rows($qquery);
	if($rows!=0){
		echo"exist";  //账号存在;
	}else{
		if($row!=0){
			echo"existname"; //昵称存在
		}else{
			$a="insert into mumber values($number,'$name','$password')";
			$result=mysql_query($a);
			echo"success";
		}
	}
?>