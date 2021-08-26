let React = new emo(); //INSTANTIATE
let numberObj = { //NUMBER
	"sdmLatestDate": '2021-05-14',
	"sdmTotalMember": '5,513,195',
	"sdmFemaleMember": '4,459,673',
	"sdmMaleMember": '1,053,522',
	"sdmIosVersion": '1.4.3',
	"sdmAndroidVersion": '7.1.9'
};
let externalLinksObj = { //EXTERNAL LINKS
	'Sugar Daddy Site': React.backward('wA5A6A4A4AEBA9B1A8BA7A6tpA3qpA5vA2sA5xA5rDzrA8'),
	'Sugar Baby Site': React.backward('wA5A6A4A4AEBA9B1A8BA7A6tpA3qpA5vA2sA5xA5rDA0A4v'),
	'Sugar Daddy Sites': React.backward('wA5A6A4A4AEBA9B1A8BA7A6tpA3qppqB3A8rqA4vA8qA5DA9B1B4'),
	'Site for Sugar Daddy': React.backward('wA5A6A4A4AEBA9B1A8BA7uA6trA1A6A4A7vmA4smqsB0BrA0z'),
	'Site for Sugar Daddies': React.backward('wA5A6A4A4AEBA9B1A8BA7uA6trA1A6A4A7vmA4smqsurA7ApA3y'),
	'Seeking Sugar Daddies': React.backward('wA5A6A4A4AEBA9B1A8BA7qrzuA0vpnspB1A1qrA8ApA3y')
};
//*************************************************START url and tid set for every domain*************************************************
function setTidsOfDomains(){ //Now it's used to set tids for abandoned websites, on going websites tids are set in the page
	domainsAndTids('YA0A0pA4', 'YA0A0pA4', '', '', 'A7A6tpA3qppqB3B2B3B1qoA7uA6tA4BrA6oDznA1q'); //sdw.c.n
	domainsAndTids('YA0A0pA4', 'YA0A0pA4', '', '', 'A1uyA0uA1A2mvA6qqpA5vA2sA5xA5rDoA7qAA0pyr'); //mds.c.n
	domainsAndTids('YA0A0pA4', 'YA0A0pA4', '', '', 'A6upwyvA0xvA3znxA3rsmA6xztDoA7qAA0pyr'); //rmd.c.n
	domainsAndTids('YA0A0pA4', 'YA0A0pA4', '', '', 'A8trA1uyA0uA1A2mvA6qzpA5pwqA5DoA7qAA0pyr'); //tmm.c.n
}
function domainsAndTids(m, s, b, p, d){let patt = new RegExp(React.backward(d), 'g'); if(patt.test(getP())){setUrlAndTidOfEveryDomain(React.backward(m), React.backward(s), React.backward(b), React.backward(p));}}
function getP(){return window.location.hostname;}
//*************************************************END url and tid set for every domain*************************************************
//*************************************************START DOM content loaded*************************************************
document.addEventListener('DOMContentLoaded',function(event){
	setTidsOfDomains();
	setNumber();
	setExternalLinks("externalLinks");
	setSharePopUpWindow();
	setShareUrl();
});
//*************************************************END DOM content loaded*************************************************
//*************************************************START url and tid*************************************************
function setUrlAndTidOfEveryDomain(tidInMm, tidInSdm, tidInBi, tidInPs){
	var formI = '/i/';
	var formQuestionMark = '?tid=';
	var formMoReOne = '/RegisterOne?tid='; // /mobile/RegisterOne?tid=
	var formMoGuiPreReOne = '/guidelines?prev=registerOne?tid='; // /mobile/guidelines?prev=registerOne?tid=
	var mmHome = 'https://www.millionairematch.com';
	var mmAppStore = 'https://app.appsflyer.com/id1444573271';
	var mmGooglePlay = 'https://app.appsflyer.com/com.millionairedating.millionairematch';
	var sdmHome = 'https://www.sugardaddymeet.com';
	var sdmAppStore = 'https://app.appsflyer.com/id1533577373';
	var sdmGooglePlay = 'https://app.appsflyer.com/com.sugardaddydating.sugardaddymeet';
	var biHome = 'https://www.bicupid.com';
	var biAppStore = '';
	var biGooglePlay = '';
	var psHome = 'https://www.positivesingles.com';
	var psAppStore = '';
	var psGooglePlay = '';
	var appStore = 'https://www.apple.com/ios/app-store/'; //apple app store official site
	var googlePlay = 'https://play.google.com/store/'; //google play store official site
	
	//Millionaire Match
	url('href_mmhome',mmHome,formI+tidInMm);//home
	url('href_mmlogin',mmHome+'/login',formQuestionMark+tidInMm);//login
	url('href_mmguest',mmHome+'/guest',formQuestionMark+tidInMm);//guest
	url('href_mmmobile',mmHome+'/app',formQuestionMark+tidInMm);//mobile
	url('href_mmaboutus',mmHome+'/about_us',formQuestionMark+tidInMm);//about us
	url('href_mmcontactus',mmHome+'/feedbacks',formQuestionMark+tidInMm);//contact us
	url('href_mmhelp',mmHome+'/faq',formQuestionMark+tidInMm);//help
	url('href_mmserviceagreement',mmHome+'/service_agreement',formQuestionMark+tidInMm);//service agreement
	url('href_mmprivacypolicy',mmHome+'/privacy_policy_',formQuestionMark+tidInMm);//privacy policy
	url('href_mmsuccessstories',mmHome+'/success_stories.html',formQuestionMark+tidInMm);//success stories
	url('href_mmpress',mmHome+'/press_news',formQuestionMark+tidInMm);//press
	url('href_mmaffiliates',mmHome+'/affiliate/',formQuestionMark+tidInMm);//affiliates
	url('href_mmmembersluxuries',mmHome+'/luxuries_show',formQuestionMark+tidInMm);//members luxuries
	url('href_mmcelebrityinterviews',mmHome+'/articles/1/Celebrity-Interviews',formQuestionMark+tidInMm);//celebrity interviews
	url('href_mmdatingadvice',mmHome+'/dating_advices',formQuestionMark+tidInMm);//dating advice
	url('href_mmmillionairedating',mmHome+'/millionaire-dating.html',formQuestionMark+tidInMm);//millionaire dating
	url('href_mmmillionairematchmaker',mmHome+'/Millionaire-matchmaker.html',formQuestionMark+tidInMm);//millionaire matchmaker
	url('href_mmrichwomendating',mmHome+'/rich-women-dating.html',formQuestionMark+tidInMm);//rich women dating
	url('href_mmrichmendating',mmHome+'/rich-men-dating.html',formQuestionMark+tidInMm);//rich men dating
	url('href_mmluxurylifestyleblogs',mmHome+'/articles',formQuestionMark+tidInMm);//luxury lifestyle blogs
	
	appUrl('href_mmappstore',appStore,'millionairematch',mmAppStore+'?pid=',tidInMm);//apple app store
	appUrl('href_mmgoogleplay',googlePlay,'millionairematch',mmGooglePlay+'?pid=',tidInMm);//google play store
	
	//Sugar Daddy Meet
	url('href_sdmhome',sdmHome,formI+tidInSdm);//home
	url('href_sdmguest',sdmHome+'/guest',formQuestionMark+tidInSdm);//guest
	url('href_sdmlogin',sdmHome+'/login',formQuestionMark+tidInSdm);//login
	url('href_sdmblog',sdmHome+'/sugar-daddy-dating-blog',formQuestionMark+tidInSdm);//blog
	url('href_sdmpress',sdmHome+'/press',formQuestionMark+tidInSdm);//press
	url('href_sdmaboutus',sdmHome+'/about_us',formQuestionMark+tidInSdm);//about us
	url('href_sdmcontactus',sdmHome+'/feedbacks',formQuestionMark+tidInSdm);//contact us
	url('href_sdmhelp',sdmHome+'/faq',formQuestionMark+tidInSdm);//help
	url('href_sdmserviceagreement',sdmHome+'/service_agreement',formQuestionMark+tidInSdm);//service agreement
	url('href_sdmprivacypolicy',sdmHome+'/privacy_policy_',formQuestionMark+tidInSdm);//privacy policy
	url('href_sdmsuggestion',sdmHome+'/feedback?section=send_us_feedback',formQuestionMark+tidInSdm);//sugesstion
	url('href_sdmsuccessstories',sdmHome+'/success_stories.html',formQuestionMark+tidInSdm);//success stories
	url('href_sdmaffiliates',sdmHome+'/affiliate/',formQuestionMark+tidInSdm);//affiliates
	url('href_sdmfirstdateideas',sdmHome+'/first_date_ideas.html',formQuestionMark+tidInSdm);//first date ideas
	url('href_sdmforums',sdmHome+'/forums',formQuestionMark+tidInSdm);//forums
	url('href_sdmdatingadvice',sdmHome+'/dating_advices',formQuestionMark+tidInSdm);//dating advice
	url('href_sdmaustralia',sdmHome+'/sugar-daddy-australia.html',formQuestionMark+tidInSdm);//Australia
	url('href_sdmbrisbane',sdmHome+'/sugar-daddy-brisbane.html',formQuestionMark+tidInSdm);//Brisbane
	url('href_sdmmelbourne',sdmHome+'/sugar-daddy-melbourne.html',formQuestionMark+tidInSdm);//Melbourne
	url('href_sdmsydney',sdmHome+'/sugar-daddy-sydney.html',formQuestionMark+tidInSdm);//Sydney
	url('href_sdmsingapore',sdmHome+'/sugar-daddy-singapore.html',formQuestionMark+tidInSdm);//Singapore
	url('href_sdmuk',sdmHome+'/sugar-daddy-uk.html',formQuestionMark+tidInSdm);//UK
	url('href_sdmusa',sdmHome+'/sugar-daddy-usa.html',formQuestionMark+tidInSdm);//USA
	
	appUrl('href_sdmappstore',appStore,'sugardaddymeet',sdmAppStore+'?pid=',tidInSdm);//apple app store
	appUrl('href_sdmgoogleplay',googlePlay,'sugardaddymeet',sdmGooglePlay+'?pid=',tidInSdm);//google play store
	
	//Bicupid
	url('href_bihome',biHome,formI+tidInBi);//home
	url('href_biguest',biHome+'/guest',formQuestionMark+tidInBi);//guest
	url('href_bilogin',biHome+'/login',formQuestionMark+tidInBi);//login
	url('href_bimobile',biHome+'/app',formQuestionMark+tidInBi);//mobile
	url('href_biaboutus',biHome+'/about_us',formQuestionMark+tidInBi);//about us
	url('href_bicontactus',biHome+'/feedbacks',formQuestionMark+tidInBi);//contact us
	url('href_bihelp',biHome+'/faq',formQuestionMark+tidInBi);//help
	url('href_biblog',biHome+'/bisexual-dating-blog',formQuestionMark+tidInBi);//blog
	url('href_biserviceagreement',biHome+'/service_agreement',formQuestionMark+tidInBi);//service agreement
	url('href_biprivacypolicy',biHome+'/privacy_policy_',formQuestionMark+tidInBi);//privacy policy
	url('href_bisuggestion',biHome+'/feedback?section=send_us_feedback',formQuestionMark+tidInBi);//suggestion
	url('href_bisuccessstories',biHome+'/success_stories.html',formQuestionMark+tidInBi);//success stories
	url('href_bipress',biHome+'/press_news',formQuestionMark+tidInBi);//press
	url('href_biaffiliates',biHome+'/affiliate/',formQuestionMark+tidInBi);//affiliates
	url('href_bisingles',biHome+'/bisexual-singles-top-US-Cities.htm',formQuestionMark+tidInBi);//singles
	url('href_bidating',biHome+'/bisexual-dating-united-states.htm',formQuestionMark+tidInBi);//dating
	url('href_bicanada',biHome+'/bi-dating-in-canada.htm',formQuestionMark+tidInBi);//Canada
	url('href_biwomen',biHome+'/bisexual-women.html',formQuestionMark+tidInBi);//women
	url('href_bimen',biHome+'/bisexual-men.html',formQuestionMark+tidInBi);//men
	url('href_bicouples',biHome+'/bisexual-couples.html',formQuestionMark+tidInBi);//couples
	url('href_bicuriouswomen',biHome+'/bi-curious-women.html',formQuestionMark+tidInBi);//curious women
	url('href_bicuriousmen',biHome+'/bi-curious-men.html',formQuestionMark+tidInBi);//curious men
	url('href_bicuriouscouples',biHome+'/bi-curious-couples.html',formQuestionMark+tidInBi);//curious couples
	
	appUrl('href_biappstore',appStore,'bicupid',biAppStore+'?pid=',tidInBi);//apple app store
	appUrl('href_bigoogleplay',googlePlay,'bicupid',biGooglePlay+'?pid=',tidInBi);//google play store
	
	//Positive Singles
	url('href_pshome',psHome,formI+tidInPs);//home
	url('href_psguest',psHome+'/guest',formQuestionMark+tidInPs);//guest
	url('href_pslogin',psHome+'/login',formQuestionMark+tidInPs);//login
	url('href_psmobile',psHome+'/app',formQuestionMark+tidInPs);//mobile
	url('href_psaboutus',psHome+'/about_us',formQuestionMark+tidInPs);//about us
	url('href_pscontactus',psHome+'/feedbacks',formQuestionMark+tidInPs);//contact us
	url('href_pshelp',psHome+'/faq',formQuestionMark+tidInPs);//help
	url('href_psserviceagreement',psHome+'/service_agreement',formQuestionMark+tidInPs);//service agreement
	url('href_psprivacypolicy',psHome+'/privacy_policy_',formQuestionMark+tidInPs);//privacy policy
	url('href_pssuggestion',psHome+'/feedback?section=send_us_feedback',formQuestionMark+tidInPs);//suggestion
	url('href_pssuccessstories',psHome+'/success_stories.html',formQuestionMark+tidInPs);//success stories
	url('href_psdatingadvice',psHome+'/dating_advices',formQuestionMark+tidInPs);//dating advice
	url('href_psherpesdatingblog',psHome+'/herpes-dating-support-blog',formQuestionMark+tidInPs);//herpes dating blog
	url('href_pshivdatingblog',psHome+'/hiv-dating-blog',formQuestionMark+tidInPs);//HIV dating blog
	url('href_psstddatingblog',psHome+'/std-dating-blog',formQuestionMark+tidInPs);//STD dating blog
	url('href_pspress',psHome+'/press',formQuestionMark+tidInPs);//press
	
	appUrl('href_psappstore',appStore,'positivesingles',psAppStore+'?pid=',tidInPs);//apple app store
	appUrl('href_psgoogleplay',googlePlay,'positivesingles',psGooglePlay+'?pid=',tidInPs);//google play store
	
	//Elite Singles
	directUrl('href_eshome','https://www.elitesingles.com');//home
	directUrl('href_esmobile','https://www.elitesingles.com/discover-elitesingles/features/app');//mobile
	directUrl('href_esguest','https://www.elitesingles.com/web/register')//guest
	//login(temporarily no)
	
	directAppUrl('href_esappstore',appStore,'elitesingles','https://apps.apple.com/us/app/elitesingles/id990571557');//apple app store
	directAppUrl('href_esgoogleplay',googlePlay,'elitesingles','https://play.google.com/store/apps/details?id=de.affinitas.za.co.elitesingles.and');//google play store
	
	//Onluxy
	directUrl('href_olhome','https://www.onluxy.com');//home
	directUrl('href_olmobile','https://www.onluxy.com/page?path=support');//mobile
	//guest(temporarily no)
	directUrl('href_ollogin','https://www.onluxy.com/sign.html#/sign_page')//login
	
	directAppUrl('href_olappstore',appStore,'onluxy','https://apps.apple.com/us/app/luxy-selective-dating/id873518909');//apple app store
	directAppUrl('href_olgoogleplay',googlePlay,'onluxy','https://play.google.com/store/apps/details?id=com.luxy');//google play store
	
	//Seeking
	directUrl('href_shome','http://reflexmedia.clqtrk.com/5FK54H/6JHXF/?sub1=jonas');//home
	directUrl('href_sguest','https://www.seeking.com/join');//guest
	directUrl('href_slogin','https://www.seeking.com/login');//login
	
	directAppUrl('href_sgoogleplay',googlePlay,'seeking','https://play.google.com/store/apps/details?id=com.infostream.seekingarrangement');//google play store
	
	//Rich Meet Beautiful
	directUrl('href_rmbhome','https://www.richmeetbeautiful.com');//home
	directUrl('href_rmbguest','https://www.richmeetbeautiful.com/#/create-account');//guest
	//login(temporarily no)
	
	directAppUrl('href_rmbgoogleplay',googlePlay,'richmeetbeautiful','https://play.google.com/store/apps/details?id=net.victoriamilan.androidapp');//google play store
	
	//Whats Your Price
	directUrl('href_wyphome','http://reflexmedia.clqtrk.com/5FK54H/9B9DM/?sub1=jonas');//home
	directUrl('href_wypguest','https://members.whatsyourprice.com/join?');//guest
	directUrl('href_wyplogin','https://members.whatsyourprice.com/login');//login
	
	//Secret Benefits
	directUrl('href_sbhome','https://www.secretbenefits.com');//home
	//guest(temporarily no)
	directUrl('href_sblogin','https://www.secretbenefits.com/login');//login
	
	//Miss Travel
	directUrl('href_mthome','https://www.misstravel.com');//home
	directUrl('href_mtguest','https://members.misstravel.com/join');//guest
	directUrl('href_mtlogin','https://members.misstravel.com');//login
	
	//Established Men
	directUrl('href_emhome','https://www.establishedmen.com');//home
	directUrl('href_emguest','https://establishedmen.com/search/public');//guest
	directUrl('href_emlogin','https://establishedmen.com/users/login');//login
}
function url(selector,urlDisplayed,urlAddition){var e = document.getElementsByClassName(selector); for(var i=0;i<e.length;i++){e[i].setAttribute('href',urlDisplayed); e[i].onclick=function(){this.setAttribute('href',urlDisplayed+urlAddition);}}}
function appUrl(selector, urlDisplayedToJoint, objectName, urlToJoint, tid){var e = document.getElementsByClassName(selector); for(var i=0;i<e.length;i++){e[i].setAttribute('href',urlDisplayedToJoint+objectName); e[i].onclick=function(){this.setAttribute('href',urlToJoint+tid);}}}
function afUrl(selector, urlDisplayed, urlReal){var e = document.getElementsByClassName(selector); for(var i=0;i<e.length;i++){e[i].setAttribute('href',urlDisplayed); e[i].onclick=function(){this.setAttribute('href',urlReal);}}}
function directUrl(selector,url){var e = document.getElementsByClassName(selector); for(var i=0;i<e.length;i++){e[i].setAttribute('href',url);}}
function directAppUrl(selector, urlDisplayedToJoint, objectName, urlRedirected){var e = document.getElementsByClassName(selector); for(var i=0;i<e.length;i++){e[i].setAttribute('href',urlDisplayedToJoint+objectName); e[i].onclick=function(){this.setAttribute('href',urlRedirected);}}}
//*************************************************END url and tid*************************************************
//*************************************************START share pop up window*************************************************
function setSharePopUpWindow(){var idShare = document.getElementById('share'); var classShareCloseContainer = document.getElementsByClassName('shareclose_container'); var classSharePopUp = document.getElementsByClassName('share_popup'); idShare.onclick = function(){for(var i=0; i<classSharePopUp.length; i++){classSharePopUp[i].style.display = 'block';}}; classShareCloseContainer[0].onclick = function(){for(var i=0; i<classSharePopUp.length; i++){classSharePopUp[i].style.display = 'none';}};}
function setShareUrl(){//called in every html page
	var urlNow = window.location.href;
	var facebook = "https://www.facebook.com/sharer.php?u="+urlNow; var classFacebook = document.getElementsByClassName('href_sharefacebook'); for(var i=0; i<classFacebook.length; i++){classFacebook[i].setAttribute('href',facebook);}
	var twitter = "https://www.twitter.com/share?url="+urlNow; var classTwitter = document.getElementsByClassName('href_sharetwitter'); for(var i=0; i<classTwitter.length; i++){classTwitter[i].setAttribute('href',twitter);}
	var linkedin = "https://www.linkedin.com/shareArticle?mini=true&url="+urlNow; var classLinkedin = document.getElementsByClassName('href_sharelinkedin'); for(var i=0; i<classLinkedin.length; i++){classLinkedin[i].setAttribute('href',linkedin);}
	var pinterest = "https://pinterest.com/pin/create/button/?url="+urlNow; var classPinterest = document.getElementsByClassName('href_sharepinterest'); for(var i=0; i<classPinterest.length; i++){classPinterest[i].setAttribute('href',pinterest);}
	var tumblr = "https://www.tumblr.com/share/link?url="+urlNow; var classTumblr = document.getElementsByClassName('href_sharetumblr'); for(var i=0; i<classTumblr.length; i++){classTumblr[i].setAttribute('href',tumblr);}
	var reddit = "https://www.reddit.com/submit?url="+urlNow; var classReddit = document.getElementsByClassName('href_sharereddit'); for(var i=0; i<classReddit.length; i++){classReddit[i].setAttribute('href',reddit);}
}
//*************************************************END share pop up window*************************************************
//*************************************************START number*************************************************
function setNumber(){let k=Object.keys(numberObj);let v=Object.values(numberObj);let l=k.length;let e=[];for(let i=0;i<l;i++){e[i]=document.getElementsByClassName(k[i]);let u=e[i].length;for(let j=0;j<u;j++){e[i][j].innerText=v[i]}}}
//*************************************************END number*************************************************
//*************************************************START external links*************************************************
function setExternalLinks(customedClassName){let k=Object.keys(externalLinksObj);let v=Object.values(externalLinksObj);let l=k.length;if(l<=1){return 0}let e=document.getElementsByClassName(customedClassName)[0];let patt=new RegExp(getP(),'g');let loopStartDigit=1;if(isAhchorTag(e)){if(!patt.test(v[0])){loopStartDigit=1}else{loopStartDigit=2}e.setAttribute('href',v[loopStartDigit-1]);e.setAttribute('title',k[loopStartDigit-1]);e.innerText=k[loopStartDigit-1];for(let i=loopStartDigit;i<l;i++){if(!patt.test(v[i])){let a=document.createElement('a');a.setAttribute('href',v[i]);a.setAttribute('title',k[i]);a.setAttribute('class',customedClassName);a.innerText=k[i];e.parentNode.appendChild(a)}}}else{if(!patt.test(v[0])){loopStartDigit=1}else{loopStartDigit=2}let a0=document.createElement('a');a0.setAttribute('href',v[loopStartDigit-1]);a0.setAttribute('title',k[loopStartDigit-1]);a0.setAttribute('class',customedClassName);a0.innerText=k[loopStartDigit-1];e.appendChild(a0);e.classList.remove(customedClassName);let classNameArr=e.className.trim().replace(/\s+/ig,' ').split(' ');for(let i=loopStartDigit;i<l;i++){if(!patt.test(v[i])){let d=document.createElement('div');for(let j=0;j<classNameArr.length;j++){d.classList.add(classNameArr[j])}let a=document.createElement('a');a.setAttribute('href',v[i]);a.setAttribute('title',k[i]);a.setAttribute('class',customedClassName);a.innerText=k[i];e.parentNode.appendChild(d);d.appendChild(a)}}}}function isAhchorTag(e){if(e.tagName==='A'){return true}else{return false}}
//*************************************************END external links*************************************************
//*************************************************START emo*************************************************
function emo(){var range = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_:./'; var letterRange = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; this.forward = forward; this.backward = backward; this.getCodeArray = getCodeArray; this.regRef = regRef; this.getEnRanRef = getEnRanRef; this.strictFilter = strictFilter; function forward(str){var regStr = str.replace(/((?![\w\.\-:/]).)/g,''); return forwardShift(forwardRef(regStr));} function backward(code){if(code.length!==0){return backwardRef(backwardShift(code));}else{return '';}} function backwardRef(array){var codeResult = '';for(var i=0; i<array.length; i++){codeResult += range[getEnRanRef().indexOf(array[i])];}return codeResult;} function backwardShift(code){var codeResult = [];code = code.replace(/((?![A-Za-z\d]).)/g,'');var codeArray = strictFilter(getEnRanRef(), getCodeArray(code));if(codeArray.length!==0){for(var i=0; i<codeArray.length; i++){if(i%3===0){if((getEnRanRef().indexOf(codeArray[i])-5)>=0){codeResult[i] = getEnRanRef()[(getEnRanRef().indexOf(codeArray[i])-5)];}else{codeResult[i] = getEnRanRef()[((getEnRanRef().indexOf(codeArray[i])+getEnRanRef().length)-5)];}}else if(i%3===1){if((getEnRanRef().indexOf(codeArray[i])-2)>=0){codeResult[i] = getEnRanRef()[(getEnRanRef().indexOf(codeArray[i])-2)];}else{codeResult[i] = getEnRanRef()[((getEnRanRef().indexOf(codeArray[i])+getEnRanRef().length)-2)];}}else{if((getEnRanRef().indexOf(codeArray[i])-3)>=0){codeResult[i] = getEnRanRef()[(getEnRanRef().indexOf(codeArray[i])-3)];}else{codeResult[i] = getEnRanRef()[((getEnRanRef().indexOf(codeArray[i])+getEnRanRef().length)-3)];}}}return codeResult;}else{return [];}} function strictFilter(refArray, testArray){while(!regRef(refArray, testArray)){for(var i=0; i<testArray.length; i++){if(refArray.indexOf(testArray[i]) > -1){continue;}else{testArray.splice(i,1);break;}}}return testArray;} function regRef(refArray, testArray){var s = true;for(var i=0; i<testArray.length; i++){if(refArray.indexOf(testArray[i]) > -1){continue;}else{s = false;break;}}return s;} function getEnRanRef(){var rangeRef = [];for(var i=0; i<letterRange.length; i++){rangeRef[i] = letterRange[i];}for(var i=letterRange.length; i<range.length; i++){rangeRef[i] = letterRange[parseInt((i-letterRange.length)/10)]+((i-letterRange.length)%10);}return rangeRef;} function getCodeArray(code){var codeArray = [];var j = 0;for(var i=0; i<code.length; i++){if(/[A-Za-z]/.test(code[i])){if((i+1)<code.length&&/[A-Za-z]/.test(code[i+1])){codeArray[j] = code[i];j += 1;}else if((i+1)<code.length&&!(/[A-Za-z]/.test(code[i+1]))){codeArray[j] = code[i]+code[i+1];j += 1;}else{codeArray[j] = code[i];j += 1;}}else{continue;}}return codeArray;} function forwardRef(str){var strArray = [];var strResult = '';if(str.length!==0){for(var i=0; i<str.length; i++){strArray[i] = getEnRanRef()[range.indexOf(str[i])];strResult += strArray[i];}return strResult;}else{return '';}} function forwardShift(str){var strArray = getCodeArray(str);var strResult = '';if(strArray.length!==0){for(var i=0; i<strArray.length; i++){if(i%3===0){strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i])+5)%(getEnRanRef().length)];}else if(i%3===1){strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i])+2)%(getEnRanRef().length)];}else{strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i])+3)%(getEnRanRef().length)];}}return strResult;}else{return '';}}}
//*************************************************END emo*************************************************