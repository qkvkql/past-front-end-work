document.addEventListener('DOMContentLoaded',function(event){
	setDynamicHTML();
	setHeightAndMargin();
	hideUserDisplayCover();
	sdmPopUp();
});
//*****************************************set value of dynamic content*****************************************
function setDynamicHTML(){
	var number = '4,166,400';
	
	publishDate('b006','2019-09-18','September 18, 2019');
	publishDate('b005','2019-09-18','September 18, 2019');
	publishDate('b004','2019-09-18','September 18, 2019');
	publishDate('b003','2019-09-18','September 18, 2019');
	publishDate('b002','2019-09-18','September 18, 2019');
	publishDate('b001','2019-09-18','September 18, 2019');
	if(document.getElementById('window_description')!=null){document.getElementById('window_description').innerHTML = number+'+ Singles Now';} if(document.getElementById('members_number')!=null){document.getElementById('members_number').innerHTML = number;}
}
//*****************************************publish date*****************************************
function publishDate(selector, dateTime, date){if(document.getElementById(selector)!=null){document.getElementById(selector).setAttribute('datetime',dateTime); document.getElementById(selector).innerHTML = date;}}

//*****************************************height and margin*****************************************
function setHeightAndMargin(){var headerHeight=document.getElementById('header').clientHeight;var introductionHeight=document.getElementById('introduction').clientHeight;var footerHeight=document.getElementById('footer').clientHeight;var screenHeight=document.documentElement.clientHeight;document.getElementById('content').style.marginTop=headerHeight+'px';if((screenHeight-introductionHeight-footerHeight)>headerHeight){document.getElementById('intro_placeholder').style.height=screenHeight-headerHeight-introductionHeight-footerHeight+'px'}}
function setContentMarginTop(){var headerHeight = document.getElementById('header').clientHeight; document.getElementById('content').style.marginTop=headerHeight+'px';}

//*****************************************user display cover*****************************************
function hideUserDisplayCover(){if(document.body.clientWidth>650){document.getElementById('userdisplaycover_div').onclick = userDisplayCoverDivHide; document.getElementById('userdisplaycover_div').onmouseover = userDisplayCoverDivHide;}}
function userDisplayCoverDivHide(){document.getElementById('userdisplaycover_div').style.display = 'none'; if(document.body.clientWidth>1023){document.getElementById('userdisplay_cover').style.height = '210px';}else{document.getElementById('userdisplay_cover').style.height = '180px';}}

//*****************************************sdm pop up window*****************************************
function sdmPopUp(){sdmPopUpWindowSet(); document.getElementById('sdmwindow_trigger').onclick = function(){sdmPopUpWindowSet(); for(var i=0; i<document.getElementsByClassName('sdm_popup').length; i++){document.getElementsByClassName('sdm_popup')[i].style.display = 'block';}}; for(var j=0; j<document.getElementsByClassName('sdmclose_container').length; j++){document.getElementsByClassName('sdmclose_container')[j].onclick = function(){sdmPopUpWindowSet(); for(var i=0; i<document.getElementsByClassName('sdm_popup').length; i++){document.getElementsByClassName('sdm_popup')[i].style.display = 'none';}};}}
function sdmPopUpWindowSet(){var windowDisplayHeight = document.getElementsByClassName('window_display')[0].clientHeight; var headerHeight = document.getElementById('header').offsetHeight; var windowMarginTop = getMarginTop('window'); var sdmPopUpContainerHeight = parseInt(windowDisplayHeight)+parseInt(headerHeight)+parseInt(windowMarginTop)+'px'; if(document.getElementsByClassName('sdmpopup_container')!=null){document.getElementsByClassName('sdmpopup_container')[0].style.height = sdmPopUpContainerHeight; document.getElementsByClassName('sdmpopup_container')[0].style.marginTop = '10px';} if(document.getElementsByClassName('window')!=null){var sdmPopUpContainerWidth = document.getElementsByClassName('window')[0].offsetWidth; var windowMarginRight = getMarginRight('window'); document.getElementsByClassName('sdmpopup_container')[0].style.width = sdmPopUpContainerWidth+2+'px'; document.getElementsByClassName('sdmpopup_container')[0].style.marginRight = windowMarginRight;}}
function getMarginTop(selector){if(document.getElementsByClassName(selector)!=null){var e = document.getElementsByClassName(selector); var r = e[0].currentStyle || window.getComputedStyle(e[0]); return r.marginTop; }else if(document.getElementById(selector)!=null){var e = document.getElementById(selector); var r = e.currentStyle || window.getComputedStyle(e); return r.marginTop;}else{return 0;}}
function getMarginRight(selector){if(document.getElementsByClassName(selector)!=null){var e = document.getElementsByClassName(selector); var r = e[0].currentStyle || window.getComputedStyle(e[0]); return r.marginRight; }else if(document.getElementById(selector)!=null){var e = document.getElementById(selector); var r = e.currentStyle || window.getComputedStyle(e); return r.marginRight;}else{return 0;}}
