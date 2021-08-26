<?php
header("Content-Type:text/html; charset=utf-8");//charset
date_default_timezone_set("Asia/Shanghai");//set timezone
define('TIMEZONE','UTC/GMT+08:00');//set const of timezone
//get php obj from .json
$pathAdRef = "adref.json";//get json path
if(file_exists($pathAdRef)){
	$jsonAdRef = file_get_contents($pathAdRef);//get content
	$objAdRef = json_decode($jsonAdRef);//convert json string to php obj
}
$c = "";
if(isset($_GET['c'])){
	$c = $_GET['c'];
	var_dump($objAdRef->$c);
}else{
	var_dump($objAdRef);
}