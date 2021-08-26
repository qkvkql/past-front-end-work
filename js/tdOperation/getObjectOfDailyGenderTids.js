let trs = document.getElementsByTagName('tr');
let trsl = trs.length;
function getDailyStatByGender (staffName) {
    
    let splitTrsObj = getSplitTrsObj();
    let splitTrsKeysArr = Object.keys(splitTrsObj);
    let splitTrsNumber = Object.getOwnPropertyNames(splitTrsObj).length;
    splitTrsKeysArr.push(trsl);
    let patt = new RegExp(staffName, 'i');
    
    let obj = {}; //final object

    for ( let i = 0; i < splitTrsNumber; i++ ) { // for each day 1,2,3,4,5,6,7
        
        let tidArr = [], tidObj = {};
        
        for ( let j = parseInt(splitTrsKeysArr[i]); j < parseInt(splitTrsKeysArr[i+1]); j++ ) {//for each tr on the i th day
            
            if ( !trs[j].getElementsByTagName('td') ) {
                continue;
            }
            let tds = trs[j].getElementsByTagName('td');
            if ( !tds[2] ) {
                continue;
            }

            if ( patt.test(tds[1].innerText) ) { // successfully match the tr for the staff
                let tid = (tds[0].innerText).toString(); // get tid from tr td
                let info = getStatFromTd(tds[2].innerText); // get info from the tid [f0/f1/f2 m0/m1/m2]
                let tempObj = {f: [], m: [], t: []};

                for (let k = 0; k < 3; k++) {
                    tempObj['f'].push(info[k]);
                    tempObj['m'].push(info[k+3]);
                    tempObj['t'].push(info[k] + info[k+3]);
                }

                if (!tidArr.includes(tid)) {
                    tidObj[tid] = tempObj;
                    tidArr.push(tid); // save the tid to an array
                } else {
                    for (let k = 0; k < 3; k++) {
                        tidObj[tid]['f'][k] = tidObj[tid]['f'][k] + tempObj['f'][k];
                        tidObj[tid]['m'][k] = tidObj[tid]['m'][k] + tempObj['m'][k];
                        tidObj[tid]['t'][k] = tidObj[tid]['t'][k] + tempObj['t'][k];
                    }
                }
            }
        }
        
        obj[i] = tidObj;

        tidArr = [];
        tidObj = {};
    }
    return obj;
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
console.log(getDailyStatByGender('Jonas'));