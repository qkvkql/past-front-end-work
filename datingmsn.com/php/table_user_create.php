<?php
	header("Content-Type:text/html; charset=utf-8");
	require "db_cub_select.php";
	$sql="CREATE TABLE user(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(32) BINARY UNIQUE NOT NULL,
	psw VARCHAR(32) BINARY NOT NULL,
	date DATE NOT NULL,
	time TIME NOT NULL
	);";
	mysqli_query($conn,$sql);
?>