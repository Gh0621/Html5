/*
 * @Author: admin
 * @Date:   2018-08-24 00:16:29
 * @Last Modified by:   admin
 * @Last Modified time: 2018-08-25 14:17:59
 */
var num = 0;
var timer;
timer = setInterval(function() {
	num++;
	if (num > 10) {
		num = 0;
		$('#boxlist').css('top', -36 * num + 'px');
	}

	$('#boxlist').animate({
		'top': -36 * num + 'px'
	}, 1000);

}, 1500)


$('#tabboxlist>li').hover(function() {
	var index = $(this).index();
	$('.tabboxlist1>ul').eq(index).addClass('fshow')
	$('.tabboxlist1>ul').eq(index).siblings().removeClass('fshow')
}, function() {
	$('.tabboxlist1>ul').eq(0).addClass('fshow')
	$('.tabboxlist1>ul').eq(0).siblings().removeClass('fshow')
});

$(window).scroll(function(event) {
	if ($(window).scrollTop() >= $(window).height() / 4) {
		$('.fhdb').show()
	} else {
		$('.fhdb').hide()
	}
});

$('.fhdb').click(function(event) {

	$('html,body').animate({
		'scrollTop': '0px'
	},1000)

});
$('#right-a1').hover(function() {
	$(this).css('color', '#f60');
	$('.right-icon2').css('background', "url('../images/sitenav-bg6.png') no-repeat -59px -58px");
}, function() {
	$(this).css('color', '#666');
	$('.right-icon2').css('background', "url('../images/sitenav-bg6.png') no-repeat -40px -58px");
});
$('#right-a2').hover(function() {
	$(this).css('color', '#f60');
}, function() {
	$(this).css('color', '#666');
});
$('#right-a3').hover(function() {
	$(this).css('color', '#f60');
	$('.right-icon3').css('background', "url('../images/sitenav-bg6.png') no-repeat -99px -57px");
}, function() {
	$(this).css('color', '#666');
	$('.right-icon3').css('background', "url('../images/sitenav-bg6.png') no-repeat -80px -57px");
});
$('.wrap-right-list').hover(function() {
	$('.right-box').show();
}, function() {
	$('.right-box').hide();
});

//时间差
var to = document.getElementById('timeout')
var to1 = document.getElementById('timeout1')
var to2 = document.getElementById('timeout2')

function getTime() {
	var now = new Date();
	// 当前日期
	var c = new Date(2018, 11, 25);
	// 获取指定时间
	// ms差
	var date3 = c.getTime() - now.getTime();
	// 天
	var day = parseInt(date3 / 1000 / 3600 / 24);

	// 时
	var leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
	var hours = Math.floor(leave1 / (3600 * 1000))
	//计算相差分钟数
	var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
	var minutes = Math.floor(leave2 / (60 * 1000))

	//计算相差秒数
	var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
	var seconds = Math.round(leave3 / 1000)
	to.innerHTML = `<em>还剩：</em>${day}天${hours}小时${minutes}分钟${seconds}秒`
	to1.innerHTML = `<em>还剩：</em>${day}天${hours}小时${minutes}分钟${seconds}秒`
	to2.innerHTML = `<em>还剩：</em>${day}天${hours}小时${minutes}分钟${seconds}秒`
}
getTime();
setInterval(function() {
	getTime()

}, 1000)