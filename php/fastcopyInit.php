<?php
$for = isset($_GET['for']) ? $_GET['for'] : "fastcopy";
//get php obj from .json
$pathPreference = "json/".$for.".json";//get json path
if(file_exists($pathPreference)){
	$jsonPreference = file_get_contents($pathPreference);//get content
	$objPreference = json_decode($jsonPreference);//convert json string to php obj
}
$public = getObjArr("publicBtnName");//get public btn name array
$classed = getObjArr("classedBtnName");//get classed btn name array
//set text of title
$t = setU("t", "title", "FAST COPY");//set title
//set color
$bgu = prefClrIni("bgu", "bgUnclicked");
$bgc = prefClrIni("bgc", "bgClicked");
$bgh = prefClrIni("bgh", "bgHeader");
$bgf = prefClrIni("bgf", "bgFooter");
$bgp = prefClrIni("bgp", "bgBtnPublic");
$bga = prefClrIni("bga", "bgBtnClass1");
$bgb = prefClrIni("bgb", "bgBtnClass2");
$hcl = prefClrIni("hcl", "textColorOfHeader");
$bcl = prefClrIni("bcl", "textColorOfBtn");
function prefClrIni($strU, $keyJ){ //initialization for color
	global $objPreference; //declare and get variable from out of function
	$temp = "";
	if(isset($_GET[$strU])){
		$temp = "#".$_GET[$strU];
	}else if(isset($objPreference->$keyJ)){
		$temp = $objPreference->$keyJ;
	}else{
		$temp = "";
	}
	return $temp;
}
function getObjArr($key){ //get object value from json
	global $objPreference;
	if(isset($objPreference->$key)){
		return $objPreference->$key;
	}else{
		return null;
	}
}
function setU($strU, $key, $text){ //set url parameter, obj value of title
	global $objPreference;
	if(isset($_GET[$strU])){
		return $_GET[$strU];
	}else if(isset($objPreference->$key)){
		return $objPreference->$key;
	}else{
		return $text;
	}
}
//css content to write in css file
$postCssStr =
".bg_h{background:".$bgh.";}
.bg_f{background:".$bgf.";}
.bg_p{background:".$bgp.";}
.bg_a{background:".$bga.";}
.bg_b{background:".$bgb.";}
.unclicked{background:".$bgu.";}
.clicked{background:".$bgc.";}
.h_clr{color:".$hcl.";}
.btn_clr{color:".$bcl.";}";
file_put_contents("css/fastcopyInit.css", $postCssStr); //wirte content to css/post.css

//get contents from .txt
$postTxtPath = "text/".$for.".txt"; //get .txt path
$postTxtArr = [];//php array
$c = 0;
if(file_exists($postTxtPath)){
	$filePostTxt = fopen($postTxtPath, 'r');
	while(!feof($filePostTxt)){
		$patt = "/(?<!:)\/\/(?!\/).*/";
		$postTxtArr[$c] = trim(preg_replace($patt, "", fgets($filePostTxt)));
		if($postTxtArr[$c]==""){
			array_pop($postTxtArr);
			continue;
		}
		$c += 1;
	}
	fclose($filePostTxt);
}
$postTxtArrJson = json_encode($postTxtArr);//php post text array to json
$publicJson = json_encode($public);//php public btn name array to json
$classedJson = json_encode($classed);//php classed btn name array to json
//js content to write in js file
$postJsStr = 
"let public = [];
let classed = [];
let postTxtArr = [];
public = ".$publicJson.";
classed = ".$classedJson.";
postTxtArr = ".$postTxtArrJson.";";
file_put_contents("javascript/fastcopyInit.js", $postJsStr); //write content to javascript/post.js
//set date time
date_default_timezone_set("Asia/Shanghai"); //default timezone
$datetime = explode(' ', date('Y-m-d H:i:s w')); //get array of datetime
$weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //weekdays array
?>