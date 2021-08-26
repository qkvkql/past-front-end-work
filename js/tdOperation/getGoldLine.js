function getGoldLine(str, tdSeriN, tdNumMax){
	var tdSeri = tdSeri=tdSeriN ? tdSeriN : 4;
	var tdMax = tdMax=tdNumMax ? tdNumMax : 6;
	var trs = document.getElementsByTagName('tr');
	var b = false;
	var c = 0;
	//reg exp
	let arr = str.split(' ');
	
	let patt = [];
	for(let i=0; i<arr.length; i++){
		patt[i] = new RegExp(arr[i], 'i');
	}
	//match
	for(let i=0; i<trs.length; i++){
		if(trs[i].getElementsByTagName('td').length === tdMax){
			if(trs[i].getElementsByTagName('td')[tdSeri-1].innerText!==undefined){
				if(trs[i].getElementsByTagName('td')[tdSeri-1].innerText === "Staff"){
					continue;
				}
				for(let j=0; j<patt.length; j++){
					if(patt[j].test(trs[i].getElementsByTagName('td')[tdSeri-1].innerText)){
						b = true;
						break;
					}else{
						b = false;
						continue;
					}
				}
				if(b===false){
					trs[i].style.display = 'none';
				}else{
					if(c%2===0){
						trs[i].style.background = '#ffffcb';
						c += 1;
					}else{
						trs[i].style.background = '#e6f3d9';
						c += 1;
					}
				}
			}
		}
	}
	console.log(c);
}
getGoldLine('jonas paul briseis russell felicia harden may shrek noya ritta bryce neko jerry');