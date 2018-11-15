/*
 * @Author: admin
 * @Date:   2018-08-25 14:07:07
 * @Last Modified by:   admin
 * @Last Modified time: 2018-08-25 14:08:56
 */

$('.nav-main li').hover(function() {
	$(this).addClass('menu-hover');
	$('.sub-menu').css('display', 'block');
}, function() {
	$(this).removeClass('menu-hover');
	$('.sub-menu').css('display', 'none');
});
$('.jx .list-info').hover(function() {
	$(this).addClass('list-hover');
	$('.jx .list-hover .market-ad').css('background-position', '0 -240px');
}, function() {
	$(this).removeClass('list-hover');
	$('.jx .list-info .market-ad').css('background-position', '0 0');
});
$('.qk .list-info').hover(function() {
	$(this).addClass('list-hover');
	$('.qk .list-hover .market-ad').css('background-position', '-500px -240px');
}, function() {
	$(this).removeClass('list-hover');
	$('.qk .list-info .market-ad').css('background-position', '-500px 0');
});
$('.rt .list-info').hover(function() {
	$(this).addClass('list-hover');
	$('.rt .list-hover .market-ad').css('background-position', '0 -720px');
}, function() {
	$(this).removeClass('list-hover');
	$('.rt .list-info .market-ad').css('background-position', '0 -480px');
});
$('.cs .list-info').hover(function() {
	$(this).addClass('list-hover');
	$('.cs .list-hover .market-ad').css('background-position', '-500px -720px');
}, function() {
	$(this).removeClass('list-hover');
	$('.cs .list-info .market-ad').css('background-position', '-500px -480px');
});

$('.tgty').hover(function() {
	$(this).children('.li-info').addClass('li-hover');
}, function() {
	$(this).children('.li-info').removeClass('li-hover');
});
$('.hlfy').hover(function() {
	$(this).children('.li-info').addClass('li-hover');
}, function() {
	$(this).children('.li-info').removeClass('li-hover');
});
$('.xght').hover(function() {
	$(this).children('.li-info').addClass('li-hover');
}, function() {
	$(this).children('.li-info').removeClass('li-hover');
});

$(window).scroll(function(event) {
	var vh = $(window).scrollTop();
	if (vh >= $('.baner-count').offset().top) {
		$('.cp-float-cont').css('display', 'block');
	} else if (vh < $('.baner-count').offset().top) {
		$('.cp-float-cont').css('display', 'none');
	}

});
// 侧边栏
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