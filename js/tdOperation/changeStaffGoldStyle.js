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