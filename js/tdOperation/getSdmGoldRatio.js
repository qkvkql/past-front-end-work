function getGenderRatio () {
    let tr = document.getElementsByTagName('tr');
    let fo = {
        cn: 8,
        my: 'JUN-21',
        gc: 5,
        mg: 'SDM-Male-Gold-Number',
        fg: 'SDM-Female-Gold-Number',
        tg: 'SDM-Total-Gold-Number',
        mr: 'SDM-Male-Gold-Ratio',
        m: 'Monthly-Total-Male',
        f: 'Monthly-Total-Female',
        t: 'Monthly-Total',
        r: 'Monthly-Male-Ratio'
    }
    let o = {};
    let s = {};
    s[fo.m] = 0;
    s[fo.f] = 0;
    s[fo.t] = 0;
    s[fo.r] = 0;
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td');
        if (td.length === fo.cn) {
            let re = new RegExp(fo.my, 'i');
            let td0 = td[0].innerText.trim();
            if (re.test(td0)) {
                if (!o[td0]) {
                    o[td0] = {};
                    o[td0][fo.mg] = 0;
                    o[td0][fo.fg] = 0;
                    if (Number(td[fo.gc].innerText.trim()) === 0) {
                        o[td0][fo.mg] += 1;
                        s[fo.m] += 1;
                        s[fo.t] += 1;
                    } else if (Number(td[fo.gc].innerText.trim()) === 1) {
                        o[td0][fo.fg] += 1;
                        s[fo.f] += 1;
                        s[fo.t] += 1;
                    }
                    o[td0][fo.tg] = o[td0][fo.mg] + o[td0][fo.fg];
                    o[td0][fo.mr] = ((o[td0][fo.mg]/o[td0][fo.tg]) * 100).toFixed(1).toString() + '%';
                } else {
                    if (Number(td[fo.gc].innerText.trim()) === 0) {
                        o[td0][fo.mg] += 1;
                        s[fo.m] += 1;
                        s[fo.t] += 1;
                    } else if (Number(td[fo.gc].innerText.trim()) === 1) {
                        o[td0][fo.fg] += 1;
                        s[fo.f] += 1;
                        s[fo.t] += 1;
                    }
                    o[td0][fo.tg] = o[td0][fo.mg] + o[td0][fo.fg];
                    o[td0][fo.mr] = ((o[td0][fo.mg]/o[td0][fo.tg]) * 100).toFixed(1).toString() + '%';
                }
            }
        }
    }
    s[fo.r] = (s[fo.m]/s[fo.t] * 100).toFixed(1).toString() + '%';
    return [o, s];
}
console.table(getGenderRatio()[0]);
console.table(getGenderRatio()[1]);