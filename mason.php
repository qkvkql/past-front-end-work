<?php
header("Content-Type:text/html; charset=utf-8");
date_default_timezone_set("Asia/Shanghai");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
	<link rel="stylesheet" href="css/mason.css" type="text/css" />
	<script src="javascript/mason.js" type="text/javascript"></script>
	<link href="/favicon.ico" type="image/x-icon" rel="shortcut icon" />
	<title>Convenient Links for Mason Sales Staffs</title>
</head>
<body>
	<header>
		<h1>Links</h1>
	</header>
	<div class="content">
		<div class="content_c">
			<!-- SDM -->
			<div><a class="tid" id="href_sdmt0">SDM daily tids by gender</a></div>
			<div><a class="tid" id="href_sdmt1">SDM daily tids</a></div>
			<div><a class="tid" id="href_sdmt2">SDM monthly tids</a></div>
			<div><a class="gold" id="href_sdmg0">SDM monthly golds</a></div>
			
			<div><a class="gold" id="href_sdmg1">SDM gold reg date</a></div>
			<div><a class="censor" id="href_sdmc0">SDM censor tid</a></div>
			<div><a class="censor" id="href_sdmc1">SDM censor</a></div>
			<div><a class="home" id="href_sdm0">SDM homepage</a></div>
			
			<!-- BI -->
			<div><a class="tid" id="href_bit0">BI daily tids by gender</a></div>
			<div><a class="tid" id="href_bit1">BI daily tids</a></div>
			<div><a class="tid" id="href_bit2">BI monthly tids</a></div>
			<div><a class="gold" id="href_big0">BI monthly golds</a></div>
			
			<div><a class="gold" id="href_big1">BI gold reg date</a></div>
			<div><a class="censor" id="href_bic0">BI censor tid</a></div>
			<div><a class="censor" id="href_bic1">BI censor</a></div>
			<div><a class="home" id="href_bi0">BI homepage</a></div>

			<!-- PS -->
			<div><a class="tid" id="href_pst0">PS daily tids by gender</a></div>
			<div><a class="tid" id="href_pst1">PS daily tids</a></div>
			<div><a class="tid" id="href_pst2">PS monthly tids</a></div>
			<div><a class="gold" id="href_psg0">PS monthly golds</a></div>
			
			<div><a class="gold" id="href_psg1">PS gold reg date</a></div>
			<div><a class="censor" id="href_psc0">PS censor tid</a></div>
			<div><a class="censor" id="href_psc1">PS censor</a></div>
			<div><a class="home" id="href_ps0">PS homepage</a></div>

			<!-- MM -->
			<div><a class="tid" id="href_mmt0">MM daily tids by gender</a></div>
			<div><a class="tid" id="href_mmt1">MM daily tids</a></div>
			<div><a class="tid" id="href_mmt2">MM monthly tids</a></div>
			<div><a class="gold" id="href_mmg0">MM monthly golds</a></div>
			
			<div><a class="gold" id="href_mmg1">MM gold reg date</a></div>
			<div><a class="censor" id="href_mmc0">MM censor tid</a></div>
			<div><a class="censor" id="href_mmc1">MM censor</a></div>
			<div><a class="home" id="href_mm0">MM homepage</a></div>
			
			<div><a class="other" href="createtids">Multi-Create Tids</a></div>
			<div><a class="other" href="https://www.masonsoft.com/censor_add_suggestion">Suggestion</a></div>
			<div><a class="other" href="http://s.pz.com/create_sc.php">Upload Screenshots</a></div>
		</div>
	</div>
	<footer>
		<p><?php
			$datetime = explode(' ', date('Y-m-d H:i:s w'));
			$weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			echo 'Latest Refreshing Time(GMT+8): '.$datetime[0].' '.$datetime[1].' '.$weekdays[$datetime[2]].'<br/>'.'Refresh page if the date delayed';
		?></p>
	</footer>
</body>
</html>