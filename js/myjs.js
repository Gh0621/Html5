/*
 * @Author: admin
 * @Date:   2018-08-21 17:05:37
 * @Last Modified by:   admin
 * @Last Modified time: 2018-08-25 14:13:04
 */
$('.tab1').mouseenter(function(event) {
	$('.moretab1').show();
});
$('.tab1').mouseleave(function(event) {
	$('.moretab1').hide();
});
$('.moretab1').mouseleave(function(event) {
	$('.moretab1').hide();
});
$('.tab2').mouseenter(function(event) {
	$('.moretab2').show();
});
$('.moretab2').mouseleave(function(event) {
	$('.moretab2').hide();
});
$('.tab2').mouseleave(function(event) {
	$('.moretab2').hide();
});
$('.tab3').mouseenter(function(event) {
	$('.moretab3').show();
});
$('.moretab3').mouseleave(function(event) {
	$('.moretab3').hide();
});
$('.tab3').mouseleave(function(event) {
	$('.moretab3').hide();
});
$('.tab4').mouseenter(function(event) {
	$('.moretab4').show();
});
$('.moretab4').mouseleave(function(event) {
	$('.moretab4').hide();
});
$('.tab4').mouseleave(function(event) {
	$('.moretab4').hide();
});
$('.tab5').mouseenter(function(event) {
	$('.moretab5').show();
});
$('.moretab5').mouseleave(function(event) {
	$('.moretab5').hide();
});
$('.tab5').mouseleave(function(event) {
	$('.moretab5').hide();
});

var timer;
var num = 0;

function go() {
	timer = setInterval(function() {
		num++;
		if (num > 5) {
			num = 0;
			$('#rightlist').css('left', -220 * num);

		}
		$('#rightlist').animate({
			'left': -220 * num
		})
		console.log(num)

	}, 3000)
}
go();
$('#rightlist li').hover(function() {
	clearInterval(timer);
	$('.lunbotleft').show();
	$('.lunbotright').show();
}, function() {
	go();
	$('.lunbotleft').hide();
	$('.lunbotright').hide();
}, function() {});
$('.lunbotleft').click(function(event) {
	num--;
	if (num < 0) {
		num = 5
		$('#rightlist').css('left', -220 * num);
	}
	console.log(num)
	$('#rightlist').animate({
		'left': -220 * num
	});

});
$('.lunbotright').click(function(event) {
	num++;
	console.log(num)
	if (num > 5) {
		num = 0;
		$('#rightlist').css('left', -220 * num);

	}
	$('#rightlist').animate({
		'left': -220 * num
	})

});

var num1 = 0;
$('.botleft').click(function(event) {
	num1--;
	if (num1 < -3) {
		num1 = 0
	}
	// $('#botul').animate({'left':1042*num+'px'}, 1000)
	$('#botul').css('left', 1042 * num1 + 'px');
});
$('.botright').click(function(event) {
	num1++;
	if (num1 > 3) {
		num1 = 0
	}
	$('#botul').css('left', 1042 * num1 + 'px');

});
$('.contlist li').hover(function() {
	$(this).css('background', '#f2f2f2');
	$(this).children('.contli-txt').children('.housetitle').children('p').css({
		'color': '#f60',
		'text-decoration': 'underline'
	});
}, function() {
	$(this).css('background', 'none');
	$(this).children('.contli-txt').children('.housetitle').children('p').css({
		'color': '#797979',
		'text-decoration': 'none'
	});
})
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


var a = 0;
var timer1

function gogo() {
	timer1 = setInterval(function() {
		a--;
		if (a < -2) {
			a = 0
		}
		$('#tplbtlist').css('left', 700 * a + 'px')
		$('#textlist>li').eq(-a).attr('class', 'oll');
		$('#textlist>li').eq(-a).siblings().removeClass('oll');
	}, 3000);

}
gogo();
$('#tplbtlist').hover(function() {
	clearInterval(timer1);
}, function() {
	gogo();
});
$('#textlist>li').click(function(event) {
	$(this).attr('class', 'oll');
	$(this).siblings().removeClass('oll');
	a = $(this).index()
	$('#tplbtlist').css('left', -700 * a + 'px')
});
$('.mainright3ul>li').hover(function() {
	$(this).children('.mainright3text').children('h5').css('color', '#f60');
}, function() {
	$(this).children('.mainright3text').children('h5').css('color', '#333');
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
	}, 1000)

});
