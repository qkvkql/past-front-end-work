let source = ['www_google_com', 'www_google_com_au', 'www_google_ca', 'www_google_co_uk', 'www_google_co_nz', 'www_google_de', 'www_google_nl', 'www_google_se', 'www_google_fr', 'www_google_ch', 'www_google_be', 'www_google_it', 'www_google_es', 'www_google_dk', 'www_bing_com', 'r_search_yahoo_com', 'search_yahoo_com', 'uk_search_yahoo_com', 'au_search_yahoo_com', 'ca_search_yahoo_com', 'plus_url_google_com', 'us_yhs4_search_yahoo_com', 'm_bing_com'];
function userComeFrom (threshold) {
    for (let i = 0; i < source.length; i++) {
        let obj = {};
        let l = document.getElementsByClassName(source[i])[0].getElementsByTagName('td')[0].getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr').length;
        let c = 1;
        let str = source[i] + ':\n';
        for (let j = 0; j < l; j++) {
            let tr =  document.getElementsByClassName(source[i])[0].getElementsByTagName('td')[0].getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[j];
            let cv = Number(tr.getElementsByTagName('td')[3].innerText.trim().split('%')[0]);
            if (cv < threshold) {
                continue;
            }
            obj[c] = {};
            obj[c].keyword = tr.getElementsByTagName('td')[0].innerText.trim();
            obj[c].profile_number = Number(tr.getElementsByTagName('td')[1].innerText.trim());
            obj[c].gold_number = Number(tr.getElementsByTagName('td')[2].innerText.trim());
            obj[c].conversion_rate = cv;
            str += obj[c].keyword + '\t' + obj[c].profile_number + '\t' + obj[c].gold_number + '\t' + obj[c].conversion_rate + '\n';
            c += 1;
        }
        console.log(str);
        console.table(obj);
    }
}
userComeFrom(10);