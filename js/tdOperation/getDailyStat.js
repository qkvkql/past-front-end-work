function getDailyStat(str, strict, seri, max){
	var stct = stct=strict ? strict : 0;
	var s = s=seri ? seri : 2;
	var m = m=max ? max : 3;
	var c=[0, 0, 0], c1=[0, 0, 0], c2=[0, 0, 0];
	var trs = document.getElementsByTagName("tr");
	var patt = new RegExp(str, 'i');
	for(let i=1; i<trs.length; i++){
		if(trs[i].getElementsByTagName('td').length === m){
			if(trs[i].getElementsByTagName('td')[s-1].innerText !== undefined){
				if(match(stct, str, trs, i, patt, s)){
					c[0] += getStatFromTd(trs[i].getElementsByTagName('td')[s].innerText)[0];
					c[1] += getStatFromTd(trs[i].getElementsByTagName('td')[s].innerText)[1];
					c[2] += getStatFromTd(trs[i].getElementsByTagName('td')[s].innerText)[2];
				}
			}
		}else if(trs[i].getElementsByTagName('td').length===1 && trs[i-1].getElementsByTagName('td').length===3 && trs[i+1].getElementsByTagName('td').length===3){
			c1[0] = c[0];
			c1[1] = c[1];
			c1[2] = c[2];
		}
	}
	c2[0] = c[0]-c1[0];
	c2[1] = c[1]-c1[1];
	c2[2] = c[2]-c1[2];
	console.log('\nToday: '+c1[0]+'/'+c1[1]+'/'+c1[2]+'\n\nYesterday: '+c2[0]+'/'+c2[1]+'/'+c2[2]+'\n\n');
}
function getStatFromTd(inner){
	let arr = [
		getNumber(inner, 0),
		getNumber(inner, 1),
		getNumber(inner, 2)
	];
	return arr;
}
function getNumber(inner, i){
	return  parseInt(inner.split('/')[i].replace(/\s+/g, ''));
}
function match(stct, str, trs, i, patt, s){
	if(stct===1){
		return trs[i].getElementsByTagName('td')[s-1].innerText===str;
	}else{
		return patt.test(trs[i].getElementsByTagName('td')[s-1].innerText);
	}
}
getDailyStat('jonas');