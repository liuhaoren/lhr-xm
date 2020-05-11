$(function(){
	$(".height>div:nth-of-type(1)").hover(function() {
		jQuery(this).css({"background-color":"rgba(0,0,0,0.2)"}).stop().animate({"line-height":"100px","margin-bottom":"10px"}, 300);
	}, function() {
		jQuery(this).css({"background-color":"rgba(0,0,0,0)"}).stop().animate({"line-height":"50px","margin-bottom":"0px"}, 300);
	});
	$(".height>div:nth-of-type(2)").hover(function() {
		jQuery(this).css({"background-color":"rgba(0,0,0,0.2)"}).stop().animate({"line-height":"100px","margin-bottom":"10px","margin-top":"10px"}, 300);
	}, function() {
		jQuery(this).css({"background-color":"rgba(0,0,0,0)"}).stop().animate({"line-height":"50px","margin-bottom":"0px","margin-top":"0px"}, 300);
	});
	$(".height>div:nth-of-type(3)").hover(function() {
		jQuery(this).css({"background-color":"rgba(0,0,0,0.2)"}).stop().animate({"line-height":"100px","margin-top":"10px"}, 300);
	}, function() {
		jQuery(this).css({"background-color":"rgba(0,0,0,0)"}).stop().animate({"line-height":"50px","margin-top":"0px"}, 300);
	});

	/*$(".no2>ul>li:nth-of-type(4)>div:nth-of-type(1)").hover(function(){
		jQuery(this).css({"cursor":"pointer","background-position":"0 0"}).stop().animate({"line-height":"100px","margin-bottom":"10px"}, 1000);
	}), function() {
		jQuery(this).css({"background-position":"-1060px 0"}).stop().animate({"line-height":"100px","margin-bottom":"10px"}, 1000);
	};*/
	$(".no2>ul>li:nth-of-type(4)>div:nth-of-type(1)").mouseover(function(event) {
		jQuery(this).css({"cursor":"pointer"}).stop().animate({"background-position":"0px"}, 200);
		jQuery(".no2>ul>li:nth-of-type(4)>div:nth-of-type(1)>.normal").css({"display":"none"}).animate({}, 200)
		jQuery(".no2>ul>li:nth-of-type(4)>div:nth-of-type(1)>.over").css({"display":"block"}).animate({}, 200)
	});
	$(".no2>ul>li:nth-of-type(4)>div:nth-of-type(1)").mouseout(function(event) {
		jQuery(this).css({}).stop().animate({"background-position":"-1060px"}, 200);
		jQuery(".no2>ul>li:nth-of-type(4)>div:nth-of-type(1)>.over").css({"display":"none"}).animate({}, 200)
		jQuery(".no2>ul>li:nth-of-type(4)>div:nth-of-type(1)>.normal").css({"display":"block"}).animate({}, 200)
	});


	jQuery(".no3").mouseover(function() {
		$(".no3-content>div:nth-of-type(4)").css({
			opacity: '1'
		}).animate({"left":"0"}, 500);
		$(".no3-content>div:nth-of-type(5)").css({
			opacity: '1'
		}).animate({"left":"0"}, 700);
		$(".no3-content>div:nth-of-type(1)").css({
			opacity: '1'
		}).animate({"left":"0"}, 900);
		$(".no3-content>div:nth-of-type(3)").css({
			opacity: '1'
		}).animate({"left":"0"}, 1200);
	});

})