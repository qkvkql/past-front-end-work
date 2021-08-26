<?php
date_default_timezone_set("Asia/Shanghai");
$hour = date('H'); //get current hour
//$areas = ['us', 'au', 'uk', 'ca', 'de', 'fr', 'nz', 'it', 'es', 'at', 'ch', 'dk', 'no', 'se', 'fi'];
//code: 01-area 01-series 01-group 01-keyword p-period
$tid = 'Jonas';
$tidConfPath = '../json/tidConf.json';
if(file_exists($tidConfPath)){
	$tidConfJson = file_get_contents($tidConfPath);
	$tidObj = json_decode($tidConfJson);
}
function setTid($defaultTid){
	global $hour;
	global $tid;
	global $tidObj;
	if(!isset($_GET['u'])){
		$tid = $defaultTid;
	}else{
		$u = $_GET['u'];
		if(isset($tidObj->$u)){
			if(!is_object($tidObj->$u)){
				$tid = $tidObj->$u;
			}else{
				$tid = $tidObj->$u->$hour;
			}
		}else{
			$tid = $u;
		}
	}	
}
?>