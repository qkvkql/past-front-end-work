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