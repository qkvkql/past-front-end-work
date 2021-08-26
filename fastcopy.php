<?php
header("Content-Type:text/html; charset=utf-8");//charset
date_default_timezone_set("Asia/Shanghai");//set timezone
define('TIMEZONE','UTC/GMT+08:00');//set const of timezone
require('php/fastcopyInit.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
	<link rel="stylesheet" href="css/fastcopy.css" type="text/css" />
	<link rel="stylesheet" href="css/fastcopyInit.css" type="text/css" />
	<script src="javascript/fastcopy.js" type="text/javascript"></script>
	<script src="javascript/fastcopyInit.js" type="text/javascript"></script>
	<script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js" type="text/javascript"></script>
	<link href="images/favicon_fastcopy.ico" type="image/x-icon" rel="shortcut icon" />
	<title><?php echo $t; ?></title>
</head>
<body>
	<header class="bg_h">
		<h1 class="h_clr"><?php echo $t; ?></h1>
	</header>
	<div class="content">
		<div class="content_c"></div>
	</div>
	<footer class="bg_f">
		<p><?php
			echo $datetime[0].' '.$datetime[1].' '.$weekdays[$datetime[2]];
		?></p>
	</footer>
</body>
</html>