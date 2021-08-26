<?php
header("Content-Type:text/html; charset=utf-8");//charset
date_default_timezone_set("Asia/Shanghai");//set timezone

$path = "text/city.txt"; //get file path
function getArr($path, $rowLen){
	if(file_exists($path)){
		$file = file_get_contents($path);
		$patt = "/[\r\n]+/";
		$county = preg_split($patt, $file);
		$countyLen = count($county);
		$newArr = [];
		$c = 0;
		for($i=0; $i<$countyLen; $i++){
			$patt = "/\t/";
			$tempArr = preg_split($patt, $county[$i]);
			for($j=0; $j<$rowLen; $j++){
				$newArr[$i][$j] = $tempArr[$j];
			}
		}
		return $newArr;
	}else{
		return [];
	}
}
$cityArr = getArr($path, 10);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
	<link rel="stylesheet" href="css/city.css" type="text/css" />
	<script src="http://www.cub.name/allsites/jquery.js" type="text/javascript"></script>
<?php
	echo "	<script>
	let cityArr = ".json_encode($cityArr).";
	</script>
";
?>
	<script src="javascript/city.js" type="text/javascript"></script>
	<link href="images/favicon_city.ico" type="image/x-icon" rel="shortcut icon" />
	<title>data by city</title>
</head>
<body>
	<div class="relative">
		<div class="welcome">唐代城市人口(按郡)<br/><span>[天宝年间](公元742-756年)</span></div>
		<div class="title">唐代郡人口<span>(公元742-756年)</span></div>
		<div id="serial"></div>
		<div class="sort">郡口数↓</div>
		<div class="location">位置(今)：<span id="location"></span></div>
		<div id="detail">
			<table cellpadding="10" cellspacing="0" border="1" >
				<tr>
					<th colspan="2" class="th_title">详情</th>
				</tr>
				<tr>
					<td class="td_option tdTitleLen">口数：</td><td id="person"></td>
				</tr>
				<tr>
					<td class="td_option tdTitleLen">户数：</td><td id="family"></td>
				</tr>
				<tr>
					<td class="td_option tdTitleLen">户均口数：</td><td id="avgf"></td>
				</tr>
				<tr>
					<td class="td_option tdTitleLen">县均口数：</td><td id="avgx"></td>
				</tr>
				<tr>
					<th colspan="2">领县</th>
				</tr>
				<tr>
					<td class="td_option tdTitleLen">个数：</td><td id="number"></td>
				</tr>
				<tr>
					<td class="td_option">郡治：</td><td id="leader"></td>
				</tr>
				<tr>
					<td class="td_option">其它：</td><td id="other"></td>
				</tr>
			</table>
		</div>
		<div id="end">
			<table cellpadding="10" cellspacing="0" border="1" >
				<tr>
					<th id="end_thx" colspan="2"></th>
				</tr>
				<tr>
					<td id="end_refTi"></td><td id="end_refText" class="end_tiText"></td>
				</tr>
				<tr>
					<td id="exp_ti"></td><td id="exp_text" class="end_tiText"></td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>