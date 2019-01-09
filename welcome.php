<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Welcome</title>
</head>
<body>
	<h2>Welcome <?php echo $_SESSION['user'] ?> </h2>
	<ul>
		<a href="logout.php">Logout</a>
	</ul>
</body>
</html>