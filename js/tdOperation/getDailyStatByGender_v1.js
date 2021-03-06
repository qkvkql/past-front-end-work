function getDailyStatByGender(str, isapp, strict, seri, max){//staffname, isapp, isstrict, serial of td, max number of td
	var app = app=isapp ? isapp : 0;
	var stct = stct=strict ? strict : 0;
	var s = s=seri ? seri : 2;
	var m = m=max ? max : 3;
	var n=0, arrCutBefore=0;
	var c=[0,0,0], c1=[0,0,0], c2=[0,0,0], cf=[0,0,0], cf1=[0,0,0], cf2=[0,0,0], cm=[0,0,0], cm1=[0,0,0], cm2=[0,0,0];
	var tempArr1=[], tempArr2=[], arr1=[], arr2=[];
	var trs = document.getElementsByTagName("tr");
	var patt = new RegExp(str, 'i');
	for(let i=1; i<trs.length; i++){
		if(trs[i].getElementsByTagName('td').length === m){
			if(trs[i].getElementsByTagName('td')[s-1].innerText !== undefined){
				if(match(app, stct, str, trs, i, patt, s)){
					let temp = (trs[i].getElementsByTagName('td')[s-2].innerText).toString();
					let temp0 = parseInt(getStatFromTd(trs[i].getElementsByTagName('td')[s].innerText)[0]);
					let temp1 = parseInt(getStatFromTd(trs[i].getElementsByTagName('td')[s].innerText)[1]);
					let temp2 = parseInt(getStatFromTd(trs[i].getElementsByTagName('td')[s].innerText)[2]);
					let temp3 = parseInt(getStatFromTd(trs[i].getElementsByTagName('td')[s].innerText)[3]);
					let temp4 = parseInt(getStatFromTd(trs[i].getElementsByTagName('td')[s].innerText)[4]);
					let temp5 = parseInt(getStatFromTd(trs[i].getElementsByTagName('td')[s].innerText)[5]);
					tempArr1[n] = [temp, temp0, temp1, temp2, temp3, temp4, temp5];
					n += 1;
					cf[0] += temp0;
					cf[1] += temp1;
					cf[2] += temp2;
					cm[0] += temp3;
					cm[1] += temp4;
					cm[2] += temp5;
					c[0] += temp0+temp3;
					c[1] += temp1+temp4;
					c[2] += temp2+temp5;
				}
			}
		}else if(i===getSplitTrIndex(trs)){
			arrCutBefore = n;
			c1[0] = c[0];
			c1[1] = c[1];
			c1[2] = c[2];
			cf1[0] = cf[0];
			cf1[1] = cf[1];
			cf1[2] = cf[2];
			cm1[0] = cm[0];
			cm1[1] = cm[1];
			cm1[2] = cm[2];
		}
	}
	tempArr2 = tempArr1.splice(arrCutBefore);
	function arrCb(arr){
		let l = arr.length;
		let tidArr = [];
		let newArr = [];
		let patt = /(ios app)|(andriod app)/i;
		for(let i=0; i<l; i++){
			arr[i][0] = arr[i][0].replace(patt, '');
			tidArr.push(arr[i][0]);
		}
		tidArr = arrUnique(tidArr);
		for(let i=0; i<tidArr.length; i++){
			let t1=0, t2=0, t3=0, t4=0, t5=0, t6=0;
			for(let j=0; j<l; j++){
				if(arr[j][0] === tidArr[i]){
					t1 = arr[j][1] + t1;
					t2 = arr[j][2] + t2;
					t3 = arr[j][3] + t3;
					t4 = arr[j][4] + t4;
					t5 = arr[j][5] + t5;
					t6 = arr[j][6] + t6;
				}
			}
			newArr[i] = [tidArr[i], t1, t2, t3, t4, t5, t6];
		}
		return newArr;
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
	function arrSort(arr){
		let l = arr.length;
		for(let i=0; i<l-1; i++){
			for(let j=i+1; j<l; j++){
				if(jud(i, j, 6, 'lt')){
					excg(i, j);
				}else if(jud(i, j, 6, 'eq')){
					if(jud(i, j, 5, 'lt')){
						excg(i, j);
					}else if(jud(i, j, 5, 'eq')){
						if(jud(i, j, 4, 'lt')){
							excg(i, j);
						}else if(jud(i, j, 4, 'eq')){
							if(jud(i, j, 3, 'lt')){
								excg(i, j);
							}else if(jud(i, j, 3, 'eq')){
								if(jud(i, j, 2, 'lt')){
									excg(i, j);;
								}else if(jud(i, j, 2, 'eq')){
									if(jud(i, j, 1, 'lt')){
										excg(i, j);
									}
								}
							}
						}
					}
				}
			}
		}
		function jud(i, j, n, f){
			if(f === 'lt'){
				return (arr[i][n] < arr[j][n]);
			}else if(f === 'eq'){
				return (arr[i][n] === arr[j][n]);
			}else{
				return false;
			}
		}
		function excg(i, j){
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	}
	arr1 = arrSort(arrCb(tempArr1));
	arr2 = arrSort(arrCb(tempArr2));
	c2[0] = c[0]-c1[0];
	c2[1] = c[1]-c1[1];
	c2[2] = c[2]-c1[2];
	cf2[0] = cf[0]-cf1[0];
	cf2[1] = cf[1]-cf1[1];
	cf2[2] = cf[2]-cf1[2];
	cm2[0] = cm[0]-cm1[0];
	cm2[1] = cm[1]-cm1[1];
	cm2[2] = cm[2]-cm1[2];
	let d1='', d2='';
	if(app===1){
		d1 = 'Today App';
		d2 = 'Yesterday App';
	}else{
		d1 = 'Today';
		d2 = 'Yesterday';
	}
	console.log(
		getDetailedStr(c1, cf1, cm1, arr1, d1)
		+getDetailedStr(c2, cf2, cm2, arr2, d2)
		+getTotalStr(c1, cf1, cm1, d1)
		+getTotalStr(c2, cf2, cm2, d2)
	);
}
function getDetailedStr(c, cf, cm, arr, d){
	let l = arr.length;
	let str = '';
	str += getTotalStr(c, cf, cm, d);
	for(let i=0; i<l; i++){
		str += '\n\n\t'+arr[i][0]+':\n\t\t'+arr[i][4]+'/'+arr[i][5]+'/'+arr[i][6]+' + '+arr[i][1]+'/'+arr[i][2]+'/'+arr[i][3]
			+' = '+sumToStr(arr[i][1], arr[i][4])+'/'+sumToStr(arr[i][2], arr[i][5])+'/'+sumToStr(arr[i][3], arr[i][6]);
	}
	return str;
}
function getTotalStr(c, cf, cm, d){
	let str = '';
	str += '\n\n/**************************************************/\n'+d+':\n\t'
		+cm[0]+'/'+cm[1]+'/'+cm[2]+' + '+cf[0]+'/'+cf[1]+'/'+cf[2]+' = '+c[0]+'/'+c[1]+'/'+c[2];
	str += '\n\t(Male + Female = Total)\n';
	return str;
}
function sumToStr(a, b){
	return (parseInt(a)+parseInt(b)).toString();
}
function getStatFromTd(inner){
	let arr = [
		getTdNumber(inner, 1, 0),
		getTdNumber(inner, 1, 1),
		getTdNumber(inner, 1, 2),
		getTdNumber(inner, 3, 0),
		getTdNumber(inner, 3, 1),
		getTdNumber(inner, 3, 2)
	];
	return arr;
}
function getTdNumber(inner, i, j){
	return parseInt(inner.split(/[\n+\s+]/)[i].split('/')[j].replace(/\s+/g, ''));
}
function match(app, stct, str, trs, i, patt, s){
	if(app===1){
		let appPatt = /(ios app)|(andriod app)/i;
		if(stct===1){
			return appPatt.test(trs[i].getElementsByTagName('td')[s-2].innerText)
				&& (trs[i].getElementsByTagName('td')[s-1].innerText===str);
		}else{
			return appPatt.test(trs[i].getElementsByTagName('td')[s-2].innerText)
				&& patt.test(trs[i].getElementsByTagName('td')[s-1].innerText);
		}
	}else{
		if(stct===1){
			return trs[i].getElementsByTagName('td')[s-1].innerText===str;
		}else{
			return patt.test(trs[i].getElementsByTagName('td')[s-1].innerText);
		}
	}
}
function getSplitTrIndex(trs){
	let index = 1;
	for(let i=0; i<trs.length; i++){
		if(trs[i].getElementsByTagName('td').length===1 && trs[i-1].getElementsByTagName('td').length===3
			&& trs[i+1].getElementsByTagName('td').length===3){
			index = i;
			return index;
		}
	}
	return index;
}
getDailyStatByGender('jonas');