//2021.06 - setAdsForCloneSites
//01 - main.gs
function main() { //function main is a must where google script execution starts from
    var config = {
        campaignName: 'SDM: 0101-CH_XcDmLg',
        defaultGroupCpc: 0.1,
        defaultGroupStatus: 'ENABLED',
        urlPart1: 'https://www.sugar-daddymeet.com/?t=',
        urlPart2: '&u='
    }
    var serialArr = Object.keys(csvObj);
    var number = serialArr.length;
    var emo = new encObj();
    
    
    
    // 1
    //biuldMultiAdGroupsBySheetInfo(serialArr, number, config);
    
    // 2
    //biuldMultiKeywordsBySheetInfo (serialArr, number, config);
    
    // 3 + 3
    //biuldMultiExpandedTextAdsBySheetInfo(serialArr, number, config, emo);
    
    
  
  
    
    //Backup
    //logAdGroupNameOrderByName('');
    //biuldMultiAdGroupsBySheetInfo(serialArr, number, config);
    //biuldMultiKeywordsBySheetInfo (serialArr, number, config);
    //biuldMultiExpandedTextAdsBySheetInfo(serialArr, number, config, emo);
}

//02 - logAdGroupNameOrderByName.gs
function logAdGroupNameOrderByName(campaignName) {
//select an ad group for the new expanded text ad.
	var adGroupSelector = AdsApp
		.adGroups()
		.withCondition("CampaignName = '" + campaignName + "'")
		.orderBy("AdGroupName ASC")
	//get the ad group iterator
	var adGroupIterator = adGroupSelector.get();
	//loop
	while (adGroupIterator.hasNext()) {
		var adGroup = adGroupIterator.next();
		Logger.log(adGroup.getName());
	}
}
//03 - biuldAdGroup.gs
function biuldAdGroup (campaignName, groupName, cpc, groupStatus) {
    //select a campaign for the new ad group
    //get the campign selector
    var campaignSelector = AdsApp.campaigns()
        .withCondition("CampaignName = '" + campaignName + "'");
    //get the campign
    var campaign = campaignSelector.get().next();
    //get the ad group biulder
    var adGroupBuilder = campaign.newAdGroupBuilder();
    //biuld the new ad group
        var adGroupOperation = adGroupBuilder
        .withName(groupName)
        .withCpc(cpc)
        .withStatus(groupStatus)
        .build();
    //log info for testing
    //var adGroup = adGroupOperation.getResult();
}
//04 - biuldMultiAdGroupsBySheetInfo.gs
function biuldMultiAdGroupsBySheetInfo (serialArr, number, config) {
    for (var i = 0; i < number; i++) {
        var cName = config.campaignName;
        var gName = serialArr[i] + ' - tid[' + csvObj[serialArr[i]].tid + '] - kw[' + csvObj[serialArr[i]].kw + ']';
        var cpc = config.defaultGroupCpc;
        var gStatus = config.defaultGroupStatus;

        var hasTheGroup = AdsApp.adGroups()
            .withCondition("CampaignName = '" + config.campaignName + "'")
            .withCondition("AdGroupName = '" + gName + "'").get().hasNext();

        if (!hasTheGroup) {
            biuldAdGroup(cName, gName, cpc, gStatus);
        }
    }
}
//05 - biuldKeywordOfExactMatch.gs
function biuldKeywordOfExactMatch (campaignName, groupName, keyword, url) {
    //select an ad group for the new keyword
    var adGroupSelector = AdsApp
    .adGroups()
    .withCondition("CampaignName = '" + campaignName + "'")
    .withCondition("AdGroupName = '" + groupName + "'");
    //get the ad group
    var adGroup = adGroupSelector.get().next();

    //get keyword iterator
    var keywordIterator = AdsApp.keywords()
    .withCondition("CampaignName = '" + campaignName + "'")
    .withCondition("AdGroupName = '" + groupName + "'").get();

    //add each keyword to array
    var keywordArr = [];
    if (keywordIterator.hasNext()) {
    keywordArr.push(keywordIterator.next().getText());
    }
    function hasKeyword (keyword) {
    var count = 0;
    for (var i = 0; i < keywordArr.length; i++) {
    if (keyword = keywordArr[i]) {
    count = 1;
    break;
    }
    }
    return count > 0 ? true : false;
    }
    if (!hasKeyword(keyword)) {
    //get the keyword biulder
    var keywordBiulder = adGroup.newKeywordBuilder();
    //biuld the new keyword of exact match type
    var keywordOperation = keywordBiulder
    .withText("[" + keyword + "]")
    .withFinalUrl(url)
    .build();
    }
    //log info for test
    //var keyword = keywordOperation.getResult();
}
//06 - biuldMultiKeywordsBySheetInfo.gs
function biuldMultiKeywordsBySheetInfo (serialArr, number, config) {
    var emo = new encObj();
    for (var i = 0; i < number; i++) {
        var cName = config.campaignName;
        var gName = serialArr[i] + ' - tid[' + csvObj[serialArr[i]].tid + '] - kw[' + csvObj[serialArr[i]].kw + ']';
        var keyword = csvObj[serialArr[i]].kw;
        var url = config.urlPart1 + emo.enSiteHeadline(csvObj[serialArr[i]].siteTitle) + config.urlPart2 + csvObj[serialArr[i]].tid;

        biuldKeywordOfExactMatch(cName, gName, keyword, url);
    }
}
//07 - biuldExpandedTextAd.gs
function biuldExpandedTextAd (campaignName, groupName, finalUrl, headline1, headline2, headline3, path1, path2, description1, description2) {
    //select an ad group for the new expanded text ad.
    var adGroupSelector = AdsApp
        .adGroups()
        .withCondition("CampaignName = '" + campaignName + "'")
        .withCondition("AdGroupName = '" + groupName + "'");
    //get the ad group
    var adGroup = adGroupSelector.get().next();
    //get the ad biulder
    var adBiulder = adGroup.newAd().expandedTextAdBuilder();
    //biuld the new expanded text ad
    var adOperation = adBiulder
        .withHeadlinePart1(headline1)
        .withHeadlinePart2(headline2)
        .withHeadlinePart3(headline3)
        .withDescription1(description1)
        .withDescription2(description2)
        .withPath1(path1)
        .withPath2(path2)
        .withFinalUrl(finalUrl)
        .build();
    //log info for test
    //var ad = adOperation.getResult();
}
//08 - biuldMultiExpandedTextAdsBySheetInfo.gs
function biuldMultiExpandedTextAdsBySheetInfo (serialArr, number, config, emo) {
    for (var i = 0; i < number; i++) {
        var cName = config.campaignName;
        var gName = serialArr[i] + ' - tid[' + csvObj[serialArr[i]].tid + '] - kw[' + csvObj[serialArr[i]].kw + ']';
        var url = config.urlPart1 + emo.enSiteHeadline(csvObj[serialArr[i]].siteTitle) + config.urlPart2 + csvObj[serialArr[i]].tid;
        var hl1 = phraseUpper(csvObj[serialArr[i]].t1);
        var hl2 = phraseUpper(csvObj[serialArr[i]].t2);
        var noCumstomizerHl3 = phraseUpper(csvObj[serialArr[i]].t3);
        var customizerHl3 = phraseUpper(csvObj[serialArr[i]].t3 + ' in {=ct.country}');
        var p1 = csvObj[serialArr[i]].dir1;
        var p2 = csvObj[serialArr[i]].dir2;
        var d1 = phraseUpper(csvObj[serialArr[i]].d1);
        var d2 = phraseUpper(csvObj[serialArr[i]].d2);
        
        var adsNumberInGroup = AdsApp.ads()
            .withCondition("CampaignName = '" + config.campaignName + "'")
            .withCondition("AdGroupName = '" + gName + "'").get().totalNumEntities();
        
            if (!(adsNumberInGroup > 0)) {
            biuldExpandedTextAd(cName, gName, url, hl1, hl2, noCumstomizerHl3, p1, p2, d1, d2);
        } else if (adsNumberInGroup > 0 && adsNumberInGroup <= 1) {
            biuldExpandedTextAd(cName, gName, url, hl1, hl2, customizerHl3, p1, p2, d1, d2);
        }
    }
}
//09 - encObj.gs
function encObj() {
    var range = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_:./";
    var letterRange = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    this.forward = forward;
    this.backward = backward;
    this.getCodeArray = getCodeArray;
    this.regRef = regRef;
    this.getEnRanRef = getEnRanRef;
    this.strictFilter = strictFilter;
    this.enSiteHeadline = enSiteHeadline;
    function enSiteHeadline(str) {
        var arr = str.split(" ");
        var l = arr.length;
        var result = "";
        for (var i = 0; i < l - 1; i++) {
            result += forward(arr[i].trim()) + "+";
        }
        result += forward(arr[l - 1].trim());
        return result;
    }
    function forward(str) {
        var regStr = str.replace(/((?![\w\.\-:/]).)/g, "");
        return forwardShift(forwardRef(regStr));
    }
    function backward(code) {
        if (code.length !== 0) {
            return backwardRef(backwardShift(code));
        } else {
            return "";
        }
    }
    function backwardRef(array) {
        var codeResult = "";
        for (var i = 0; i < array.length; i++) {
            codeResult += range[getEnRanRef().indexOf(array[i])];
        }
        return codeResult;
    }
    function backwardShift(code) {
        var codeResult = [];
        code = code.replace(/((?![A-Za-z\d]).)/g, "");
        var codeArray = strictFilter(getEnRanRef(), getCodeArray(code));
        if (codeArray.length !== 0) {
            for (var i = 0; i < codeArray.length; i++) {
                if (i % 3 === 0) {
                    if (getEnRanRef().indexOf(codeArray[i]) - 5 >= 0) {
                        codeResult[i] = getEnRanRef()[getEnRanRef().indexOf(codeArray[i]) - 5];
                    } else {
                        codeResult[i] = getEnRanRef()[getEnRanRef().indexOf(codeArray[i]) + getEnRanRef().length - 5];
                    }
                } else if (i % 3 === 1) {
                    if (getEnRanRef().indexOf(codeArray[i]) - 2 >= 0) {
                        codeResult[i] = getEnRanRef()[getEnRanRef().indexOf(codeArray[i]) - 2];
                    } else {
                        codeResult[i] = getEnRanRef()[getEnRanRef().indexOf(codeArray[i]) + getEnRanRef().length - 2];
                    }
                } else {
                    if (getEnRanRef().indexOf(codeArray[i]) - 3 >= 0) {
                        codeResult[i] = getEnRanRef()[getEnRanRef().indexOf(codeArray[i]) - 3];
                    } else {
                        codeResult[i] = getEnRanRef()[getEnRanRef().indexOf(codeArray[i]) + getEnRanRef().length - 3];
                    }
                }
            }
            return codeResult;
        } else {
            return [];
        }
    }
    function strictFilter(refArray, testArray) {
        while (!regRef(refArray, testArray)) {
            for (var i = 0; i < testArray.length; i++) {
                if (refArray.indexOf(testArray[i]) > -1) {
                    continue;
                } else {
                    testArray.splice(i, 1);
                    break;
                }
            }
        }
        return testArray;
    }
    function regRef(refArray, testArray) {
        var s = true;
        for (var i = 0; i < testArray.length; i++) {
            if (refArray.indexOf(testArray[i]) > -1) {
                continue;
            } else {
                s = false;
                break;
            }
        }
        return s;
    }
    function getEnRanRef() {
        var rangeRef = [];
        for (var i = 0; i < letterRange.length; i++) {
            rangeRef[i] = letterRange[i];
        }
        for (var i = letterRange.length; i < range.length; i++) {
            rangeRef[i] = letterRange[parseInt((i - letterRange.length) / 10)] + ((i - letterRange.length) % 10);
        }
        return rangeRef;
    }
    function getCodeArray(code) {
        var codeArray = [];
        var j = 0;
        for (var i = 0; i < code.length; i++) {
            if (/[A-Za-z]/.test(code[i])) {
                if (i + 1 < code.length && /[A-Za-z]/.test(code[i + 1])) {
                    codeArray[j] = code[i];
                    j += 1;
                } else if (i + 1 < code.length && !/[A-Za-z]/.test(code[i + 1])) {
                    codeArray[j] = code[i] + code[i + 1];
                    j += 1;
                } else {
                    codeArray[j] = code[i];
                    j += 1;
                }
            } else {
                continue;
            }
        }
        return codeArray;
    }
    function forwardRef(str) {
        var strArray = [];
        var strResult = "";
        if (str.length !== 0) {
            for (var i = 0; i < str.length; i++) {
                strArray[i] = getEnRanRef()[range.indexOf(str[i])];
                strResult += strArray[i];
            }
            return strResult;
        } else {
            return "";
        }
    }
    function forwardShift(str) {
        var strArray = getCodeArray(str);
        var strResult = "";
        if (strArray.length !== 0) {
            for (var i = 0; i < strArray.length; i++) {
                if (i % 3 === 0) {
                    strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i]) + 5) % getEnRanRef().length];
                } else if (i % 3 === 1) {
                    strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i]) + 2) % getEnRanRef().length];
                } else {
                    strResult += getEnRanRef()[(getEnRanRef().indexOf(strArray[i]) + 3) % getEnRanRef().length];
                }
            }
            return strResult;
        } else {
            return "";
        }
    }
}
//10 - phraseUpper.gs
function phraseUpper (str) {
    var arr = str.split(' ');
    var result = '';
    var newArr = [];
    var arrNumberCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== '') {
            newArr[arrNumberCount] = arr[i];
            result += setUpperLower(newArr[arrNumberCount]) + ' ';
            arrNumberCount += 1;
        }
    }
    function setUpperLower(str) {
        if (str.length === 0) {
            return str;
        } else if (str.length === 1) {
            return str.toUpperCase();
        } else if (str === str.toUpperCase()) {
					  return str;
				} else if (!needUpper(str)) {
            return str;
        } else {
            var s = "";
            var full = "";
            for (var i = 1; i < str.length; i++) {
                s += str[i];
            }
            full = str[0].toUpperCase() + s.toLowerCase();
            return full;
        }
    }
    return result.trim();
}
function needUpper (str) {
    var c = 0;
    var newStr = str.toUpperCase();
    for (var i = 0; i < str.length; i++) {
      if (str[i] === newStr[i]) {
        c += 1;
      }
    }
    if (c > 1) {
      return false;
    } else {
      return true;
    }
  }
  //11 - csvObj.gs
  var csvObj = {
	"0023": {
	   "vol": "4,400",
	   "kw": "sugar daddy apps that send money without meeting",
	   "siteTitle": "sugar daddy app that send money",
	   "tid": "756",
	   "30-1": 19,
	   "t1": "SugarDaddyMeet.COM™",
	   "30-2": 26,
	   "t2": "sugar daddy app send money",
	   "25-1": 19,
	   "t3": "#1 sugar daddy site",
	   "15-1": 14,
	   "dir1": "sugardaddyapps",
	   "15-2": 0,
	   "dir2": "",
	   "90-1": 89,
	   "d1": "Official Sugar Daddy Meet Site with 5.5 Million Real&Active Sugar Daddies & Sugar Babies.",
	   "90-2": 88,
	   "d2": "Find, Meet & Date Local Attractive Sugar Daddies & Sugar Babies in 20 Richest Countries."
	},
	"0024": {
	   "vol": "4,400",
	   "kw": "sugar daddy websites free for sugar babies",
	   "siteTitle": "sugar daddy website free for sugar babies",
	   "tid": "757",
	   "30-1": 19,
	   "t1": "SugarDaddyMeet.COM™",
	   "30-2": 25,
	   "t2": "free sugar daddy websites",
	   "25-1": 19,
	   "t3": "#1 sugar daddy site",
	   "15-1": 13,
	   "dir1": "freesugarsite",
	   "15-2": 0,
	   "dir2": "",
	   "90-1": 89,
	   "d1": "Official Sugar Daddy Meet Site with 5.5 Million Real&Active Sugar Daddies & Sugar Babies.",
	   "90-2": 88,
	   "d2": "Find, Meet & Date Local Attractive Sugar Daddies & Sugar Babies in 20 Richest Countries."
	},
	"0025": {
	   "vol": "4,400",
	   "kw": "sugardaddymeet app",
	   "siteTitle": "best app to find sugar daddies and sugar babies near you easily",
	   "tid": "907",
	   "30-1": 19,
	   "t1": "SugarDaddyMeet.COM™",
	   "30-2": 20,
	   "t2": "sugar daddy meet app",
	   "25-1": 19,
	   "t3": "#1 sugar daddy site",
	   "15-1": 3,
	   "dir1": "app",
	   "15-2": 0,
	   "dir2": "",
	   "90-1": 89,
	   "d1": "Official Sugar Daddy Meet Site with 5.5 Million Real&Active Sugar Daddies & Sugar Babies.",
	   "90-2": 88,
	   "d2": "Find, Meet & Date Local Attractive Sugar Daddies & Sugar Babies in 20 Richest Countries."
	},
	"0026": {
	   "vol": "3,600",
	   "kw": "free sugar daddy apps",
	   "siteTitle": "best free sugar daddy app",
	   "tid": "ad1234",
	   "30-1": 19,
	   "t1": "SugarDaddyMeet.COM™",
	   "30-2": 21,
	   "t2": "free sugar daddy apps",
	   "25-1": 19,
	   "t3": "#1 sugar daddy site",
	   "15-1": 12,
	   "dir1": "freesugarapp",
	   "15-2": 0,
	   "dir2": "",
	   "90-1": 89,
	   "d1": "Official Sugar Daddy Meet Site with 5.5 Million Real&Active Sugar Daddies & Sugar Babies.",
	   "90-2": 88,
	   "d2": "Find, Meet & Date Local Attractive Sugar Daddies & Sugar Babies in 20 Richest Countries."
	},
	"0027": {
	   "vol": "3,600",
	   "kw": "online sugar daddy",
	   "siteTitle": "online sugar daddies are waiting for you here",
	   "tid": "adorable",
	   "30-1": 19,
	   "t1": "SugarDaddyMeet.COM™",
	   "30-2": 18,
	   "t2": "online sugar daddy",
	   "25-1": 19,
	   "t3": "#1 sugar daddy site",
	   "15-1": 10,
	   "dir1": "sugardaddy",
	   "15-2": 0,
	   "dir2": "",
	   "90-1": 89,
	   "d1": "Official Sugar Daddy Meet Site with 5.5 Million Real&Active Sugar Daddies & Sugar Babies.",
	   "90-2": 88,
	   "d2": "Find, Meet & Date Local Attractive Sugar Daddies & Sugar Babies in 20 Richest Countries."
	},
	"0028": {
	   "vol": "2,900",
	   "kw": "gay sugar",
	   "siteTitle": "find sugar daddies and sugar babies near you easily",
	   "tid": "aesthetic",
	   "30-1": 19,
	   "t1": "SugarDaddyMeet.COM™",
	   "30-2": 22,
	   "t2": "seeking an arrangement",
	   "25-1": 19,
	   "t3": "#1 sugar daddy site",
	   "15-1": 8,
	   "dir1": "gaysugar",
	   "15-2": 0,
	   "dir2": "",
	   "90-1": 89,
	   "d1": "Official Sugar Daddy Meet Site with 5.5 Million Real&Active Sugar Daddies & Sugar Babies.",
	   "90-2": 88,
	   "d2": "Find, Meet & Date Local Attractive Sugar Daddies & Sugar Babies in 20 Richest Countries."
	}
 }
/************************************************************************** */
//2019.11
//change ad groups' name
function main() {
	var l = ['a-', 'a|-', 'b-', 'b|-', 'c-', 'd-', 'd|-', 'e-', 'e|-', 'f-', 'g-'];
	var lenL = l.length;
	var r1 = ['0', '1', '2', '3', '4', '5'];
	var lenR1 = r1.length;
	var r2 = ['A', 'B', 'C', 'D', 'E', 'F'];
	var lenR2 = r2.length;
	var newR2 = ['u', 'v', 'w', 'x', 'y', 'z'];
	
	for(var i=0; i<lenL; i++){
		for(var j=0; j<lenR1; j++){
			for(var k=0; k<lenR2; k++){
				var adGroupSelector = AdsApp.adGroups().withCondition("Name CONTAINS '"+l[i]+r1[j]+r2[k]+"'").orderBy("AdGroupName ASC");
				var adGroupIterator = adGroupSelector.get();
				while (adGroupIterator.hasNext()){
					var adGroup = adGroupIterator.next();
					adGroup.setName(l[i]+r1[j]+newR2[k]);
				}
			}
		}
	}
}

//add ad schedule for a campaign
function main(){
	var w = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
	var t = [0, 4, 8, 12, 16, 24];
	var wl = w.length;
	var c = AdsApp.campaigns()
	.withCondition("CampaignName = '三国'")
	.get().next();
	for(var i=0; i<wl; i++){c.addAdSchedule(w[i], t[0], 0, t[1], 0, 1.1);}
	for(var i=0; i<wl; i++){c.addAdSchedule(w[i], t[1], 0, t[2], 0, 1.2);}
	for(var i=0; i<wl; i++){c.addAdSchedule(w[i], t[2], 0, t[3], 0);}
	for(var i=0; i<wl; i++){c.addAdSchedule(w[i], t[3], 0, t[4], 0, 0.8);}
	for(var i=0; i<wl; i++){c.addAdSchedule(w[i], t[4], 0, t[5], 0);}
}

//remove ad schedule for a campaign
function main(){
	var c = AdsApp.campaigns()
	.withCondition("CampaignName = '三国'")
	.get().next();
	var as = c.targeting().adSchedules().get();
	while(as.hasNext()){
		var s = as.next();
		s.remove();
	}
}

//set all schedule a price change
function main(){
	var c = AdsApp.campaigns()
	.withCondition("CampaignName = 'COSMOS'")
	.get().next();
	var as = c.targeting().adSchedules().get();
	while(as.hasNext()){
		var s = as.next();
		s.setBidModifier(0.8);
	}
}

//get final url
function main(){
	var c = AdsApp.keywords()
	.withCondition("CampaignName = '西魏'")
	.withCondition("AdGroupName = '北周'")
	.withCondition("KeywordText = 'sugar daddy websites'")
	.get().next();
	Logger.log(c.urls().getFinalUrl());
}

//set cpc of keywords
function main(){
	var campaignName = 'USA-DEMO'; //a specified demo campaign or all demo campaigns
	
	var p0 = [0.6, 0.73, 0.76, 0.9, 0.93, 1.1, 1.2, 1.3, 1.5]; //sugar daddy websites
	
	var p1 = []; for(var i=0; i<p0.length; i++){p1[i] = p0[i]+0.05;} //best sugar daddy websites
	
	var p2 = p0; //sugar daddy sites
	
	var p3 = p1; //best sugar daddy sites
	
	var p4 = []; for(var i=0; i<p0.length; i++){p4[i] = p0[i]+0.1;} //sugar daddy dating sites
	
	var p5 = p0; //sugar babies website
	
	var p6 = p1; //best sugar babies website
	
	var p7 = p0; //sugar baby sites
	
	var p8 = p1; //best sugar baby sites
	
	var p9 = p0; //sugar baby dating sites
	
	var p10 = p0; //sugar daddy dating
	
	var p = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
	
	var x = ['a-', 'a|-', 'b-', 'b|-', 'c-', 'd-', 'd|-', 'e-', 'e|-', 'f-', 'g-'];
	
	var y1 = '0';
	var y2 = ['1', '5'];
	var y3 = ['2', '3', '4'];
	var z1 = 'z';
	var z2 = ['x', 'y'];
	var z3 = ['u', 'v', 'w'];
	
	for(var c=0; c<p.length; c++){
		var kw = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y1+z1+"'").get().next().bidding()
		.setCpc(p[c][0]); // 18-25, bottom50%
		
		for(var i=0; i<z2.length; i++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y1+z2[i]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][1]);}} // 18-25, top50%~30%
		
		for(var i=0; i<z3.length; i++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y1+z3[i]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][2]);}} // 18-25, top30%
		
		for(var i=0; i<y2.length; i++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y2[i]+z1+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][3]);}} // 25-35||65+, bottom50%
		
		for(var i=0; i<y3.length; i++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y3[i]+z1+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][4]);}} // 35-65, bottom50%
		
		for(var i=0; i<y2.length; i++){for(var j=0; j<z2.length; j++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y2[i]+z2[j]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][5]);}}} // 25-35||65+, top50%~30%

		for(var i=0; i<y2.length; i++){for(var j=0; j<z3.length; j++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y2[i]+z3[j]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][6]);}}} // 25-35||65+, top30%

		for(var i=0; i<y3.length; i++){for(var j=0; j<z2.length; j++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y3[i]+z2[j]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][7]);}}} // 35-65, top50%~30%

		for(var i=0; i<y3.length; i++){for(var j=0; j<z3.length; j++){var KI = AdsApp.keywords().withCondition("CampaignName Contains '"+campaignName+"'")
		.withCondition("AdGroupName = '"+x[c]+y3[i]+z3[j]+"'").get();while(KI.hasNext()){var kw = KI.next();kw.bidding()
		.setCpc(p[c][8]);}}} // 35-65, top30%
	}
}