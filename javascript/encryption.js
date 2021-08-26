document.addEventListener('DOMContentLoaded',function(event){
	document.getElementsByClassName('href_by')[0].setAttribute('href','http://www.sugardaddymeet.com/guest');
	document.getElementsByClassName('href_by')[0].onclick = function(){
		this.setAttribute('href','http://www.sugardaddymeet.com/guest?tid=Jon01');
	}
	setState.hide();
	document.getElementsByClassName('enc-input-tag')[2].onkeydown = function(){
		if(window.event.keyCode == 13){
			enter();
		}
	}
	document.getElementsByClassName('submit')[0].onclick = function(){
		enter();
	}
	document.getElementsByClassName('submit')[1].onclick = function(){
		setState.hide();
	}
});

function enter(){
	if(document.getElementsByClassName('enc-input-tag')[2].value=='0727'){
		setState.display();
		shiftEncUI();
	}
}

setState = new state();
function state(){
	this.hide = function(){
		document.getElementsByClassName('enc-title')[0].style.display = 'none';
		document.getElementsByClassName('enc-input')[0].style.display = 'none';
		document.getElementsByClassName('enc-title')[1].style.display = 'none';
		document.getElementsByClassName('enc-input')[1].style.display = 'none';
		document.getElementsByClassName('enc-title')[2].style.display = 'block';
		document.getElementsByClassName('enc-input')[2].style.display = 'block';
		document.getElementsByClassName('enc-submit')[0].style.display = 'block';
		document.getElementsByClassName('enc-submit')[1].style.display = 'none';
		document.getElementsByClassName('enc-input-tag')[2].value = '';
	}
	this.display = function(){
		document.getElementsByClassName('enc-title')[0].style.display = 'block';
		document.getElementsByClassName('enc-input')[0].style.display = 'block';
		document.getElementsByClassName('enc-title')[1].style.display = 'block';
		document.getElementsByClassName('enc-input')[1].style.display = 'block';
		document.getElementsByClassName('enc-title')[2].style.display = 'none';
		document.getElementsByClassName('enc-input')[2].style.display = 'none';
		document.getElementsByClassName('enc-submit')[0].style.display = 'none';
		document.getElementsByClassName('enc-submit')[1].style.display = 'block';
	}
}

function shiftEncUI(){
	document.getElementsByClassName('enc-input-tag')[0].oninput = function(){
		this.value = this.value.replace(/((?![\w\.\-:/]).)/g,'');
		var encryptionResult = Cipher.encode(this.value);
		document.getElementsByClassName('enc-input-tag')[1].value = encryptionResult;
	};
	document.getElementsByClassName('enc-input-tag')[1].oninput = function(){
		this.value = this.value.replace(/((?![A-Za-z\d]).)/g,'');
		var codeArray = Cipher.strictFilter(Cipher.getEnRanRef(), Cipher.getCodeArray(this.value));
		this.value = codeArray.join('');
		document.getElementsByClassName('enc-input-tag')[0].value = Cipher.decode(this.value);
	};
}
/****************************************START shift encryption****************************************/
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
/****************************************END shift encryption****************************************/

/****************************************START mapping encryption****************************************/
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
/****************************************END mapping encryption****************************************/