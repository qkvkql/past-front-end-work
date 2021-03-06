let trs = document.getElementsByTagName('tr');
let trsl = trs.length;
function getDailyStatByGender (staffName) {
    let splitTrsObj = getSplitTrsObj();
    let splitTrsKeysArr = Object.keys(splitTrsObj);
    let splitTrsNumber = Object.getOwnPropertyNames(splitTrsObj).length;
    splitTrsKeysArr.push(trsl);
    let data = {}; //
    let patt = new RegExp(staffName, 'i');
    for ( let i = 0; i < splitTrsNumber; i++ ) {
        let currentDate = 'Day' + i;
        data[currentDate] = {};
        let id = new Set(), daily = {f: [0, 0, 0], m: [0, 0, 0], t: [0, 0, 0]}, mr = 0, count = 0;
        for ( let j = parseInt(splitTrsKeysArr[i]); j < parseInt(splitTrsKeysArr[i+1]); j++ ) {
            if ( !trs[j].getElementsByTagName('td') ) {
                continue;
            }
            let tds = trs[j].getElementsByTagName('td');
            if ( !tds[2] ) {
                continue;
            }
            if ( patt.test(tds[1].innerText) ) {
                let stat = getStatFromTd(tds[2].innerText);
                id.add((tds[0].innerText).toString());
                for (let k = 0; k < 3; k++) {
                    daily['f'][k] += parseInt(stat[k]);
                    daily['m'][k] += parseInt(stat[k+3]);
                    daily['t'][k] += parseInt(stat[k]) + parseInt(stat[k+3]);
                }
                mr = (daily['m'][2]/daily['t'][2]*100).toFixed(2).toString() + '%';
                count += 1;
            }
        }
        data[currentDate].id = id;
        Object.keys(daily).forEach(k => {
            data[currentDate][k] = daily[k][0] + '/' + daily[k][1] +'/'+ daily[k][2];
        });
        data[currentDate].mr = mr;
        mr = 0;
        count = 0;
    }
    return data;
}
function getStatFromTd (inner) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(getTdNumber(inner, 1, i));
    }
    for (let i = 0; i < 3; i++) {
        arr.push(getTdNumber(inner, 3, i));
    }
	return arr;
}
function getTdNumber (inner, i, j) {
	return parseInt(inner.split(/[\n+\s+]/)[i].split('/')[j].replace(/\s+/g, ''));
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
console.table(getDailyStatByGender('Jonas'));