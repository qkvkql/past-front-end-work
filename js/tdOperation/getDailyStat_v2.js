/*
Object data:
{
    0: {
        id: valueOfArray,
        validTotal: valueOfNumber,
        developedTotal: valueOfNumber,
        RegTotal: valueOfNumber,
        validArr: valueOfArray,
        developedArr: valueOfArray,
        regArr: valueOfArray
    },
    1: {
        id: valueOfArray,
        validTotal: valueOfNumber,
        developedTotal: valueOfNumber,
        RegTotal: valueOfNumber,
        validArr: valueOfArray,
        developedArr: valueOfArray,
        regArr: valueOfArray
    },
    ...
}
*/
let trs = document.getElementsByTagName('tr');
let trsl = trs.length;
function getDailyStat (staffName) {
    let splitTrsObj = getSplitTrsObj();
    let splitTrsKeysArr = Object.keys(splitTrsObj);
    let splitTrsNumber = Object.getOwnPropertyNames(splitTrsObj).length;
    splitTrsKeysArr.push(trsl);
    let data = {}; //
    for ( let i = 0; i < splitTrsNumber; i++ ) {
        data[i] = {};
        let id = [], v = [], d = [], r = [];
        for ( let j = parseInt(splitTrsKeysArr[i]); j < parseInt(splitTrsKeysArr[i+1]); j++ ) {
            if ( !trs[j].getElementsByTagName('td') ) {
                continue;
            }
            let tds = trs[j].getElementsByTagName('td');
            if ( !tds[2] ) {
                continue;
            }
            let patt = new RegExp(staffName, 'i');
            if ( patt.test(trs[j].getElementsByTagName('td')[1].innerText) ) {
                let Stat = getStatFromTd(trs[j].getElementsByTagName('td')[2].innerText);
                id.push((trs[j].getElementsByTagName('td')[0].innerText).toString());
                v.push(parseInt(Stat[2]));
                d.push(parseInt(Stat[1]));
                r.push(parseInt(Stat[0]));
            }
        }
        data[i].id = id;
        data[i].validTotal = sumArrNumber(v);
        data[i].developedTotal = sumArrNumber(d);
        data[i].regTotal = sumArrNumber(r);
        data[i].validArr = v;
        data[i].developedArr = d;
        data[i].regArr = r;
    }
    return data;
}
function sumArrNumber (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function getStatFromTd (inner) {
	return [
        getTdNumber(inner, 0),
        getTdNumber(inner, 1),
        getTdNumber(inner, 2)
	];
}
function getTdNumber (inner, i) {
    if ( i === 0 || i === 1 ) {
        return parseInt(inner.split(/\s+/)[i].replace(/\/+/, ''));
    }else if ( i === 2 ) {
        return parseInt(inner.split(/\s+/)[2].replace(/\s+/, ''));
    }else {
        return false;
    }
}
function getSplitTrsObj () {
    let obj = {};
    let patt = /^\d{2}-\w{3}-\d{2}$/;
    for(let i=0; i<trsl; i++){
        let tds = trs[i].getElementsByTagName('td');
        if(tds.length === 1 && patt.test(tds[0].innerText)){
            obj[i] = tds[0].innerText;
        }
    }
    return obj;
}
getDailyStat('Jonas');