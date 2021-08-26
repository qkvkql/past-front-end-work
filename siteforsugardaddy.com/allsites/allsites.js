$(document).ready(function(){
	setHeaderAndFooter();
	setHeaderAnchor();
	setHeaderBtn();
});

//*************************************************START header and footer*************************************************
function setHeaderAndFooter(){
	headerAndFooter();
	headerAndFooterResize();
}
function headerAndFooterResize(){
	headerAndFooter();
}
function headerAndFooter(){
	setHeaderHeight();
	$(window).resize(function(){
		setHeaderHeight();
	});
	//nav a effect
	$('.nav>a').hover(function(){
		$(this).css('color','#b93236');
	});
	$('.nav>a').mouseleave(function(){
		$(this).css('color','#363537');
	});
	$('.footer_dir a').hover(function(){
		$(this).css('color','#ffffff');
	});
	$('.footer_dir a').mouseleave(function(){
		$(this).css('color','#9EA1A2');
	});
	//function toggle trigged by clicking
	var toggle = true;
	$('.nav_f').click(function(){
		if(toggle){
			var headerHeight = $('.header').innerHeight();
			$('.navf_div').css('top',headerHeight);
			$('.navf_div').slideDown(200);
			$('.nav_f img').attr('src','images/navf_close.png');
			toggle = false;
		}else{
			var headerHeight = $('.header').innerHeight();
			$('.navf_div').css('top',headerHeight);
			$('.navf_div').slideUp(200);
			$('.nav_f img').attr('src','images/navf.png');
			toggle = true;
		}
	});
	$('.navfdiv_line a').click(function(){
		$('.navf_div').slideUp(200);
		$('.nav_f img').attr('src','images/navf.png');
		toggle = true;
	});
	$('.navf_btn a').click(function(){
		$('.navf_div').slideUp(200);
		$('.nav_f img').attr('src','images/navf.png');
		toggle = true;
	});
	$(window).resize(function(){
		$('.navf_div').slideUp(200);
		$('.nav_f img').attr('src','images/navf.png');
		toggle = true;
	});
	$(window).scroll(function(){
		$('.navf_div').slideUp(200);
		$('.nav_f img').attr('src','images/navf.png');
		toggle = true;
	});
	//nav a effect
	$('.navfdiv_line a').hover(function(){
		$(this).css('color','#b93236');
	});
	$('.navfdiv_line a').mouseleave(function(){
		$(this).css('color','#363537');
	});
}
function setHeaderHeight(){
	var headerContainerWidth = $('.header_container').innerWidth();
	var logoWidth = $('.logo').outerWidth();
	var navWidth = $('.nav').outerWidth();
	
	if(headerContainerWidth<(logoWidth+navWidth)){
		$('.nav').css('text-align','center').css('padding-top','1rem');
		$('.nav>a').css('margin','0 0.75rem');
	}
	else{
		$('.nav').css('padding-top','0');
		$('.nav>a').css('margin','0 0 0 1.5rem');
	}
}
//*************************************************END header and footer*************************************************

//*************************************************START header anchor*************************************************
function setHeaderAnchor(){
	headerAnchor('.anchor_contentappeal','#content_appeal');
	headerAnchor('.anchor_contentintro','#content_intro');
	headerAnchor('.anchor_contentmix1','#content_mix1');
	headerAnchor('.anchor_contentmix2','#content_mix2');
}
function headerAnchor(clickSelector, targetSelector){
	$(clickSelector).click(function(){
		$('body,html').animate({scrollTop: $(targetSelector).offset().top-getHeaderHeight()}, 500);
	});
}
function getHeaderHeight(){
	var headerHeight = $('#header').height();
	$(window).resize(function(){
		headerHeight = $('#header').height();
	});
	return headerHeight;
}
//*************************************************END header anchor*************************************************

//*************************************************START header btn*************************************************
function setHeaderBtn(){
	$('.header_btn a').hover(function(){
		$(this).css('color','#ffffff');
	});
	$('.header_btn a').mouseleave(function(){
		$(this).css('color','#ffffff');
	});
}
//*************************************************END header btn*************************************************