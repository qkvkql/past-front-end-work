<?php
	require "db_conf.php";
	$conn=mysqli_connect(DATABASE_HOST,DATABASE_USERNAME,DATABASE_PASSWORD);
	$sql="CREATE DATABASE cub;";
	mysqli_query($conn,$sql);
?>