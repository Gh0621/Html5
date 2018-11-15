/*
 * @Author: admin
 * @Date:   2018-08-25 14:03:38
 * @Last Modified by:   admin
 * @Last Modified time: 2018-08-25 14:19:25
 */

$('.nav-city').mouseenter(function(event) {
	$('.nav-city .uslist-city').show();
});
$('.nav-city').mouseleave(function(event) {
	$('.nav-city .uslist-city').hide();
});
$('.que').hover(function() {
	$(this).css('background-color', 'rgb(50,80,30)');
	$('.que span').css('color', '#fff');
	$('.que .iconfont').css('color', '#fff');
}, function() {
	$(this).css('background-color', 'rgb(234, 247, 220)');
	$('.que span').css('color', 'rgb(65, 117, 5)');
	$('.que .iconfont').css('color', 'rgb(65, 117, 5)');
});
$('.anws').hover(function() {
	$(this).css('background-color', 'rgb(50,80,30)');
	$('.anws span').css('color', '#fff');
	$('.anws .iconfont').css('color', '#fff');

}, function() {
	$(this).css('background-color', 'rgb(234, 247, 220)');
	$('.anws span').css('color', 'rgb(65, 117, 5)');
	$('.anws .iconfont').css('color', 'rgb(65, 117, 5)');
});
$(window).scroll(function(event) {
	if ($(window).scrollTop() <= 45) {
		$('.header-mod').css('top', '45px');
	} else if ($(window).scrollTop() > 45) {
		$('.header-mod').css('top', '0');
	}
});
$('.tag-ul li').click(function(event) {
	$(this).addClass('current').siblings('').removeClass('current');
	var index = $(this).index();
	$('.main-item>ul').eq(index).addClass('tag-list').siblings('').removeClass('tag-list');
});
$('.mor-city').hover(function() {
	$('.mor-city .uslist-city').show();
}, function() {
	$('.mor-city .uslist-city').hide();
});
$('.sid-nav').hover(function() {
	$(this).css('background', '#62ab00');
	$(this).children('.sidebar-nav-hover').css('width', '130px');
	$(this).children('.nav-arrow').show();
}, function() {
	$(this).css('background', '');
	$(this).children('.sidebar-nav-hover').css('width', '0');
	$(this).children('.nav-arrow').hide();
});

$(window).scroll(function(event) {
	if ($(window).scrollTop() > $(window).height()) {
		$('.btn-gotop').show()
	} else {
		$('.btn-gotop').hide()
	}
});

$('.btn-gotop').click(function(event) {
	//$(window).scrollTop($('li').eq(0).offset().top)
	$('html, body').animate({
		'scrollTop': '0px'
	}, 1000)
});