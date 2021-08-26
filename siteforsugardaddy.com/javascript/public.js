$(document).ready(function(){
	bannerSet();
	appealSet();
	perksStyleSet();
	feelSet();
});
$(window).load(function(){
	spreadSet();
});

//************************************START banner************************************
function bannerSet(){
	bannerStyleSet();
	bannerStyleResize();
}
function bannerStyleResize(){
	$(window).resize(function(){
		bannerStyleSet();
	});
}
function bannerStyleSet(){
	var headerHeight = $('#header').height();
	$('.banner').css('margin-top',headerHeight);
}
//************************************END banner************************************

//************************************START appeal************************************
function appealSet(){
	appealStyleSet();
	appealResizeSet();
}
function appealResizeSet(){
	$(window).resize(function(){
		appealStyleSet();
	});
}
function appealStyleSet(){
	var windowWidth = $(window).width();//get the screen width

	var appealOrDivCHeightArray = [$('.appealordiv_c:eq(0)').innerHeight(),$('.appealordiv_c:eq(1)').innerHeight(),$('.appealordiv_c:eq(2)').innerHeight()];//array
	var maxAppealOrDivCHeight = Math.max.apply(Math,appealOrDivCHeightArray);//max value from array
	
	var appealOrDivHeightArray = [$('.appealor_div:eq(0)').height(),$('.appealor_div:eq(1)').height(),$('.appealor_div:eq(2)').height()];//array
	var maxAppealOrDivHeight = Math.max.apply(Math,appealOrDivHeightArray);//max value from array
	if(windowWidth>733){//window width wider than 650px(please consider the width of scroll bar)
		if($('.appealor_div:eq(1)').innerHeight()<maxAppealOrDivHeight){//if center div height less than max div height
			$('.appealor_div:eq(1)').css('height',maxAppealOrDivHeight);
		}
		if(maxAppealOrDivCHeight<$('.appealor_div:eq(1)').innerHeight()){//if max div container height less than center div height
			$('.appealor_div:eq(1)').css('height',maxAppealOrDivCHeight);
		}
	}else{//window width less than or equal to 650px
		$('.appealordiv_c').each(function(){//keep the height of div and div container same when the screen height less than or equal to 650px
			if($(this).innerHeight()!=$(this).parent().height()){
				$(this).parent().css('height',$(this).innerHeight());
			}
		});
	}
}
//************************************END appeal************************************

//************************************START perks************************************
function perksStyleSet(){
	$('.perksimgsfoot_c a').hover(function(){
		$(this).css('color','#ff0000');
	});
	$('.perksimgsfoot_c a').mouseleave(function(){
		$(this).css('color','#b93236');
	});
}
//************************************END perks************************************

//************************************START feel************************************
function feelSet(){
	feelStyleSet();
	feelStyleResize();
}
function feelStyleResize(){
	$(window).resize(function(){
		feelStyleSet();
	});
}
function feelStyleSet(){
	var feelConDivStarWidth = $('.feelcondiv_star').width();
	starLeft = (feelConDivStarWidth-100)/2;
	$('.feelcondivstar_c').css('margin-left',starLeft);
}
//************************************END feel************************************

//************************************START spread************************************
function spreadSet(){
	var imgPaddingTopArray = [];
	for(var i=0; i<=3; i++){
		imgPaddingTopArray[i] = (getMaxSpreadConDivCHeight()-getSpreadConDivCImgHeightArray()[i])/2;
		$('.spreadcondiv_c').eq(i).children().css('padding-top',imgPaddingTopArray[i]).css('padding-bottom',imgPaddingTopArray[i]);
	}
}
function getSpreadConDivCImgHeightArray(){
	var spreadConDivCImgHeightArray = [$('.spreadcondiv_c:eq(0) img').height(),$('.spreadcondiv_c:eq(1) img').height(),$('.spreadcondiv_c:eq(2) img').height(),$('.spreadcondiv_c:eq(3) img').height()];
	$(window).resize(function(){
		spreadConDivCImgHeightArray = [$('.spreadcondiv_c:eq(0) img').height(),$('.spreadcondiv_c:eq(1) img').height(),$('.spreadcondiv_c:eq(2) img').height(),$('.spreadcondiv_c:eq(3) img').height()];	
	});
	return spreadConDivCImgHeightArray;
}
function getMaxSpreadConDivCHeight(){
	var maxSpreadConDivCHeight = Math.max.apply(Math,getSpreadConDivCHeightArray());
	return maxSpreadConDivCHeight;
}
function getSpreadConDivCHeightArray(){
	var spreadConDivCHeightArray = [$('.spreadcondiv_c:eq(0)').innerHeight(),$('.spreadcondiv_c:eq(1)').innerHeight(),$('.spreadcondiv_c:eq(2)').innerHeight(),$('.spreadcondiv_c:eq(3)').innerHeight()];
	$(window).resize(function(){
		spreadConDivCHeightArray = [$('.spreadcondiv_c:eq(0)').innerHeight(),$('.spreadcondiv_c:eq(1)').innerHeight(),$('.spreadcondiv_c:eq(2)').innerHeight(),$('.spreadcondiv_c:eq(3)').innerHeight()];
	});
	return spreadConDivCHeightArray;
}
//************************************END spread************************************