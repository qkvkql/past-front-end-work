//gold table
function importJs(url){let createJsScript=document.createElement('script');createJsScript.setAttribute('type','text/javascript');createJsScript.setAttribute('src',url);document.getElementsByTagName('head')[0].appendChild(createJsScript)}
importJs('https://www.cub.name/js/monthlyGold/monthlyGoldTable.min.js');
/*
console.clear();
getMonthlyGoldTable();
*/

//tid statistics
function importJs(url){let createJsScript=document.createElement('script');createJsScript.setAttribute('type','text/javascript');createJsScript.setAttribute('src',url);document.getElementsByTagName('head')[0].appendChild(createJsScript)}
importJs('https://www.cub.name/js/getTids/gettids.min.js');
/*
console.clear();
getTids('!phoebe|!poseidon|!colin|!nepenthe|!jasmyn|!688-1|!anne|!1may','jerry','2019-07-10');
*/

//import jquery
function importJs(url){let createJsScript=document.createElement('script');createJsScript.setAttribute('type','text/javascript');createJsScript.setAttribute('src',url);document.getElementsByTagName('head')[0].appendChild(createJsScript)}
importJs('https://www.cub.name/allsites/jquery.js');

//array de-duplication
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

//import external js file to the console of chrome
function importJs(url){
	let createJsScript = document.createElement('script');
	createJsScript.setAttribute('type','text/javascript');
	createJsScript.setAttribute('src',url);
	document.getElementsByTagName('head')[0].appendChild(createJsScript);
}