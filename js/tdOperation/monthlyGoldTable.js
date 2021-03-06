function getFirstDate(){
	var date = '';
	for(var i=0; i<100; i++){
		if('From which resource' == document.getElementsByTagName('td')[i].innerText){
			date = document.getElementsByTagName('td')[i+1].innerText;
			break;
		}
	}
	var dateArray = date.split('-');
	newMonth = getDigitalMonth(dateArray[1]);
	var newDate = dateArray[2] + '-' + newMonth + '-' + dateArray[0];
	var week = getAlphaWeek('20'+newDate);
	newDate = dateArray[0] + '-' + dateArray[1] + '-' + dateArray[2] + '-' + week;
	return newDate;
}
function getDigitalMonth(str){
	var n = '';
	var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	for(var i=0; i<month.length; i++){
		if(str == month[i]){n = str.replace(month[i], String(i+1));}
	}
	return n;
}
function getFullMonth(m){
	var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	var fullMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	if(month.indexOf(m)>-1){
		return fullMonth[month.indexOf(m)];
	}
}
function getAlphaWeek(date){
	var originalWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var week = originalWeek[new Date(date).getDay()];
	return week;
}
function countGold(date){
	var dateArray = date.split('-');
	var lastDay = dateArray[0];
	var currentMonth = dateArray[1];
	var currentYear = dateArray[2];
	
	var digitalMonth = getDigitalMonth(currentMonth);
	var newDate = '20'+currentYear+'-'+digitalMonth+'-'+lastDay;
	var lastWeekday = getAlphaWeek(newDate);
	
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
	
	var d1 = [];
	var d2 = [];
	var d3 = [];
	for(var i=0; i<daysLength; i++){
		d1[i] = {'Date': targetDays[i], 'Gold': dailyGolds[i], 'Week Day': week[i%7]};
	}
	var quotient = parseInt(parseInt(lastDay)/7);
	var remainder = parseInt(lastDay)%7;
	var currentWeekDayGolds = [];
	var currentWeekDayAvGolds = [];
	var currentWeekDayNumber = [];
	for(var i=0; i<7; i++){
		currentWeekDayGolds[i] = 0;
		currentWeekDayAvGolds[i] = 0;
	}
	for(var i=0; i<week.length; i++){
		if(i<remainder){
			for(var j=0; j<quotient+1; j++){
				currentWeekDayGolds[i] += dailyGolds[i+j*7];
			}
			currentWeekDayAvGolds[i] = Math.round(currentWeekDayGolds[i]/(quotient+1)*10)/10;
			currentWeekDayNumber[i] = parseInt(quotient)+1;
		}else{
			for(var j=0; j<quotient; j++){
				currentWeekDayGolds[i] += dailyGolds[i+j*7];
			}
			currentWeekDayAvGolds[i] = quotient==0 ? undefined : Math.round(currentWeekDayGolds[i]/(quotient)*10)/10;
			currentWeekDayNumber[i] = quotient;
		}
		d2[i] = {'Week Day': week[i], 'Average Gold(A/B)': currentWeekDayAvGolds[i], 'Gold(A)': currentWeekDayGolds[i], 'Week Day Number(B)': currentWeekDayNumber[i]};
	}
	var totalGolds = 0;
	for(var i=0; i<week.length; i++){
		totalGolds += currentWeekDayGolds[i];
	}
	var monthYear = getFullMonth(currentMonth)+' 20'+currentYear;
	d3[0] = {'Month': monthYear, 'Daily Average Gold(A/B)': Math.round(totalGolds/parseInt(lastDay)*10)/10, 'Total Gold(A)': totalGolds, 'Day Number(B)': parseInt(lastDay)};
	var d = [d1, d2, d3, monthYear];
	return d;
}
function getMonthlyGoldTable(theDate){
	var date;
	var header = '/*************************/\n\nMonthly Gold Table';
	var footer = '\n\n/*************************/';
	date = date=theDate ? theDate : getFirstDate();
	if(parseInt(date.split('-')[0])==1){
		header += '[1 '+countGold(date)[3]+']:\n\n';
	}else{
	header += '[1 - '+parseInt(date.split('-')[0])+', '+countGold(date)[3]+']:\n\n';
	}
	console.log(header);
	console.table(countGold(date)[0]);
	console.table(countGold(date)[1]);
	console.table(countGold(date)[2]);
	console.log(footer);
}
getMonthlyGoldTable();