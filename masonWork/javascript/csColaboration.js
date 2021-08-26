//preference settings
let intervalAccumulator = 0;
let defaultInterval = 15;
let defaultOffset = 30;
let defaultPageNumber = 5;
let defaultPersonNumber = 8;
let defaultOption = 'profiles';
let defaultProject = 'sdm';

//get value of number type by url param name
let intervalSeconds = setCustomedValueByUrlParam('interval', defaultInterval, 'number', 3, 30);
let offset = setCustomedValueByUrlParam('offset', defaultOffset, 'number', 30, 100);
let pagePerPerson = setCustomedValueByUrlParam('page', defaultPageNumber, 'number', 1, 10);
let personNumber = setCustomedValueByUrlParam('person', defaultPersonNumber, 'number', 1, 20);

//project url
let projectObj = {
    sdm: {
        title: 'SugarDaddyMeet',
        url: 'https://www.sugardaddymeet.com/'
    },
    ps: {
        title: 'PositiveSingles',
        url: 'https://www.positivesingles.com/'
    },
    mm: {
        title: 'MillionaireMatch',
        url: 'https://www.millionairematch.com/'
    },
    bi: {
        title: 'Bicupid',
        url: 'https://www.bicupid.com/'
    }
}
//get project name from url param
let tempProject = setCustomedValueByUrlParam('project', defaultProject, 'string');
let project = inObjKeys(tempProject, projectObj) ? tempProject : defaultProject;
//get project url
let projectUrl = '';
for (let k in projectObj) {
    if (k === project) {
        projectUrl = projectObj[project].url;
    }
}

//prefix
let prefixObj = {
    machine: {
        title: 'Standard Member Machine Approved',
        prefix: projectUrl + 'censor_show?membership=G&auto_submited=1&offset=' + offset.toString() + '&from='
    },
    standard: {
        title: 'Standard Member Profiles',
        prefix: projectUrl + 'censor_show?active=0&membership=G&offset=' + offset.toString() + '&from='
    },
    incomplete: {
        title: 'Standard Member Incomplete Profiles',
        prefix: projectUrl + 'censor_show?active=4&membership=G&offset=' + offset.toString() + '&from='
    },
    profiles: {
        title: 'Standard Member Changed Profiles',
        prefix: projectUrl + 'censor_show?active=9&cou_type=normal&membership=G&offset=' + offset.toString() + '&from='
    },
    photos: {
        title: 'Standard Member Changed Photos',
        prefix: projectUrl + 'censor_show?no_rank=1&active=1&cou_type=normal&membership=G&censor_picture=1&offset=' + offset.toString() + '&from='
    }
}
//get option from url param
let tempOption = setCustomedValueByUrlParam('option', defaultOption, 'string');
let option = inObjKeys(tempOption, prefixObj) ? tempOption : defaultOption ;
//get prefix
let prefix = '';
for (let k in prefixObj) {
    if (k === option) {
        prefix = prefixObj[option].prefix;
    }
}

//excute when dom content loaded
document.addEventListener('DOMContentLoaded', function(event) {
    //header display
    document.getElementById('profileNumber').innerText = offset.toString();
    document.getElementById('pageNumber').innerText = pagePerPerson.toString();
    document.getElementById('interval').innerText = intervalSeconds.toString();
    document.getElementById('personNumber').innerText = personNumber.toString();
    document.getElementById('project').innerText = projectObj[project].title;
    document.getElementById('option').innerText = prefixObj[option].title;
    //create html div-button elements and append them to the document
    for (let i = 0; i < personNumber; i++) {
        let btnNumberFrom = numberToStrOfEqualDigit(i * pagePerPerson + 1);
        let btnNumberTo = numberToStrOfEqualDigit((i + 1) * pagePerPerson);
        let btn = document.createElement('button');
        btn.setAttribute('id', i);
        btn.innerText = btnNumberFrom !== btnNumberTo ? btnNumberFrom + ' - ' + btnNumberTo : btnNumberFrom;
        let div = document.createElement('div');
        div.setAttribute('class', 'btn');
        document.getElementById('btn-wrapper').appendChild(div);
        div.appendChild(btn);
    }
    //set timeout or interval for different button to open url by clicking event
    for (let i = 0; i < personNumber; i++) {
        setButton(i);
    }
});
//add a 0 for a number to keep all the button number having same digit
function numberToStrOfEqualDigit(n) {
    let prefix = '0';
    let maxDigit = (pagePerPerson * personNumber).toString().length;
    let currentDigit = n.toString().length;
    return prefix.repeat(maxDigit - currentDigit) + n.toString();
}
//function to set time out to open url in new tab by button clicking event
function setButton(index) {
    document.getElementById(index.toString()).onclick = function(){
        for (let i = pagePerPerson * index; i < pagePerPerson * (index + 1); i++) {
            setTimeout(() => {window.open(prefix + (i * offset).toString(), "_blank")}, intervalAccumulator * intervalSeconds * 1000);
            intervalAccumulator += 1;
        }
        intervalAccumulator = 0;
    }
}
//function to judge if a str is in the obj keys array
function inObjKeys(str, obj) {
    let keys = Object.keys(obj);
    if (keys.indexOf(str) > -1) {
        return true;
    } else {
        return false;
    }
}
//function to set value according to the url param value
function setCustomedValueByUrlParam(paramName, defaultValue, type, minValueIfNumber, maxValueIfNumber) {
    let value = getValueByParamName(paramName);
    if (value !== 0) {
        if (value === '') {
            return defaultValue;
        } else {
            if (type === 'number') {
                if (!(Number(value) > 0) && !(Number(value) <= 0)) {
                    return defaultValue;
                } else {
                    if (/^\d+$/.test(Number(value)) && Number(value) >= minValueIfNumber && Number(value) <= maxValueIfNumber) {
                        return value;
                    } else {
                        return defaultValue;
                    }
                }
            } else if (type === 'string') {
                return value;
            }
        }
    } else {
        return defaultValue;
    }
}
//function to get value by url param name
function getValueByParamName(paramName) {
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
        return 0;
    }
}