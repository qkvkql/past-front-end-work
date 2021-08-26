<?php
	header("Content-Type:text/html; charset=utf-8");
	
	//visit type
	$aliasOfType = 't';
	$typeArray = ['home', 'guest'];
	//tid
	$aliasOfTid = 'u';
	$defaultTid = 'jonas';

    //constants
	$officialSite = 'https://www.sugardaddymeet.com/';
	$formatHome = 'i/';
	$formatGuest = 'guest?tid=';
	$formatArray = [$formatHome, $formatGuest];
    //form value
	$prefix = ( isset($_GET[$aliasOfType]) && getIndexOfValueInArray($typeArray, $_GET[$aliasOfType])>-1 ) ? $formatArray[getIndexOfValueInArray($typeArray, $_GET[$aliasOfType])] : $formatHome;
	$tid = isset($_GET[$aliasOfTid]) ? $_GET[$aliasOfTid] : $defaultTid;
	//get the index of a specific element in an array
	function getIndexOfValueInArray($arr, $v){
		$index = -1;
		foreach($arr as $key => $value){
			if($value == $v){
				$index = $key;
			}
		}
		return $index;
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
	<link rel="stylesheet" href="css/index.css" type="text/css" />
	<script src="javascript/index.js" type="text/javascript"></script>
	<link href="/favicon.ico" type="image/x-icon" rel="shortcut icon" />
	<title>SHORTCUTS</title>
	<style type="text/css">
		a{
			display: block;
			width: 100%;
			height: 200px;
			text-align: center;
			line-height: 200px;
			font-size: 24px;
			font-weight: bold;
		}
	</style>
</head>
<body>
	<header>
		<h1>cub.name</h1>
	</header>
	<div class="content">
		<a href="<?php echo $officialSite.$prefix.$tid ?>" rel="no-follow">Click</a>
	</div>
	<footer>
		<p></p>
	</footer>
</body>
</html>