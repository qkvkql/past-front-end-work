document.addEventListener('DOMContentLoaded',function(event){
    setTidsByUrlParam();
    setHeaderAndFooterLength();
    window.onresize = function () {
        setHeaderAndFooterLength();
    }
    
});
function setTidsByUrlParam () {
    /*************** START set tid by url param value ***************/
    (function(){let prefixText='prefix',classText='class',p=0,c=0;function addNewPrefix(){p+=1;return prefixText+p.toString();}function addNewClass(){c+=1;return classText+c.toString();}
    let initialSetObj = {
        //url suffix relevant
        urlTidParamName: 'u',
        defaultTidIfNoUrlValue: 'Jon01',
        
        //sdm home page
        [addNewPrefix()]: 'https://www.sugardaddymeet.com/i/',
        [addNewClass()]: 'trackSdmHome',
        //sdm guest/registration page
        [addNewPrefix()]: 'https://www.sugardaddymeet.com/guest?tid=',
        [addNewClass()]: 'trackSdmGuest',
        //sdm android app page
        [addNewPrefix()]: 'https://app.appsflyer.com/com.sugardaddydating.sugardaddymeet?pid=',
        [addNewClass()]: 'trackSdmAndroid',
        //sdm ios app page
        [addNewPrefix()]: 'https://app.appsflyer.com/id1533577373?pid=',
        [addNewClass()]: 'trackSdmIos'
    };
    trackUsers();
    function trackUsers () {
        //apply on all elements
        for (let i = 1; i <= p; i++) {
            f(prefixText + i.toString(), classText + i.toString());
        }
        //create a function to simplify the process of applying on all elements
        function f (prefix, htmlClassName) {
            let elementsByClass = document.getElementsByClassName(initialSetObj[htmlClassName]);
            for (let i = 0; i < elementsByClass.length; i++) {
                elementsByClass[i].setAttribute('href', initialSetObj[prefix] + getUrlParamValue(initialSetObj.urlTidParamName, initialSetObj.defaultTidIfNoUrlValue));
            }
        }
        
    }
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
    /*************** END set tid by url param value ***************/
}
function setHeaderAndFooterLength () {
    let hl = document.getElementsByClassName('header-left')[0];
    let hr = document.getElementsByClassName('header-right')[0];
    let h = document.getElementsByTagName('header')[0];
    let fl = document.getElementsByClassName('footer-left')[0];
    let fr = document.getElementsByClassName('footer-right')[0];
    let f = document.getElementsByTagName('footer')[0];
    let hCWidth = h.clientWidth - (hl.offsetWidth + hr.offsetWidth);
    let fCWidth = f.clientWidth - (fl.offsetWidth + fr.offsetWidth);
    document.getElementsByClassName('header-center')[0].style.width = hCWidth + 'px';
    document.getElementsByClassName('footer-center')[0].style.width = fCWidth + 'px';
}