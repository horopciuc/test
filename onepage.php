<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<?php
		session_start();
		if (isset($_POST['submit'])) {
			if ($_POST['username'] == 'admin' && $_POST['password'] == 'admin') {
				$user = $_POST['username'];
				$password = $_POST['password'];
				echo "Welcome " . $user;
				include './lout.php';
			}
			else {
				include './form.php';
				echo "Try again";
			}
		}
		else {
			include './form.php';
		}
	?>

</body>
</html>