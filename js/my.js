/*
 * @Author: admin
 * @Date:   2018-08-09 19:20:28
 * @Last Modified by:   admin
 * @Last Modified time: 2018-08-25 14:18:59
 */

$('.nav_1 .nav-left>li').hover(function() {
	$(this).children('ul').show()
}, function() {
	$(this).children('ul').hide()
});
$('.con-wrap .left span').mouseenter(function(event) {
	$(this).addClass('curr');
	$(this).siblings('').removeClass('curr');
	var index = $(this).index();
	$('.con-wrap .right div').eq(index).show();
	$('.con-wrap .right div').eq(index).siblings().hide()
});

//第一个轮播图
var num = 0;
var time;

function go() {
	time = setInterval(function() {
		num = num + 1;
		if (num > 5) {
			num = 0;
			$('main .box .ulist').css('left', -894 * num + 'px');
			num = 1;
		}
		$('main .box .ulist').animate({
			'left': -num * 894
		})
	}, 5000)
}
go()
$('main .box li').hover(function() {
	clearInterval(time);
}, function() {
	go()
});

$('main .box .left i').click(function(event) {
	num = num - 1;
	if (num < 0) {
		num = 5;
		$('main .box .ulist').css('left', -894 * num + 'px');
		num = 4;
	}
	$('main .box .ulist').animate({
		'left': -894 * num + 'px'
	})
});
$('main .box .right i').click(function(event) {
	num = num + 1;
	if (num > 5) {
		num = 0;
		$('main .box .ulist').css('left', -894 * num + 'px');
		num = 1;
	}
	$('main .box .ulist').animate({
		'left': -894 * num + 'px'
	})
});
//第二个轮播
var sum = 0;
var timers;
var n = 0;

function gg() {
	timers = setInterval(function() {
		sum = sum + 1;
		if (sum == 3) {
			n = 0;
			$('.main_1 .box ol li').eq(n).addClass('current').siblings('').removeClass('current');
		}
		if (sum > 3) {
			sum = 0;
			$('.main_1 .box .ulist1').css('left', -894 * sum + 'px');
			sum = 1;
		}
		$('.main_1 .box ol li').eq(sum).addClass('current').siblings('').removeClass('current');
		$('.main_1 .box .ulist1').animate({
			'left': -sum * 894
		})
	}, 5000)
}
gg()
$('.main_1 .box li').hover(function() {
	clearInterval(timers);
}, function() {
	gg()
});
//点击导航栏
$('.main_1 ol li').click(function(event) {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	// 获取用户点击标签的索引值
	sum = $(this).index();
	$('.main_1 .ulist1').css('left', -894 * sum + 'px');

});

$('.main_1 .box .left i').click(function(event) {
	sum = sum - 1;
	if (sum < 0) {
		sum = 3;
		$('.main_1 .box .ulist1').css('left', -894 * sum + 'px');
		sum = 2;
	}
	$('.main_1 .box ol li').eq(sum).addClass('current').siblings('').removeClass('current');
	$('.box .ulist1').animate({
		'left': -894 * sum + 'px'
	})
});
$('.main_1 .box .right i').click(function(event) {
	sum = sum + 1;
	if (sum == 3) {
		n = 0;
		$('.main_1 .box ol li').eq(n).addClass('current').siblings('').removeClass('current');
	}
	if (sum > 3) {
		sum = 0;
		$('.main_1 .box .ulist1').css('left', -894 * sum + 'px');
		sum = 1;
	}
	$('.main_1 .box ol li').eq(sum).addClass('current').siblings('').removeClass('current');
	$('.main_1 .box .ulist1').animate({
		'left': -894 * sum + 'px'
	})
});

//侧边轮播
var m = 0;
var timer;

function gogo() {
	timer = setInterval(function() {
		m = m + 1;
		if (m > 4) {
			m = 0;
		}
		// ul移动
		$('.m-r .ulis-r').css('left', -285 * m + 'px');
		// 圆圈变色
		$('.m-r ol li').eq(m).addClass('current');
		$('.m-r ol li').eq(m).siblings().removeClass('current')
	}, 5000)
}
gogo()
	// 鼠标移入移出
$('.m-r').hover(function() {
	clearInterval(timer)
}, function() {
	gogo()
});

// 点击圆圈
$('.m-r ol li').click(function(event) {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	// 获取用户点击标签的索引值
	m = $(this).index();
	$('.m-r .ulis-r').css('left', -285 * m + 'px');

});

$('#hangye').mouseover(function(event) {
	$(this).css('height', 'auto');
});
$('#hangye').mouseout(function(event) {
	$(this).css('height', '69px')
});

//下拉栏
$('.ulist8 li').mouseenter(function(event) {
	//console.log($(this));
	$(this).addClass('current').siblings().removeClass('current');
	var index = $(this).index();
	$('.u8 ul').eq(index).show().siblings().hide();

});
$('.ulist8 li').eq(0).mouseenter(function(event) {
	$('.city').css('display', '');
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
	$('html, body').animate({
		'scrollTop': '0px'
	}, 1000)
});
$('.right .one .tab2').hover(function() {
	$(this).animate({
		'background': 'rgba(255,255,255,0.1)'
	});
}, function() {
	$(this).animate({
		'background': '#ff612b'
	});
});