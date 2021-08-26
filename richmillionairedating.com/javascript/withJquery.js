//valid on all
$(document).ready(function(){
	headerSet();
	dynamicSet();
	backTopSet();
	sharePopUp();
});

//set update time
function dynamicSet(){
	var indexUpdateDate = "September 9, 2019";
	var indexUpdateDateTime = "2019-09-09";
	$('#index_updatetime').text(indexUpdateDate).attr('datetime',indexUpdateDateTime);
	
	var appsUpdateDate = "September 9, 2019";
	var appsUpdateDateTime = "2019-09-09";
	$('#apps_updatetime').text(appsUpdateDate).attr('datetime',appsUpdateDateTime);
	
	var blogsUpdateDate = "September 9, 2019";
	var blogsUpdateDateTime = "2019-09-09";
	$('#blogs_updatetime').text(blogsUpdateDate).attr('datetime',blogsUpdateDateTime);	
}

//set header
function headerSet(){
	var logoImgHeight = $('.logo_img img').height();
	var logoHeight = $('.logo').height();
	$('.nav').css('line-height',logoHeight+"px");
	
	var headerContainerWidth = $('.header_container').width();
	var logoWidth = $('.logo').width();
	var navWidth = $('.nav').width();
	if(headerContainerWidth<(logoWidth+navWidth)){
		$('.header_container').width("92%").css('margin','1rem 4%');
		$('.logo').width('100%').css('text-align','center');
		$('.nav').width('100%').css('text-align','center').css('line-height','2rem').css('padding-top','1rem');
		$('.nav a').css('margin','0 1rem');
	}
}

//back to top
function backTopSet(){	
	var footerHeight = $('#footer').height();
	$('.backtop').css("bottom",footerHeight);
	$(window).scroll(function(){
		if(($(document).scrollTop()<=0)||($(window).width()<=650)){
			$('.backtop').css("display","none");
		}else{
			$('.backtop').css("display","block");
		}
	});		
}

//share pop up window
function sharePopUp(){
	$('#share').click(function(){
		$('.share_popup').css('display','block');
	});
	$('.shareclose_container').click(function(){
		$('.share_popup').css('display','none');
	});
}