document.addEventListener('DOMContentLoaded',function(event){ //code in excuted after dom content loaded
	setTimeout(removeWelcome, prdWelcome);
	setTimeout(completeAnimation, prdBar); //set a timeout for the complete animation
});
let clrObj = { //object of 道 and color
	'河北道': '#f44336',
	'河南道': '#e91e63',
	'江南东道': '#795548',
	'剑南道': '#2196f3',
	'河东道': '#960059',
	'江南西道': '#4caf50',
	'京畿道': '#8a4af3',
	'淮南道': '#c34a4e',
	'都畿道': '#ff9800',
	'关内道': '#ffc107',
	'山南东道': '#00bcd4',
	'山南西道': '#cddc39',
	'岭南道': '#009688',
	'陇右道': '#96000e',
	'黔中道': '#8bc34a'
}
let myData = new cityData(); //create instance of cityData
let data = myData.getPersonNum(); //get population data of primary sorting item
let barW = 900; //max width(px) of the bar
let barH = 30; //height(px) of the bar
let barPad = 20; //margin between neighboring bar
let maxBottom = 370; //css bottom attribute of the top bar element
let miSec = 250, minSec = 0.1*miSec, newMiSec = 16*miSec; //set interval time to loop the animation
let prdWelcome = 3000; //set welcome end time out
let prdBar = 5000; //set bar start time out
let prdEnd = 5000; //set end start time out
let maxRowNum = 10; //max row number
let className = 'bar'; //class name of the bar
let textClassName = 'text'; //class name of the text div in front of the bar
let id = []; //id array of the bars
let textId = []; //id array of text divs
var l = myData.length; //number of city data
let counter = 0; //counter to loop
let intervalId; //declare global variable of interval id in use of terminate the interval animation
let relative = document.getElementsByClassName('relative'); //get first .relative div
//remove welcome page
function removeWelcome(){
	let welcome = document.getElementsByClassName('welcome')[0]; //get first .welcome element
	welcome.innerText = ''; //set content
	welcome.style.zIndex = '-1'; //decrease z-index
}
//run the complete animation from start to end
function completeAnimation(){
	document.getElementsByClassName('location')[0].style.color = '#000000'; //make location title visible
	createDiv(); //create bar div
	createTextDiv(); //create text div
	fillText(); //fill text to html
	intervalId = setInterval(stdAnimation, newMiSec); //loop stdAnimation
}
//a standard & complete animation to loop
function stdAnimation(){
	moveDiv(); //move down all bars for 1 time
	createDiv(); //create bar div
	createTextDiv(); //create text div
	fillText(); //fill text to html
}
//move all existing bar and textDiv down for 1 time
function moveDiv(){
	for(let i=counter; i>=0 && i>counter-maxRowNum+1; i--){
		//change width of bar div by ratio, change bottom value of bar div for 1 time
		$('#'+id[i]).animate({width: data[i]/data[counter+1]*barW, bottom: (maxBottom-(barH+barPad)*(counter-i+1))+'px'}, miSec);
		//change bottom value of text div for 1 time
		$('#'+textId[i]).animate({bottom: (maxBottom-(barH+barPad)*(counter-i+1))+'px'}, miSec);
	}
	$('#'+id[counter-maxRowNum+1]).animate({opacity: '0'}, minSec); //hide last bar div of current
	$('#'+textId[counter-maxRowNum+1]).animate({opacity: '0'}, minSec); //hide last text div of current
	counter += 1; //counter increment
}
//create bar
function createDiv(){
	id[counter] = className+Number(counter).toString(); //create id that required later
	let d = document.createElement('div'); //create div
	d.setAttribute('class', className); //set class
	d.setAttribute('id', className+Number(counter).toString()); //set id
	d.style.bottom = maxBottom+'px'; //set bottom
	d.style.background = clrObj[myData.getDaoName()[counter]]; //set background color
	d.innerText = myData.getDaoName()[counter]+' - '+myData.getCountyName()[counter]; //current bar text
	relative[0].appendChild(d); //add div element
	$('#'+id[counter]).animate({opacity: 1}, minSec); //display div
}
//create div at the left of bar
function createTextDiv(){
	textId[counter] = textClassName+Number(counter).toString(); //create id that required later
	let textD = document.createElement('div'); //create div
	textD.setAttribute('class', textClassName); //set class
	textD.setAttribute('id', textClassName+Number(counter).toString()); //set id
	textD.style.bottom = maxBottom+'px'; //set bottom
	textD.innerText = myData.getPersonNumStr()[counter]; //current bar text
	relative[0].appendChild(textD); //add div element
}
//fill text & data to html
function fillText(){
	document.getElementById('serial').innerText = (parseInt(l)-parseInt(counter)).toString(); //serial number
	document.getElementsByClassName('title')[0].innerHTML = '<span class="dao_name">'+myData.getDaoName()[counter]+'-</span>'+myData.getCountyName()[counter]; //county and dao
	document.getElementById('location').innerText = myData.getLocation()[counter]; //location
	document.getElementById('person').innerText = myData.getPersonNumStr()[counter]; //person number
	document.getElementById('family').innerText = myData.getFamilyNumStr()[counter]; //family number
	document.getElementById('avgx').innerText = myData.getAvgPerOfXian()[counter]; //avg person per xian
	document.getElementById('avgf').innerText = myData.getAvgPerOfFmly()[counter]; //avg person per family
	document.getElementById('number').innerText = myData.getXianNum()[counter]; //xian number under county
	document.getElementById('leader').innerText = myData.getLeaderXian()[counter]; //leader xian
	document.getElementById('other').innerText = myData.getOtherXian()[counter]; //other xian
	if(counter===l-1){ //set condition to terminate the interval animation
		clearInterval(intervalId); //terminate interval
		setTimeout(displayEnd, prdEnd); //display end page
	}
}
//display end page
function displayEnd(){
	let end = document.getElementById('end'); //get element with id #end
	end.setAttribute('class', 'end'); //set class
	end.style.zIndex = 2; //increase z-index so the end page can be the top priority
	document.getElementById('end_thx').innerText = '谢谢观看！'; //end title
	document.getElementById('end_refTi').innerText = '参考'; //reference title
	document.getElementById('end_refText').innerHTML = '《新唐书》(欧阳修、宋祁 等 著)<br/>《中国历史地图集》(谭其骧 著)'; //reference
	document.getElementById('exp_ti').innerText = '备注'; //expression title
	document.getElementById('exp_text').innerHTML = '仅列户数、口数、领县均有完整记载的郡/州<br/>可随意转载'; //expression
}
//remove ',' from number string
function getNumber(str){
	let a = str.split(','); //split str to array a by ','
	let newStr = a.join(''); //join element value of array a
	return parseInt(newStr); //return a Number
}
//method of city data
function cityData(){
	let l = cityArr.length; //get number of city data
	this.length = l; //attribute
	this.getDaoName = () => { //get name array of 道
		let arr = []; //declare array
		for(let i=0; i<l; i++){ 
			arr[i] = cityArr[l-i-1][0]; //retrieve data from array cityArr to arr
		}
		return arr;
	}
	this.getCountyName = () => { //get name array of 郡
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = cityArr[l-i-1][1];
		}
		return arr;
	}
	this.getLocation = () => { //get current location of 郡
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = cityArr[l-i-1][2];
		}
		return arr;
	}
	this.getXianNum = () => { //get number of 县
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = cityArr[l-i-1][3];
		}
		return arr;
	}
	this.getLeaderXian = () => { //get 郡治 array
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = cityArr[l-i-1][4];
		}
		return arr;
	}
	this.getOtherXian = () => { //get 其它县 array
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = cityArr[l-i-1][5];
		}
		return arr;
	}
	this.getFamilyNum = () => { //get 户数 array of Number format
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = getNumber(cityArr[l-i-1][6]);
		}
		return arr;
	}
	this.getFamilyNumStr = () => { //get 户数 array of str format
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = cityArr[l-i-1][6];
		}
		return arr;
	}
	this.getPersonNum = () => { //get 口数 array of Number format
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = getNumber(cityArr[l-i-1][7]);
		}
		return arr;
	}
	this.getPersonNumStr = () => { //get 口数 array of str format
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = cityArr[l-i-1][7];
		}
		return arr;
	}
	this.getAvgPerOfXian = () => { //get 县均口数 array
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = cityArr[l-i-1][8];
		}
		return arr;
	}
	this.getAvgPerOfFmly = () => { //get 户均口数 array
		let arr = [];
		for(let i=0; i<l; i++){
			arr[i] = cityArr[l-i-1][9];
		}
		return arr;
	}
}