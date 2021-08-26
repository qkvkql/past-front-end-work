function getGoldStat(rn, t, s, d, a, b, st){ //tid, staffName, device, startDate, endDate
	//initialization
	var rowNumber = rowNumber=rn ? rn : 6;
	var tid = tid=t ? t.split(' ') : []; //get tid
	var staffName = staffName=s ? s.split(' ') : []; //get staffName
	var device = device=d ? d.split(' ') : ['p','m','i','a','u']; //get device. 0-PC, 1-Mobile, 2-IOS, 3-Android, 4-UNKNOWN
	var date = getTarDate(-8); //get target timezone date
	var d1 = d1=a ? a : date; //get startDate
	var d2 = d2=b ? b : date; //get endDate
	var strict = strict=st ? st : 0; //get strict value
	//traverse tr
	var tr = document.getElementsByTagName('tr'); //get tr
	var c = 0; //counter
	var jud = 0; //judge assistant
	let objArr = []; //for output
	for(let i=0; i<tr.length-1; i++){
		//compare tr length and content
		if(tr[i].getElementsByTagName('td').length!==rowNumber || tr[i].getElementsByTagName('td')[0].innerText===undefined){
			continue; //judge if the length and content in case
		}
		//compare date
		var td1 = parseInt(tr[i].getElementsByTagName('td')[0].innerText.split('-')[0]); //get td content
		if(td1<d1 || td1>d2 || isNaN(td1)){ //judge start date and end date
			continue;
		}
		//compare tid
		var td2 = tr[i].getElementsByTagName('td')[2].innerText; //get td content
		var pattT = [];
		if(tid.length!==0){
			for(let j=0; j<tid.length; j++){ //create tid regular expression
				pattT[j] = new RegExp(tid[j], 'i');
			}
			for(let j=0; j<pattT.length; j++){ //judge reg exp
				if(pattT[j].test(td2)){
					jud = 1;
					break;
				}
			}
			if(jud===0){ //jump out and keep the next tr traversal
				continue;
			}
		}else{ //ignore this td if tid not given
			jud = 0;
		}
		//compare staff name
		var td3 = tr[i].getElementsByTagName('td')[3].innerText; //get td content
		var pattN = []; //staff name regular expression array or staff name array
		if(staffName.length!==0){
			if(strict===1){ //if staff name strict match
				for(let j=0; j<staffName.length; j++){ //create staff name array
					pattN[j] = staffName[j];
				}
				for(let j=0; j<pattN.length; j++){ //judge if staff name completely equal to array element
					if(pattN[j]===td3){
						jud = 1;
						break;
					}
				}
				if(jud===0){ //jump out and keep the next tr traversal
					continue;
				}
			}else{
				for(let j=0; j<staffName.length; j++){ //create staff name reg exp array
					pattN[j] = new RegExp(staffName[j], 'i');
				}
				for(let j=0; j<pattN.length; j++){ //judge reg exp
					if(pattN[j].test(td3)){
						jud = 1;
						break;
					}
				}
				if(jud===0){ //jump out and keep the next tr traversal
					continue;
				}
			}
		}else{ //ignore this td if staff name not given
			jud = 0;
		}
		//compare device
		var td4 = tr[i].getElementsByTagName('td')[4].innerText; //get td content
		var deviceName = []; //device staff name as 'PC', 'Mobile'...
		if(device.indexOf('p')>-1){deviceName.push('PC');} //add elements to deviceName
		if(device.indexOf('m')>-1){deviceName.push('Mobile');}
		if(device.indexOf('i')>-1){deviceName.push('IOS');}
		if(device.indexOf('a')>-1){deviceName.push('Android');}
		if(device.indexOf('u')>-1){deviceName.push('UNKNOWN');}
		if(deviceName.indexOf(td4)>-1){ //judge if current td device match deviceName
			jud = 1;
		}else{ //jump out and keep the next tr traversal
			continue;
		}
		if(jud===1){ //give data to obj
			objArr[c] = {"date":td1, "tid":td2, "staff name":td3, "device":td4};
			c += 1; //gold number counter
			jud = 0; //set 0 so make the next of the traversal correct
		}
	}
	//log output
	let dayNum = d2-d1+1; //day number
	let avg = 0; //average gold number
	if(dayNum<2){
		avg = c;
	}else{
		avg = (c/dayNum).toFixed(2).toString(); //2 decimal after the point
	}
	console.table(objArr); //output obj as console table
	console.log('\n\tTotal: '+c+'\n\n\tDaily Average: '+avg+'\n\n\tDay Number: '+dayNum+'\n\n'); //output summary stat
}
//get target timezone date
function getTarDate(targetTz){
	let date = new Date(getTargetMilliSec(targetTz)); //create target timezone date instance
	return date.getDate(); //get target date
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
//rowNumber tid staffName device startDate endDate staffNameStrictMode
getGoldStat(7, '', 'jonas', 'p m i a u', 1);