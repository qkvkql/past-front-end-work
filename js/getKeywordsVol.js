function getVol (cName) {
	let str = '\n';
	let c = document.getElementsByClassName(cName);
	for (let i = 0; i < c.length; i++) {
		str += c[i].innerText + '\n';
	}
	console.log(str);
}

getVol('value-text _ngcontent-leo-106');