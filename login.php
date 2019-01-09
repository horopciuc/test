<?php
	session_start();

	if (isset($_SESSION['user'])) {
		header("Location:welcome.php");
	}

	if (isset($_GET['submit'])) {
		$user = $_GET['username'];
		$password = $_GET['password'];
		$_SESSION['user'] = $user;
		header("Location: welcome.php");
	}

?>


<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
<body>
	<h2>Log in</h2>
	<form action="" method="GET">
		Username:
		<input type="text" name="username">
		Password:
		<input type="password" name="password">
		<br>
		<input type="submit" name="submit" id="submit">
	</form>
</body>
</html>