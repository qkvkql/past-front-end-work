//get Prime Number
function getPrimeNumberArr (maxNumber) {
    var max = max=maxNumber ? maxNumber : 100;
    let arr = [];
    for ( let i = 2; i <= max; i++ ) {
        let c = 0;
        for ( let j = 2; j < i; j++ ) {
            if ( i % j === 0 ) {
                c += 1;
                break;
            }
        }
        if ( c === 0 ) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(getPrimeNumberArr(10000));

// #001 change golds
Gold = new changeGolds();
function changeGolds(){ //any exsisted tid that has record in daily tids are available
	var f = getLastIndex()+1;
	var l = getNextIndex()+1;
	var jHDIndex = getJHDIndex();
	var jDIndex = getJDIndex();
	var jAADIndex = getJAADIndex();
	var jHAADIndex = getJHAADIndex();
	
	this.change = change;
	function change(tid, str){
		console.time();
		var ind = getIndex(tid);
		var strArray = [0,0,0,0];
		if(/^\d+[/]\d+[/]\d+[/]\d+$/.test(str) == true){
			strArray = str.split('/');
		}
		a = strArray[0]; b = strArray[1]; c = strArray[2]; d = strArray[3];
		var a1 = 0; var b1 = 0; var c1 = 0; var d1 = 0;
		var a2 = 0; var b2 = 0; var c2 = 0; var d2 = 0;
		if(/[\w\.\-]/.test(tid)==true && /\d/.test(a&&b&&c&&d)==true){
			if(parseInt(a)>=parseInt(b) && parseInt(b)>=parseInt(c) && parseInt(d)>=0){
				if(parseInt(d) > 0){
					document.getElementsByTagName('td')[ind+2].innerHTML = a + '/ ' + b + '/ ' + c + ' / <span style="color: red" title="CC and Paypal gold">' + d + '</span>';
				}else{
					document.getElementsByTagName('td')[ind+2].innerHTML = a + '/ ' + b + '/ ' + c;
				}
				
				for(var i=0; i<jHDIndex.length; i++){
					if(getData(jHDIndex[i]).length>0){
						 a1 += parseInt(getData(jHDIndex[i])[0]);
					}
					if(getData(jHDIndex[i]).length>1){
						 b1 += parseInt(getData(jHDIndex[i])[1]);
					}
					if(getData(jHDIndex[i]).length>2){
						 c1 += parseInt(getData(jHDIndex[i])[2]);
					}
					if(getData(jHDIndex[i]).length>3){
						 d1 += parseInt(getData(jHDIndex[i])[3]);
					}
				}
				for(var i=0; i<jHAADIndex.length; i++){
					if(getData(jHAADIndex[i]).length>0){
						 a2 += parseInt(getData(jHAADIndex[i])[0]);
					}
					if(getData(jHAADIndex[i]).length>1){
						 b2 += parseInt(getData(jHAADIndex[i])[1]);
					}
					if(getData(jHAADIndex[i]).length>2){
						 c2 += parseInt(getData(jHAADIndex[i])[2]);
					}
					if(getData(jHAADIndex[i]).length>3){
						 d2 += parseInt(getData(jHAADIndex[i])[3]);
					}
				}
				if(d1>0){
					document.getElementsByTagName('td')[jDIndex].innerHTML = a1 + '/ ' + b1 + '/ ' + c1 + ' / <span style="color: red" title="CC and Paypal gold">' + d1 + '</span>';
				}else{
					document.getElementsByTagName('td')[jDIndex].innerHTML = a1 + '/ ' + b1 + '/ ' + c1;
				}
				document.getElementsByTagName('td')[jAADIndex].innerHTML = a2 + '/ ' + b2 + '/ ' + c2 + ' / <span style="color: red" title="CC and Paypal gold">' + d2 + '</span>';
			}
		}
		console.timeEnd();
	}
	
	function getJAADIndex(){ //yes
		return jDIndex+3;
	}
	
	function getJDIndex(){ //yes
		return jHDIndex[jHDIndex.length-1]+3;
	}
	
	function getJHAADIndex(){ //yes
		var c = 0;
		var a = [];
		for(var i=f; i<l; i++){
			if(/Jerry HuaXi/.test(document.getElementsByTagName('td')[i].innerText)==true && /andriod/.test(document.getElementsByTagName('td')[i-1].innerText) == true && /\d/.test(document.getElementsByTagName('td')[i+1].innerText) == true){
				a[c] = i+1;
				c += 1;
				if(/Jerry HuaXi/.test(document.getElementsByTagName('td')[i+4].innerText)==false){
					break;
				}
			}
		}
		return a;
	}
	
	function getJHDIndex(){ //yes
		var c = 0;
		var a = [];
		for(var i=f; i<l; i++){
			if((/Jerry HuaXi/.test(document.getElementsByTagName('td')[i].innerText)==true || /Jerry/.test(document.getElementsByTagName('td')[i].innerText)==true) && /andriod/.test(document.getElementsByTagName('td')[i-1].innerText) == false && /\d/.test(document.getElementsByTagName('td')[i+1].innerText) == true){
				a[c] = i+1;
				c += 1;
				if(/Jerry HuaXi/.test(document.getElementsByTagName('td')[i+4].innerText)==false || /Jerry/.test(document.getElementsByTagName('td')[i+4].innerText)==false){
					break;
				}
			}
		}
		return a;
	}
	
	function getData(indexOfTd){ //yes
		var b = '';
		var n = 0;
		var t = String(document.getElementsByTagName('td')[indexOfTd].innerText);
		t = t.replace(/((?![\d/]).)/g,'');
		return t.split('/');
	}
	
	function getIndex(id){ //yes
		var t = 0;
		for(var i=f; i<l; i++){
			if(document.getElementsByTagName('td')[i].innerText=='Jerry HuaXi' && document.getElementsByTagName('td')[i-1].innerText==id){
				t = i-1;
				break;
			}else{
				continue;
			}
		}
		return t;
	}
	
	function getNextIndex(){ //yes
		var t = 0;
		for(var i=0; i<document.getElementsByTagName('td').length; i++){
			if(document.getElementsByTagName('td')[i].innerText == 'Jones Indian'){
				t = i;
				break;
			}else{
				continue;
			}
		}
		return t;
	}
	
	function getLastIndex(){ //yes
		var t = 0;
		for(var i=0; i<document.getElementsByTagName('td').length; i++){
			if(document.getElementsByTagName('td')[i].innerText == 'Jameyapp'){
				t = i;
				break;
			}else{
				continue;
			}
		}
		return t;
	}
}
Gold.change('Jon01', '13/12/12/8');

//compressed
Gold = new changeGolds(); function changeGolds(){var f = getLastIndex()+1; var l = getNextIndex()+1; var jHDIndex = getJHDIndex(); var jDIndex = getJDIndex(); var jAADIndex = getJAADIndex(); var jHAADIndex = getJHAADIndex(); this.change = change; function change(tid, str){console.time(); var ind = getIndex(tid); var strArray = ['','','','']; if(/^\d+[/]\d+[/]\d+[/]\d+$/.test(str) == true){strArray = str.split('/');}a = strArray[0]; b = strArray[1]; c = strArray[2]; d = strArray[3]; var a1 = 0; var b1 = 0; var c1 = 0; var d1 = 0; var a2 = 0; var b2 = 0; var c2 = 0; var d2 = 0; if(/[\w\.\-]/.test(tid)==true && /\d/.test(a&&b&&c&&d)==true){if(parseInt(a)>=parseInt(b) && parseInt(b)>=parseInt(c) && parseInt(d)>=0){if(parseInt(d) > 0){document.getElementsByTagName('td')[ind+2].innerHTML = a + '/ ' + b + '/ ' + c + ' / <span style="color: red" title="CC and Paypal gold">' + d + '</span>';}else{document.getElementsByTagName('td')[ind+2].innerHTML = a + '/ ' + b + '/ ' + c;}for(var i=0; i<jHDIndex.length; i++){if(getData(jHDIndex[i]).length>0){a1 += parseInt(getData(jHDIndex[i])[0]);}if(getData(jHDIndex[i]).length>1){b1 += parseInt(getData(jHDIndex[i])[1]);}if(getData(jHDIndex[i]).length>2){c1 += parseInt(getData(jHDIndex[i])[2]);}if(getData(jHDIndex[i]).length>3){d1 += parseInt(getData(jHDIndex[i])[3]);}}for(var i=0; i<jHAADIndex.length; i++){if(getData(jHAADIndex[i]).length>0){a2 += parseInt(getData(jHAADIndex[i])[0]);}if(getData(jHAADIndex[i]).length>1){b2 += parseInt(getData(jHAADIndex[i])[1]);}if(getData(jHAADIndex[i]).length>2){c2 += parseInt(getData(jHAADIndex[i])[2]);}if(getData(jHAADIndex[i]).length>3){d2 += parseInt(getData(jHAADIndex[i])[3]);}}if(d1>0){document.getElementsByTagName('td')[jDIndex].innerHTML = a1 + '/ ' + b1 + '/ ' + c1 + ' / <span style="color: red" title="CC and Paypal gold">' + d1 + '</span>';}else{document.getElementsByTagName('td')[jDIndex].innerHTML = a1 + '/ ' + b1 + '/ ' + c1;}document.getElementsByTagName('td')[jAADIndex].innerHTML = a2 + '/ ' + b2 + '/ ' + c2 + ' / <span style="color: red" title="CC and Paypal gold">' + d2 + '</span>';}}console.timeEnd();} function getJAADIndex(){return jDIndex+3;} function getJDIndex(){return jHDIndex[jHDIndex.length-1]+3;} function getJHAADIndex(){var c = 0; var a = []; for(var i=f; i<l; i++){if(/Jerry HuaXi/.test(document.getElementsByTagName('td')[i].innerText)==true && /andriod/.test(document.getElementsByTagName('td')[i-1].innerText) == true && /\d/.test(document.getElementsByTagName('td')[i+1].innerText) == true){a[c] = i+1; c += 1; if(/Jerry HuaXi/.test(document.getElementsByTagName('td')[i+4].innerText)==false){break;}}}return a;} function getJHDIndex(){var c = 0; var a = [];for(var i=f; i<l; i++){if((/Jerry HuaXi/.test(document.getElementsByTagName('td')[i].innerText)==true || /Jerry/.test(document.getElementsByTagName('td')[i].innerText)==true) && /andriod/.test(document.getElementsByTagName('td')[i-1].innerText) == false && /\d/.test(document.getElementsByTagName('td')[i+1].innerText) == true){a[c] = i+1; c += 1; if(/Jerry HuaXi/.test(document.getElementsByTagName('td')[i+4].innerText)==false || /Jerry/.test(document.getElementsByTagName('td')[i+4].innerText)==false){break;}}}return a;} function getData(indexOfTd){var b = ''; var n = 0; var t = String(document.getElementsByTagName('td')[indexOfTd].innerText); t = t.replace(/((?![\d/]).)/g,''); return t.split('/');} function getIndex(id){var t = 0; for(var i=f; i<l; i++){if(document.getElementsByTagName('td')[i].innerText=='Jerry HuaXi' && document.getElementsByTagName('td')[i-1].innerText==id){t = i-1; break;}else{continue;}}return t;} function getNextIndex(){var t = 0; for(var i=0; i<document.getElementsByTagName('td').length; i++){if(document.getElementsByTagName('td')[i].innerText == 'Jones Indian'){t = i; break;}else{continue;}}return t;} function getLastIndex(){var t = 0; for(var i=0; i<document.getElementsByTagName('td').length; i++){if(document.getElementsByTagName('td')[i].innerText == 'Jameyapp'){t = i; break;}else{continue;}}return t;}}
//
Gold.change('Jon01', '17/16/16/11');
/******************************************************************************************************************************************/

/******************************************************************************************************************************************/
// #002 change staff gold style
var l = document.getElementsByTagName('td').length;
function setStaffStyle(staffName){
	for(var i=0; i<getIndex(staffName).length; i++){
		document.getElementsByTagName('td')[getIndex(staffName)[i]-3].style.background = 'white';
		document.getElementsByTagName('td')[getIndex(staffName)[i]-2].style.background = 'white';
		document.getElementsByTagName('td')[getIndex(staffName)[i]-1].style.background = 'white';
		document.getElementsByTagName('td')[getIndex(staffName)[i]-1].style.fontWeight = 'bold';
		document.getElementsByTagName('td')[getIndex(staffName)[i]].style.background = 'white';
		document.getElementsByTagName('td')[getIndex(staffName)[i]].style.fontWeight = 'bold';
		document.getElementsByTagName('td')[getIndex(staffName)[i]+1].style.background = 'white';
		document.getElementsByTagName('td')[getIndex(staffName)[i]+2].style.background = 'white';
	}
}
function getIndex(staffName){
	var c = 0;
	var a = [];
	for(var i=0; i<l; i++){
		if(document.getElementsByTagName('td')[i].innerText==staffName){
			a[c] = i;
			c += 1;
		}else{
			continue;
		}
	}
	return a;
}
setStaffStyle('Jerry');
/******************************************************************************************************************************************/

/******************************************************************************************************************************************/
// #003 random sequence
function randomSequence(number){
	if(/\d/g.test(number)!=true || number==0){
		return '';
	}
	var newSequence = [];
	for(var i=0; i<number; i++){
		newSequence[i] = Math.ceil(number*(Math.random()));
		while(!unique(newSequence)){
			newSequence[i] = Math.ceil(number*(Math.random()));
		}
	}
	return newSequence;
}
function unique(array){
	var base = array[array.length-1];
	var newArray = [];
	for(var i=0; i<array.length-1; i++){
		newArray[i] = array[i];
	}
	for(var i=0; i<newArray.length; i++){
		if(base == newArray[i]){
			return false;
		}
	}
	return true;
}

randomSequence(13);
//compressed
function randomSequence(number){if(/\d/g.test(number)!=true || number==0){return 0;}var newSequence = []; for(var i=0; i<number; i++){newSequence[i] = Math.ceil(number*(Math.random())); while(!unique(newSequence)){newSequence[i] = Math.ceil(number*(Math.random()));}}return newSequence;} function unique(array){var base = array[array.length-1]; var newArray = []; for(var i=0; i<array.length-1; i++){newArray[i] = array[i];}for(var i=0; i<newArray.length; i++){if(base == newArray[i]){return false;}}return true;}
//
randomSequence(13);
/******************************************************************************************************************************************/

/******************************************************************************************************************************************/
// #004 daily gold numbers
function countGold(date){
	var dateArray = date.split('-');
	var lastDay = dateArray[0];
	var currentMonth = dateArray[1];
	var currentYear = dateArray[2];
	var lastWeekday = dateArray[3];
	
	var targetDays = [];
	for(var i=0; i<parseInt(lastDay); i++){
		if(parseInt(lastDay)-i>9){
			targetDays[i] = String(parseInt(lastDay)-i)+'-'+currentMonth+'-'+currentYear;
		}else{
			targetDays[i] = '0'+String(parseInt(lastDay)-i)+'-'+currentMonth+'-'+currentYear;
		}
	}
	var daysLength = targetDays.length;
	var tdArray = document.getElementsByTagName('td');
	var dailyGolds = [];
	for(var i=0; i<daysLength; i++){
		dailyGolds[i] = 0;
	}
	for(var i=0; i<tdArray.length; i++){
		for(var j=0; j<targetDays.length; j++){
			if(tdArray[i].innerText == targetDays[j]){
				dailyGolds[j] += 1;
			}
		}
	}
	
	var originalWeek = ['Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday'];
	var week = [];
	var weekLength = originalWeek.length;
	var weekShift = originalWeek.indexOf(lastWeekday);
	for(var i=0; i<originalWeek.length; i++){
		week[i] = originalWeek[(i+weekShift)%7];
	}
	
	var resultStr = '';
	for(var i=0; i<daysLength; i++){
		resultStr += targetDays[i]+': '+dailyGolds[i];
		resultStr += ' ('+week[i%7]+')\n';
		if((i+1)%7 == 0){
			resultStr += '\n';
		}
	}
	resultStr += '/***********************/\n\n';
	var quotient = parseInt(parseInt(lastDay)/7);
	var remainder = parseInt(lastDay)%7;
	var currentWeekDayGolds = [];
	var currentWeekDayAvGolds = [];
	for(var i=0; i<7; i++){
		currentWeekDayGolds[i] = 0;
		currentWeekDayAvGolds[i] = 0;
	}
	for(var i=0; i<week.length; i++){
		if(i<remainder){
			for(var j=0; j<quotient+1; j++){
				currentWeekDayGolds[i] += dailyGolds[i+j*7];
			}
			currentWeekDayAvGolds[i] = Math.round(currentWeekDayGolds[i]/(quotient+1));
		}else{
			for(var j=0; j<quotient; j++){
				currentWeekDayGolds[i] += dailyGolds[i+j*7];
			}
			currentWeekDayAvGolds[i] = Math.round(currentWeekDayGolds[i]/(quotient));
		}
		resultStr += week[i]+' Golds: '+currentWeekDayGolds[i]+'\nAverage '+week[i]+' Golds: '+currentWeekDayAvGolds[i]+'\n\n';
	}
	resultStr += '/***********************/\n\n';
	for(var i=0; i<week.length; i++){
		if(i<remainder){
			resultStr += week[i]+' Number:\n'+String(parseInt(quotient)+1)+'\n\n';
		}else{
			resultStr += week[i]+' Number:\n'+quotient+'\n\n';
		}		
	}
	return '\n'+resultStr;
}
console.log(countGold('24-NOV-19-Sunday'));
//compressed
function countGold(date){var dateArray = date.split('-'); var lastDay = dateArray[0]; var currentMonth = dateArray[1]; var currentYear = dateArray[2]; var lastWeekday = dateArray[3]; var targetDays = []; for(var i=0; i<parseInt(lastDay); i++){if(parseInt(lastDay)-i>9){targetDays[i] = String(parseInt(lastDay)-i)+'-'+currentMonth+'-'+currentYear;}else{targetDays[i] = '0'+String(parseInt(lastDay)-i)+'-'+currentMonth+'-'+currentYear;}}var daysLength = targetDays.length; var tdArray = document.getElementsByTagName('td'); var dailyGolds = []; for(var i=0; i<daysLength; i++){dailyGolds[i] = 0;}for(var i=0; i<tdArray.length; i++){for(var j=0; j<targetDays.length; j++){if(tdArray[i].innerText == targetDays[j]){dailyGolds[j] += 1;}}}var originalWeek = ['Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday']; var week = []; var weekLength = originalWeek.length; var weekShift = originalWeek.indexOf(lastWeekday); for(var i=0; i<originalWeek.length; i++){week[i] = originalWeek[(i+weekShift)%7];}var resultStr = '\n'; for(var i=0; i<daysLength; i++){resultStr += targetDays[i]+': '+dailyGolds[i]; resultStr += ' ('+week[i%7]+')\n'; if((i+1)%7 == 0){resultStr += '\n';}}resultStr += '/***********************/\n\n'; var quotient = parseInt(parseInt(lastDay)/7); var remainder = parseInt(lastDay)%7; var currentWeekDayGolds = []; var currentWeekDayAvGolds = []; for(var i=0; i<7; i++){currentWeekDayGolds[i] = 0; currentWeekDayAvGolds[i] = 0;}for(var i=0; i<week.length; i++){if(i<remainder){for(var j=0; j<quotient+1; j++){currentWeekDayGolds[i] += dailyGolds[i+j*7];}currentWeekDayAvGolds[i] = Math.round(currentWeekDayGolds[i]/(quotient+1));}else{for(var j=0; j<quotient; j++){currentWeekDayGolds[i] += dailyGolds[i+j*7];}currentWeekDayAvGolds[i] = Math.round(currentWeekDayGolds[i]/(quotient));}resultStr += week[i]+' Golds: '+currentWeekDayGolds[i]+'\nAverage '+week[i]+' Golds: '+currentWeekDayAvGolds[i]+'\n\n';}resultStr += '/***********************/\n\n'; for(var i=0; i<week.length; i++){if(i<remainder){resultStr += week[i]+' Number:\n'+String(parseInt(quotient)+1)+'\n\n';}else{resultStr += week[i]+' Number:\n'+quotient+'\n\n';}}return '\n'+resultStr;}
/*
31-JAN-18-Wednesday
28-FEB-18-Wednesday
31-MAR-18-Saturday
30-APR-18-Monday
31-MAY-18-Thursday
30-JUN-18-Saturday
31-JUL-18-Tuesday
31-AUG-18-Friday
30-SEP-18-Sunday
31-OCT-18-Wednesday
30-NOV-18-Friday
31-DEC-18-Monday
31-JAN-19-Thursday
28-FEB-19-Thursday
31-MAR-19-Sunday
30-APR-19-Tuesday
31-MAY-19-Friday
30-JUN-19-Sunday
31-JUL-19-Wednesday
31-AUG-19-Saturday
30-SEP-19-Monday
31-OCT-19-Thursday
30-NOV-19-Saturday
/*************************
08-DEC-19-Sunday
*/
console.log(countGold('30-NOV-19-Saturday'));
/******************************************************************************************************************************************/

/******************************************************************************************************************************************/
// #005 encryption
/*START shift encryption*/
Cipher = new shiftEncryption();
function shiftEncryption(){
	var range = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_:./';
	var letterRange = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	
	this.encode = function(str){
		var regStr = str.replace(/((?![\w\.\-:/]).)/g,'');
		return encodeShift(encodeRef(regStr));
	}
	
	this.decode = function(code){
		if(code.length!=0){
			return decodeRef(decodeShift(code));
		}else{
			return '';
		}
	}
	
	this.getCodeArray = getCodeArray;
	this.regRef = regRef;
	this.getEnRanRef = getEnRanRef;
	this.strictFilter = strictFilter;
	
	function decodeRef(array){
		var codeResult = '';
		for(var i=0; i<array.length; i++){
			codeResult += range[getEnRanRef().indexOf(array[i])];
		}
		return codeResult;
	}
	
	function decodeShift(code){
		var codeResult = [];
		code = code.replace(/((?![A-Za-z\d]).)/g,'');
		var codeArray = strictFilter(getEnRanRef(), getCodeArray(code));
		if(codeArray.length!=0){
			for(var i=0; i<codeArray.length; i++){
				if(i%3==0){
					if((getEnRanRef().indexOf(codeArray[i])-5)>=0){
						codeResult[i] = getEnRanRef()[(getEnRanRef().indexOf(codeArray[i])-5)];
					}else{
						codeResult[i] = getEnRanRef()[((getEnRanRef().indexOf(codeArray[i])+getEnRanRef().length)-5)];
					}					
				}else if(i%3==1){
					if((getEnRanRef().indexOf(codeArray[i])-2)>=0){
						codeResult[i] = getEnRanRef()[(getEnRanRef().indexOf(codeArray[i])-2)];
					}else{
						codeResult[i] = getEnRanRef()[((getEnRanRef().indexOf(codeArray[i])+getEnRanRef().length)-2)];
					}
				}else{
					if((getEnRanRef().indexOf(codeArray[i])-3)>=0){
						codeResult[i] = getEnRanRef()[(getEnRanRef().indexOf(codeArray[i])-3)];
					}else{
						codeResult[i] = getEnRanRef()[((getEnRanRef().indexOf(codeArray[i])+getEnRanRef().length)-3)];
					}
				}
			}
			return codeResult;
		}else{
			return [];
		}
	}
	
	function strictFilter(refArray, testArray){
		while(!regRef(refArray, testArray)){
			for(var i=0; i<testArray.length; i++){
				if(refArray.indexOf(testArray[i]) > -1){
					continue;
				}else{
					testArray.splice(i,1);
					break;
				}
			}
		}
		return testArray;
	}
	
	function regRef(refArray, testArray){
		var s = true;
		for(var i=0; i<testArray.length; i++){
			if(refArray.indexOf(testArray[i]) > -1){
				continue;
			}else{
				s = false;
				break;
			}
		}
		return s;
	}
	
	function getEnRanRef(){
		var rangeRef = [];
		for(var i=0; i<letterRange.length; i++){
			rangeRef[i] = letterRange[i];
		}
		for(var i=letterRange.length; i<range.length; i++){
			rangeRef[i] = letterRange[parseInt((i-letterRange.length)/10)]+((i-letterRange.length)%10);
		}
		return rangeRef;
	}
	
	function getCodeArray(code){
		var codeArray = [];
		var j = 0;
		for(var i=0; i<code.length; i++){
			if(/[A-Za-z]/.test(code[i])){
				if((i+1)<code.length&&/[A-Za-z]/.test(code[i+1])){
					codeArray[j] = code[i];
					j += 1;
				}else if((i+1)<code.length&&!(/[A-Za-z]/.test(code[i+1]))){
					codeArray[j] = code[i]+code[i+1];
					j += 1;
				}else{
					codeArray[j] = code[i];
					j += 1;
				}
			}else{
				continue;
			}
		}
		return codeArray;
	}
	
	function encodeRef(str){
		var strArray = [];
		var strResult = '';
		
		if(str.length!=0){
			for(var i=0; i<str.length; i++){
				strArray[i] = getEnRanRef()[range.indexOf(str[i])];
				strResult += strArray[i];
			}
			return strResult;
		}else{
			return '';
		}
	}
	
	function encodeShift(str){
		var strArray = getCodeArray(str);
		var strResult = '';
		if(strArray.length!=0){
			for(var i=0; i<strArray.length; i++){
				if(i%3==0){
					strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i])+5)%(getEnRanRef().length)];
				}else if(i%3==1){
					strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i])+2)%(getEnRanRef().length)];
				}else{
					strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i])+3)%(getEnRanRef().length)];
				}
			}
			return strResult;
		}else{
			return '';
		}
	}
}
/*END shift encryption*/

/*START mapping encryption*/
Love = new mappingEncryption();
function mappingEncryption(){
	var strRange = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_:./';
	
	this.encode = function(str){ //encode from string to code
		var regStr = str.replace(/((?![\w\.\-:/]).)/g,'');
		return strQdFour(regStr);
	}
	
	this.decode = function(code){ //decode from code to string
		code = code.replace(/((?![love]).)/g,'');
		var a = getCodeArray(code);
		var n = [];
		var s = [];
		var strDecode = '';
		if(code.length!=0&&(code.length)%4==0){			
			while(!regRef(getRefArray(), a)){
				for(var i=0; i<a.length; i++){
					if(getRefArray().indexOf(a[i]) > -1){
						continue;
					}else{
						a.splice(i,1);
						break;
					}
				}
			}
			if(a.length==0){
				return '';
			}
			for(var i=0; i<(a.length); i++){
				a[i] = a[i].replace(/l/g,'0');
				a[i] = a[i].replace(/o/g,'1');
				a[i] = a[i].replace(/v/g,'2');
				a[i] = a[i].replace(/e/g,'3');
				n[i] = a[i][3]*1 + a[i][2]*4 + a[i][1]*16 + a[i][0]*64;
				s[i] = strRange[n[i]];
				strDecode += s[i];
			}
			return strDecode;		
		}else{
			return '';
		}
	}
	
	function regRef(refArray, testArray){
		var s = true;
		for(var i=0; i<testArray.length; i++){
			if(refArray.indexOf(testArray[i]) > -1){
				continue;
			}else{
				s = false;
				break;
			}
		}
		return s;
	}
	
	function getCodeArray(code){
		var a = [];
		for(var i=0; i<((code.length)/4); i++){
			a[i] = code[i*4]+code[i*4+1]+code[i*4+2]+code[i*4+3];
		}
		return a;
	}
	
	function getRefArray(){
		var arrayRef = [];
		var codeStringRef = strQdFour(strRange);
		var j = 0;
		for(var i=0; i<codeStringRef.length; i++){
			arrayRef[j] = codeStringRef[i*4]+codeStringRef[i*4+1]+codeStringRef[i*4+2]+codeStringRef[i*4+3];
			j=j+1;
		}
		return arrayRef;
	}
	
	function strQdFour(str){ //string code with quanternary of four digits
		var strCode = '';
		var strNum = [];
		var strLove = [];
		for(var i=0; i<strRange.length; i++){
			strNum[i] = dToQ(i);
			strLove[i] = strNum[i].replace(/0/g,'l');
			strLove[i] = strLove[i].replace(/1/g,'o');
			strLove[i] = strLove[i].replace(/2/g,'v');
			strLove[i] = strLove[i].replace(/3/g,'e');
		}
		for(var i=0; i<str.length; i++){
			strCode += strLove[strRange.indexOf(str[i])];
		}
		return strCode;
	}
	
	function dToQ(num){ //decimal to quanternary
		var n = '0000';
		n = n[0]+n[1]+n[2]+(num%4);
		n = n[0]+n[1]+(parseInt(num/4)%4)+n[3];
		n = n[0]+(parseInt(parseInt(num/4)/4)%4)+n[2]+n[3];
		n = parseInt(parseInt(parseInt(num/4)/4)/4)+n[1]+n[2]+n[3];
		return n;
	}
}
/*END mapping encryption*/
/******************************************************************************************************************************************/

/******************************************************************************************************************************************/