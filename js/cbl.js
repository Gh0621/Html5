/*
* @Author: admin
* @Date:   2018-08-24 16:53:32
* @Last Modified by:   admin
* @Last Modified time: 2018-08-25 14:12:33
*/
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
	console.log($(window).scrollTop())
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