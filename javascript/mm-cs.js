document.addEventListener('DOMContentLoaded',function(event){
	setMainUrl();
	setUnwantedUrl();
	setBeautyUrl();
	setInstanceUrl();
});

let urlNavs = document.getElementsByClassName('url-nav');
let unwantedAnchors = document.getElementsByClassName('unwanted');
let beauties = document.getElementsByClassName('beauty');
let instances = document.getElementsByClassName('instance');

let urlString1 = 'https://www.millionairematch.com/censor/profile?contentKeywords=';
let urlString2 = '&approvalBySelf=1&linkName=search_approved_profiles';
let profileUrlPrefix = 'https://www.millionairematch.com/censor/profile?userId=';

let beautyObj = {
	"131740508": "MJ0912",
	"131741166": "DANIELA",
	"131577241": "lilly",
	"131745257": "yua_0902_",
	"131747645": "Maddisonj",
	"131752325": "Serenity",
	"131752905": "Taylor",
	"131768747": "SSSBAE",
	"131779451": "karma",
	"128668204": "Princess88"
};
let beautyKeys = Object.keys(beautyObj);
let beautyValues = Object.values(beautyObj);
let mainUrls = [
	"https://www.millionairematch.com/censor",
	"https://international.millionairematch.com/censor/",
	"https://www.sugardaddymeet.com/censor",
	"https://www.sugardaddymeet.com/affiliate"
];
let unwantedWordsArr = [
	"ig:",
	"snap",
	"sc:",
	"fb:",
	"facebook",
	"instagram",
	"skype",
	"google",
	"tiktok",
	"tik tok",
	"kik",
	"contact",
	"onlyfans",
	"only fans",
	"mentor",
	"whatsapp",
	"inst",
	"messenger",
	"msn",
	"me on",
	"phone",
	"email",
	"zero",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
	"sugar dad",
	"sugar bab",
	"number",
	"find"
];
let instanceArr = [
	"131259500"
];

function setMainUrl(){
	for (let i=0; i<urlNavs.length; i++){
		urlNavs[i].setAttribute('href', mainUrls[i]);
		urlNavs[i].setAttribute('target', '_blank');
	}
}
function setUnwantedUrl(){
	for(let i=0; i<unwantedAnchors.length; i++){
		unwantedAnchors[i].innerText = unwantedWordsArr[i];
		unwantedAnchors[i].setAttribute('href', urlString1 + unwantedWordsArr[i] + urlString2);
		unwantedAnchors[i].setAttribute('target', '_blank');
	}
}
function setBeautyUrl(){
	for(let i=0; i<beauties.length; i++){
		beauties[i].innerText = beautyValues[i];
		beauties[i].setAttribute('href', profileUrlPrefix + beautyKeys[i]);
		beauties[i].setAttribute('target', '_blank');
	}
}
function setInstanceUrl(){
	for(let i=0; i<instances.length; i++){
		instances[i].innerText = instanceArr[i];
		instances[i].setAttribute('href', profileUrlPrefix + instanceArr[i]);
		instances[i].setAttribute('target', '_blank');
	}
}