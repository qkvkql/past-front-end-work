let myTimezone = -7;
document.addEventListener('DOMContentLoaded',function(event){
	setAllUrls(myTimezone);
});

function setAllUrls(targetTz){ //set all urls in the targeted Timezone
	let sdm = 'sugardaddymeet';
	let mm = 'millionairematch';
	let ps = 'positivesingles';
	let bi = 'bicupid';
	let myDate = new getYmd(targetTz);
	setUrlsForFourSites("href_sdmt0", "href_sdmt1", "href_sdmt2", "href_sdmg0", "href_sdmg1", "href_sdmc0", "href_sdmc1", "href_sdm0", sdm);
	setUrlsForFourSites("href_mmt0", "href_mmt1", "href_mmt2", "href_mmg0", "href_mmg1", "href_mmc0", "href_mmc1", "href_mm0", mm);
	setUrlsForFourSites("href_pst0", "href_pst1", "href_pst2", "href_psg0", "href_psg1", "href_psc0", "href_psc1", "href_ps0", ps);
	setUrlsForFourSites("href_bit0", "href_bit1", "href_bit2", "href_big0", "href_big1", "href_bic0", "href_bic1", "href_bi0", bi);
	function setUrlsForFourSites(t0, t1, t2, g0, g1, c0, c1, z, p){
		setUrl(t0, 'https://www.'+p+'.com/censor_tid_stats'+'?cm='+myDate.getMonth()+'&cd='+myDate.getDate()+'&cy='+myDate.getYear()+'&group_by_gender=1&from_eu=&submit=Show+Statistics');
		setUrl(t1, 'https://www.'+p+'.com/censor_tid_stats'+'?cm='+myDate.getMonth()+'&cd='+myDate.getDate()+'&cy='+myDate.getYear()+'&from_eu=&submit=Show+Statistics');
		setUrl(t2, 'https://www.'+p+'.com/censor_tid_stats_monthly_tids');
		setUrl(g0, 'https://www.'+p+'.com/censor_gold_come_from');
		setUrl(g1, 'https://www.'+p+'.com/censor_staff_gold');
		setUrl(c0, 'https://www.'+p+'.com/censor_tid');
		setUrl(c1, 'https://www.'+p+'.com/censor');
		setUrl(z, 'https://www.'+p+'.com');
	}
}
function setUrl(id, url){
	document.getElementById(id).setAttribute('href', url);
	document.getElementById(id).setAttribute('target', '_blank');
}
function getYmd(targetTz){
	let newDate = new Date(getTargetMilliSec(targetTz));
	this.getYear = () => newDate.getFullYear(); //get full year
	this.getMonth = () => { //get month str
		let monthArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
		return monthArr[newDate.getMonth()];
	}
	this.getDate = () => newDate.getDate(); //get date
}
//get target timezone milli seconds from 1970.1.1; targetTz: east positive and west minus
function getTargetMilliSec(targetTz){
	let date = new Date();
	let localMilliSec = date.getTime(); //get milli seconds of local timezone from 1970.1.1
	let utcLocalDiff = date.getTimezoneOffset(); //get minutes of utc - local
	let targetUtcDiff = targetTz*60; //get minutes of target - utc
	let targetLocalDiff = utcLocalDiff + targetUtcDiff; //get minutes of target - local
	return localMilliSec + targetLocalDiff*60000; //return milliseconds of target timezone from 1970.1.1
}