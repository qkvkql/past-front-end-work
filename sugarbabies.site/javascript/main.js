document.addEventListener('DOMContentLoaded',function(event){
    setTidsByUrlParam();
	setLength();
	window.onresize = function () {
		setLength();
	}
});
function setTidsByUrlParam () {
    /*************** START settings by url param value ***************/
    (function(){
		/* START set tid */
		let prefixText = 'prefix', classText = 'class', p = 0, c = 0;
		function addNewPrefix () {
			p += 1;
			return prefixText + p.toString();
		}
		function addNewClass () {
			c += 1;
			return classText + c.toString();
		}
		let trackingIdObj = {
			//url suffix relevant
			urlTidParamName: 'u',
			defaultTidIfNoUrlValue: 'Jon01',
			
			//sdm home page
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/i/',
			[addNewClass()]: 'trackSdmHome',
			//sdm guest/registration page
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/guest?tid=',
			[addNewClass()]: 'trackSdmGuest',
			//sdm login page
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/login?tid=',
			[addNewClass()]: 'trackSdmLogin',
			//sdm android app page
			[addNewPrefix()]: 'https://app.appsflyer.com/com.sugardaddydating.sugardaddymeet?pid=',
			[addNewClass()]: 'trackSdmAndroid',
			//sdm ios app page
			[addNewPrefix()]: 'https://app.appsflyer.com/id1533577373?pid=',
			[addNewClass()]: 'trackSdmIos',
			//sdm service agreement
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/service_agreement?tid=',
			[addNewClass()]: 'trackSdmServiceAgreement',
			//sdm privacy policy
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/privacy_policy_?tid=',
			[addNewClass()]: 'trackSdmPrivacyPolicy',
			//sdm extra privacy
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/extraPrivacy?tid=',
			[addNewClass()]: 'trackSdmExtraPrivacy',
			//sdm blog
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/sugar-daddy-dating-blog?tid=',
			[addNewClass()]: 'trackSdmBlog',
			//sdm large blog
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/visitor_blog?tid=',
			[addNewClass()]: 'trackSdmLargeBlog',
			//sdm press
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/pressNews?tid=',
			[addNewClass()]: 'trackSdmPress',
			//sdm about
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/aboutUs?tid=',
			[addNewClass()]: 'trackSdmAbout',
			//sdm feadback
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/contactUs?selectTopicItem=8&tid=',
			[addNewClass()]: 'trackSdmFeadback',
			//sdm faq
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/faq?tid=',
			[addNewClass()]: 'trackSdmFaq',
			//sdm suggestion
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/contactUs?selectTopicItem=8&tid=',
			[addNewClass()]: 'trackSdmSuggestion',
			//sdm story
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/success_stories.html?tid=',
			[addNewClass()]: 'trackSdmStory',
			//sdm affiliate
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/affiliate?tid=',
			[addNewClass()]: 'trackSdmAffiliate',
			//sdm fan
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/ourSuprFans?tid=',
			[addNewClass()]: 'trackSdmFan',
			//sdm idea
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/first_date_ideas.html?tid=',
			[addNewClass()]: 'trackSdmIdea',
			//sdm forum
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/forums?tid=',
			[addNewClass()]: 'trackSdmForum',
			//sdm advice
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/dating_advices?tid=',
			[addNewClass()]: 'trackSdmAdvice',
			//sdm australia
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/sugar-daddy-australia.html?tid=',
			[addNewClass()]: 'trackSdmAustralia',
			//sdm brisbane
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/sugar-daddy-brisbane.html?tid=',
			[addNewClass()]: 'trackSdmBrisbane',
			//sdm melbourne
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/sugar-daddy-melbourne.html?tid=',
			[addNewClass()]: 'trackSdmMelbourne',
			//sdm sydney
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/sugar-daddy-sydney.html?tid=',
			[addNewClass()]: 'trackSdmSydney',
			//sdm singapore
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/sugar-daddy-singapore.html?tid=',
			[addNewClass()]: 'trackSdmSingapore',
			//sdm uk
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/sugar-daddy-uk.html?tid=',
			[addNewClass()]: 'trackSdmUk',
			//sdm usa
			[addNewPrefix()]: 'https://www.sugardaddymeet.com/sugar-daddy-usa.html?tid=',
			[addNewClass()]: 'trackSdmUsa'
		};
		trackUsers();
		function trackUsers () {
			//apply on all elements
			for (let i = 1; i <= p; i++) {
				f(prefixText + i.toString(), classText + i.toString());
			}
			//create a function to simplify the process of applying on all elements
			function f (prefix, htmlClassName) {
				let elementsByClass = document.getElementsByClassName(trackingIdObj[htmlClassName]);
				for (let i = 0; i < elementsByClass.length; i++) {
					elementsByClass[i].setAttribute('href', trackingIdObj[prefix] + getUrlParamValue(trackingIdObj.urlTidParamName, trackingIdObj.defaultTidIfNoUrlValue));
				}
			}
			
		}
		/* END set tid */
		/* START set title keywords */
		let titleKeyWordsObj = {
			defaultTitle: 'NO.1 UPSCALE SUGAR DADDY DATING SITE',
			htmlId: 'title',
			urlKeyWordsPramName: 't',
			delimiter: '+'
		}
		let encDec = new encObj();
		setAdKeyWordsInTitle(titleKeyWordsObj.htmlId, titleKeyWordsObj.urlKeyWordsPramName, titleKeyWordsObj.delimiter);
		function setAdKeyWordsInTitle (id, urlParamName, delimiter) {
			let e = document.getElementById(id);
			let encodedKw = getUrlParamValue(urlParamName, EncPhrase(titleKeyWordsObj.defaultTitle));
			let str = '';
			function encodedKwToArr (encodedKw) {
				let arr = encodedKw.split(delimiter);
				for (let i = 0; i < arr.length; i++) {
					str += setUpperLower(encDec.backward(arr[i])) + ' ';
				}
				return str.trim();
			}
			function EncPhrase(str) {
				let arr = str.split(' ');
				let l = arr.length;
				let result = '';
				for (let i = 0; i < l - 1; i++) {
					result += encDec.forward(arr[i].trim()) + '+';
				}
				result += encDec.forward(arr[l - 1].trim());
				return result;
			}
			function setUpperLower(str) {
				if (str.length === 0) {
					return str;
				} else if (str.length === 1) {
					return str.toUpperCase();
				} else if (str === str.toUpperCase()) {
					return str;
				} else {
					let s = "";
					let full = "";
					for (let i = 1; i < str.length; i++) {
						s += str[i];
					}
					full = str[0].toUpperCase() + s.toLowerCase();
					return full;
				}
			}
			if (encodedKw.length > 0) {
				e.innerText = encodedKwToArr(encodedKw);
			}
		}
		/* END set title keywords */
		
		function getUrlParamValue (paramName, defaultTid) {
			let urlParamStr = window.location.search.substring(1); //get url parameter part string
			let urlParamArr = urlParamStr.split('&').filter(e => e && e.trim()); //put each parameter to an array
			let hasParam = false;
			for (let i = 0; i < urlParamArr.length; i++) {
				let kvArr = urlParamArr[i].split('='); //put name and value of each parameter to an temporary array
				if (kvArr[0] === paramName) {
					hasParam === true;
					return kvArr[1];
				}
			}
			if (!hasParam) {
				return defaultTid;
			}
		}
	})();
    /*************** END settings by url param value ***************/
}

function setLength () {
	let header = document.getElementsByTagName('header')[0];
	let content = document.getElementsByClassName('content')[0];
	let bannerLeftW = document.getElementsByClassName('banner-left-w')[0];
	let bannerRightW = document.getElementsByClassName('banner-right-w')[0];
	content.style.marginTop = header.offsetHeight + 'px';
	bannerRightW.style.height = bannerLeftW.offsetHeight - 40 + 'px';
}

//*************************************************START encObj*************************************************
function encObj(){var range = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_:./'; var letterRange = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; this.forward = forward; this.backward = backward; this.getCodeArray = getCodeArray; this.regRef = regRef; this.getEnRanRef = getEnRanRef; this.strictFilter = strictFilter; function forward(str){var regStr = str.replace(/((?![\w\.\-:/]).)/g,''); return forwardShift(forwardRef(regStr));} function backward(code){if(code.length!==0){return backwardRef(backwardShift(code));}else{return '';}} function backwardRef(array){var codeResult = '';for(var i=0; i<array.length; i++){codeResult += range[getEnRanRef().indexOf(array[i])];}return codeResult;} function backwardShift(code){var codeResult = [];code = code.replace(/((?![A-Za-z\d]).)/g,'');var codeArray = strictFilter(getEnRanRef(), getCodeArray(code));if(codeArray.length!==0){for(var i=0; i<codeArray.length; i++){if(i%3===0){if((getEnRanRef().indexOf(codeArray[i])-5)>=0){codeResult[i] = getEnRanRef()[(getEnRanRef().indexOf(codeArray[i])-5)];}else{codeResult[i] = getEnRanRef()[((getEnRanRef().indexOf(codeArray[i])+getEnRanRef().length)-5)];}}else if(i%3===1){if((getEnRanRef().indexOf(codeArray[i])-2)>=0){codeResult[i] = getEnRanRef()[(getEnRanRef().indexOf(codeArray[i])-2)];}else{codeResult[i] = getEnRanRef()[((getEnRanRef().indexOf(codeArray[i])+getEnRanRef().length)-2)];}}else{if((getEnRanRef().indexOf(codeArray[i])-3)>=0){codeResult[i] = getEnRanRef()[(getEnRanRef().indexOf(codeArray[i])-3)];}else{codeResult[i] = getEnRanRef()[((getEnRanRef().indexOf(codeArray[i])+getEnRanRef().length)-3)];}}}return codeResult;}else{return [];}} function strictFilter(refArray, testArray){while(!regRef(refArray, testArray)){for(var i=0; i<testArray.length; i++){if(refArray.indexOf(testArray[i]) > -1){continue;}else{testArray.splice(i,1);break;}}}return testArray;} function regRef(refArray, testArray){var s = true;for(var i=0; i<testArray.length; i++){if(refArray.indexOf(testArray[i]) > -1){continue;}else{s = false;break;}}return s;} function getEnRanRef(){var rangeRef = [];for(var i=0; i<letterRange.length; i++){rangeRef[i] = letterRange[i];}for(var i=letterRange.length; i<range.length; i++){rangeRef[i] = letterRange[parseInt((i-letterRange.length)/10)]+((i-letterRange.length)%10);}return rangeRef;} function getCodeArray(code){var codeArray = [];var j = 0;for(var i=0; i<code.length; i++){if(/[A-Za-z]/.test(code[i])){if((i+1)<code.length&&/[A-Za-z]/.test(code[i+1])){codeArray[j] = code[i];j += 1;}else if((i+1)<code.length&&!(/[A-Za-z]/.test(code[i+1]))){codeArray[j] = code[i]+code[i+1];j += 1;}else{codeArray[j] = code[i];j += 1;}}else{continue;}}return codeArray;} function forwardRef(str){var strArray = [];var strResult = '';if(str.length!==0){for(var i=0; i<str.length; i++){strArray[i] = getEnRanRef()[range.indexOf(str[i])];strResult += strArray[i];}return strResult;}else{return '';}} function forwardShift(str){var strArray = getCodeArray(str);var strResult = '';if(strArray.length!==0){for(var i=0; i<strArray.length; i++){if(i%3===0){strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i])+5)%(getEnRanRef().length)];}else if(i%3===1){strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i])+2)%(getEnRanRef().length)];}else{strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i])+3)%(getEnRanRef().length)];}}return strResult;}else{return '';}}}
// let emo = new encObj();
// emo.forward('word1') + '+' + emo.forward('word2') + '+' + emo.forward('word3') + '+' + emo.forward('word4') + '+' + emo.forward('word5') + '+' + emo.forward('word6') + '+' + emo.forward('word7') + '+' + emo.forward('word8');
//*************************************************END encObj*************************************************