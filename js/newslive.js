/*
 * @Author: admin
 * @Date:   2018-08-25 14:01:45
 * @Last Modified by:   admin
 * @Last Modified time: 2018-08-25 14:09:19
 */

$('.sitenav .login').mouseenter(function(event) {
	$(this).children('i.hicon').addClass('hico-up');
	$('.sitenav .user .site-userlist').show();
});

$('.sitenav .login').mouseleave(function(event) {
	$(this).children('i.hicon').removeClass('hico-up');
	$('.sitenav .user .site-userlist').hide();
});

$('.sel-city').mouseenter(function(event) {
	$('.sel-city .uslist-city').show();
});

$('.sel-city').mouseleave(function(event) {
	$('.sel-city .uslist-city').hide();
});

$('.sel-city').hover(function() {
	console.log($(this).children('hicon-gz'))
	$(this).children('i.hicon-gz').addClass('hico-up');
}, function() {
	$(this).children('i.hicon-gz').removeClass('hico-up');
});

$(window).scroll(function(event) {
	var vh = $(window).scrollTop();

	if (vh < $('.ddtitle').offset().top) {
		$('.slide-layer').removeClass('slide-fixed');
	} else if (vh >= $('.ddtitle').offset().top && vh < $('#last').offset().top) {
		$('.slide-layer').addClass('slide-fixed');
		$('.slide-layer').removeClass('absolute-bottom')
	} else if (vh >= $('#last').offset().top) {
		$('.slide-layer').removeClass('slide-fixed')
		$('.slide-layer').addClass('absolute-bottom');
	}
});

//回到顶部
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