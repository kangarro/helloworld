<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<script  type="text/javascript"  src="http://code.jquery.com/jquery-latest.js"></script>
		 <link href="home.css" rel="stylesheet" type="text/css">
	</head>
	<body>
		<div class="box">
			<?php
				include'connect_sql.php';
				$s="select * from board";
				$result=mysql_query($s);
				while($row=mysql_fetch_array($result)){
					echo"<div class='a'>";
					echo"<div id='word'>".$row['word']."</div>";
					echo"<span id='name'>".$row['name']."</span>";
					echo"<span id='date'>".$row['date']."</span>";
					echo"</div>";
				}
			?>
			<div class="block"></div>
		</div>
		<input type="button"  id="submit" value="发表" />
		
		<script type="text/javascript">
			
			
		</script>
	</body>
</html>
