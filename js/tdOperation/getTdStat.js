function getTdStat(trLength, orAnd, regExpArr, breakPointColumnSerial, breakPointValue){
	var tr = document.getElementsByTagName('tr');
	var l = tr.length;
	var c = 0;
	var a = [];
	var s = '\n\n';
	for(let i=0; i<l; i++){
		let td = tr[i].getElementsByTagName('td');
		if(td.length===trLength){
			let inner = [];
			for(let j=0; j<trLength; j++){
				inner[j] = td[j].innerText;
			}
			if(regJudge(trLength, orAnd, regExpArr, inner)){
				a[c] = [];
				for(let j=0; j<trLength; j++){
					a[c].push(inner[j]);
				}
				c += 1;
			}
		}
		if (td[breakPointColumnSerial-1]) {
			if (td[breakPointColumnSerial-1].innerText) {
				if ( td[breakPointColumnSerial-1].innerText === breakPointValue ) {
					break;
				}
			}
		}
	}
	for(let i=0; i<trLength; i++){
		for(let j=0; j<a.length; j++){
			if(a[j][i]===''){
				continue;
			}
			s += a[j][i]+'\n';
		}
		s += '\n';
	}
	console.log(s);
	console.table(a);
	console.log('\n\tTotal: '+c+'\n\n');
}
function regJudge(trLength, orAnd, regExpArr, tarTdInnerArr){
	let b = true;
	let l = regExpArr.length;
	let patt = /^\/.*\/(i|(ig)|(gi)|m|g)?$/;
	if(l>trLength){
		return false;
	}
	if(orAnd===0){
		if(l===0){
			return true;
		}
		for(let i=0; i<regExpArr.length; i++){
			if(patt.test(regExpArr[i].toString())){
				b = false;
				b = (b || regExpArr[i].test(tarTdInnerArr[i]));
			}
		}
	}else if(orAnd===1){
		for(let i=0; i<regExpArr.length; i++){
			if(patt.test(regExpArr[i].toString())){
				b = (b && regExpArr[i].test(tarTdInnerArr[i]));
			}
		}
	}else{
		b = false;
	}
	return b;
}
//tr length; && or ||(0-or,1-and); reg exp array; break Point Column Serial; break Point Value
getTdStat(4, 1, [0, /jonas/i], 1, '11120');