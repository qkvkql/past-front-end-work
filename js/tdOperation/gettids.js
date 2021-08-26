function getTids(idIcld, staffName, date1, date2, isStrict){
	//keyword
	let kwTemp = arrUnique(idIcld.split('|'));
	let kwTempLen = kwTemp.length;
	let kw = [];
	let kwCount = 0;
	let nPatt = new RegExp('!', 'i');
	let kwNot = [];
	let kwNotCount = 0;
	let kwNotIndex = [];
	let patt = [];
	for(let i=0; i<kwTempLen; i++){
		if(nPatt.test(kwTemp[i])){
			kwNot[kwNotCount] = getKwNot(kwTemp[i]);
			patt[i] = new RegExp(kwNot[kwNotCount], 'i');
			kwNotIndex[kwNotCount] = i;
			kwNotCount += 1;
		}else{
			kw[kwCount] = kwTemp[i];
			patt[i] = new RegExp(kw[kwCount], 'i');
			kwCount += 1;
		}
	}
	let pattKw = [];
	for(let i=0; i<kw.length; i++){
		pattKw[i] = new RegExp(kw[i], 'i');
	}
	let pattKwNot = [];
	for(let i=0; i<kwNot.length; i++){
		pattKwNot[i] = new RegExp(kwNot[i], 'i');
	}
	//staff name
	let stfNm = '';
	stfNm = stfNm=staffName ? staffName : '';
	let pattStfNm = new RegExp(stfNm, 'i');
	//from year & to year
	let westOff = 8;
	let hourDelay = 0;
	let d1 = 20010101;
	d1 = d1=date1 ? date1.split('-').join('') : 20010101;
	let d2 = getDgtDate(westOff, hourDelay);
	d2 = d2=date2 ? date2.split('-').join('') : getDgtDate(westOff, hourDelay);
	if(d1>d2){
		return 0;
	}
	//strict mode
	let strict = 0;
	strict = strict=isStrict ? isStrict : 0;
	//counter
	let c = 0;
	//for print
	let str = '';
	let tid = [];
	let tidBelong = [];
	let dateTime = [];
	let tidNum = [];
	for(let i=0; i<document.getElementsByTagName('td').length-3; i++){
		if(typeof(document.getElementsByTagName('td')[i])!=='undefined'){
			loopKwTemp:
			for(let j=0; j<kwTempLen; j++){
				if(kwNotIndex.indexOf(j) === -1){
					if(!patt[j].test(document.getElementsByTagName('td')[i].innerText)){
						continue;
					}else if(strMatched(strict, stfNm, pattStfNm, i+1) && conDgtDate(i+2) >= d1 && conDgtDate(i+2) <= d2){
						for(let n=0; n<kwNot.length; n++){
							if(pattKwNot[n].test(document.getElementsByTagName('td')[i].innerText)){
								break loopKwTemp;
							}else{
								continue;
							}
						}
						let tidTemp = document.getElementsByTagName('td')[i].innerText;
						let tidBlTemp = document.getElementsByTagName('td')[i+1].innerText;
						let dtTemp = dtConver(document.getElementsByTagName('td')[i+2].innerText);
						let tidNumTemp = parseInt(document.getElementsByTagName('td')[i+3].innerText);
						str += tidTemp + '\n';
						tid[c] = tidTemp;
						tidBelong[c] = tidBlTemp;
						dateTime[c] = dtTemp;
						tidNum[c] = tidNumTemp;
						c += 1;
						break loopKwTemp;
					}else{
						continue;
					}
				}else{
					if(patt[j].test(document.getElementsByTagName('td')[i].innerText)){
						continue;
					}else if(strMatched(strict, stfNm, pattStfNm, i+1) && kwRestricted(pattKw, i) && conDgtDate(i+2) >= d1 && conDgtDate(i+2) <= d2){
						for(let n=0; n<kwNot.length; n++){
							if(pattKwNot[n].test(document.getElementsByTagName('td')[i].innerText)){
								break loopKwTemp;
							}else{
								continue;
							}
						}
						let tidTemp = document.getElementsByTagName('td')[i].innerText;
						let tidBlTemp = document.getElementsByTagName('td')[i+1].innerText;
						let dtTemp = dtConver(document.getElementsByTagName('td')[i+2].innerText);
						let tidNumTemp = parseInt(document.getElementsByTagName('td')[i+3].innerText);
						str += tidTemp + '\n';
						tid[c] = tidTemp;
						tidBelong[c] = tidBlTemp;
						dateTime[c] = dtTemp;
						tidNum[c] = tidNumTemp;
						c += 1;
						break loopKwTemp;
					}else{
						continue;
					};
				}
			}
		}
	}
	let kwStr = '';
	let or = '\' or \'';
	for(let i=0; i<kw.length; i++){
		kwStr += kw[i] + or;
	}
	kwStr = kwStr.substring(0, kwStr.length-or.length);
	let kwNotStr = '';
	let and = '\' and \'';
	for(let i=0; i<kwNot.length; i++){
		kwNotStr += kwNot[i] + and;
	}
	kwNotStr = kwNotStr.substring(0, kwNotStr.length-and.length);
	let ctnOrEqlStr = '';
	ctnOrEqlStr = strict===1 ? 'equals to ' : 'contains ';
	console.log('\ntids contains \''+kwStr+'\'(case insensitive) except \''+kwNotStr+'\' AND staff name '+ctnOrEqlStr+'\''+stfNm+'\' from '+getDateStr(d1)+' to '+getDateStr(d2)+':\n\n/****** START ******/\n'+str+'/****** END ******/\n\nTOTAL: '+c);
	tidTotalNum = 0;
	for(let i=0; i<c; i++){
		tidTotalNum += tidNum[i];
	}
	let tidInfoArr = [];
	for(let i=0; i<c; i++){
		tidInfoArr[i] = {'staff name': tidBelong[i], 'tid name': tid[i], 'registered': tidNum[i], 'created time': dateTime[i]};
	}
	let tidCountObj = {'total tid number': c, 'total registered': tidTotalNum};
	console.table(tidInfoArr);
	console.table(tidCountObj);
}
//judge if current tid test any of pattKw
function kwRestricted(pattKw, i){
	if(pattKw.length === 0){
		return true;
	}else{
		for(let n=0; n<pattKw.length; n++){
			if(pattKw[n].test(document.getElementsByTagName('td')[i].innerText)){
				return true;
			}else{
				continue;
			}
		}
	}
	return false;
}
//convert out print date
function dtConver(dt){
	let a1 = dt.split(' ');
	let a2 = a1[0].split('/');
	return a2[2]+'-'+a2[0]+'-'+a2[1]+' '+a1[1];
}
//match string with 2 mode
function strMatched(strict, str, pattStr, n){
	if(strict===1){
		return (document.getElementsByTagName('td')[n].innerText === str);
	}else{
		return (pattStr.test(document.getElementsByTagName('td')[n].innerText));
	}
}
//get YYYY-mm-dd date string
function getDateStr(d){
	let str = d.toString();
	let d1 = '';
	let d2 = '';
	let d3 = '';
	for(let i=0; i<4; i++){
		d1 += str[i];
	}
	for(let i=4; i<6; i++){
		d2 += str[i];
	}
	for(let i=6; i<8; i++){
		d3 += str[i];
	}
	return d1 + '-' + d2 + '-' + d3;
}
//get YYYYmmdd date
function getDgtDate(w, d){
	return parseInt(getTheYear(w, d).toString() + pairNum((getTheMonth(w, d)+1).toString()) + pairNum(getTheDate(w, d).toString()));
}
//convert YYYYmmdd date from page
function conDgtDate(n){
	let arr = document.getElementsByTagName('td')[n].innerText.split(' ')[0].split('/');
	return parseInt(arr[2]+arr[0]+arr[1]);
}
//pair the date or month
function pairNum(str){
	if(str.length<2){
		str = '0'+str;
	}
	if(str.length===2){
		return str;
	}else{
		return undefined;
	}
}
//get datetime
function getTheDate(w, d){
	return new Date(getMsLaMilliSeconds(w, d)).getDate();
}
function getTheMonth(w, d){
	return new Date(getMsLaMilliSeconds(w, d)).getMonth();
}
function getTheYear(w, d){
	return new Date(getMsLaMilliSeconds(w, d)).getFullYear();
}
function getMsLaMilliSeconds(westDistrict, delayedHours){
	var date = new Date();
	var currentMilliSeconds = date.getTime();
	var currentUtcDiff = date.getTimezoneOffset();
	var laUtcDiff = (westDistrict+delayedHours)*60; //Los Angeles Time: 7 hours later than UTC, Ms delay 1.5 hours
	var currentLaDiff = currentUtcDiff - laUtcDiff;
	return laMilliSeconds = currentMilliSeconds + currentLaDiff*60000; //milliseconds of los angeles time from 1970.1.1
}
function getKwNot(kwNot){
	return kwNot.split('!')[1];
}
function arrUnique(arr){
	let newArr = [];
	let obj = {};
	for(let v of arr){
		if(!obj[v]){
			newArr.push(v);
			obj[v] = 1;
		}
	}
	return newArr;
}
//default staff name: ''; default from date: 2001-01-01; default to date: current date; default isStrict: 0(0 not strict; 1 strict);
// getTids(keywordString, staff name[, from date, to date, isStrict]); keyword exp: 'a|!b...';

getTids('!phoebe|!poseidon|!colin|!nepenthe|!jasmyn|!688-1|!anne|!1may', 'jerry', '2019-07-10');