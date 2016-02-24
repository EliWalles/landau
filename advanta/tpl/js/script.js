$(function () {
	
	var x=0;
	ParalaxImg();
	$(window).scroll(function(){
		ParalaxImg();
	});
	var wW = $(window).width()/2+120;
	var wWm = $(window).width()/2-120-683;
	$('#all .block1').css('background-position',wW+'px center');
	$('#all .block2').css('background-position',wWm+'px center');
	$('#all .block3').css('background-position',wW+'px center');
	
});

function ParalaxImg() {
	if($( "header:in-viewport" ).text()) {
		$('body .img-hold:eq(0)').show();
		$('body .img-hold:eq(1)').hide();
		$('body .img-hold:eq(2)').hide();
		$('body .img-hold:eq(3)').hide();
	}
	if($( "#inf:in-viewport" ).text()) {
		$('body .img-hold:eq(0)').hide();
		$('body .img-hold:eq(1)').show();
		$('body .img-hold:eq(2)').hide();
		$('body .img-hold:eq(3)').hide();
	}
	if($( "#num:in-viewport" ).text()) {
		$('body .img-hold:eq(0)').hide();
		$('body .img-hold:eq(1)').hide();
		$('body .img-hold:eq(2)').show();
		$('body .img-hold:eq(3)').hide();
	}
	if($( "#why:in-viewport" ).text()) {
		$('body .img-hold:eq(0)').hide();
		$('body .img-hold:eq(1)').hide();
		$('body .img-hold:eq(2)').hide();
		$('body .img-hold:eq(3)').show();
	}
	if($( "#why:in-viewport" ).text()) {
		$('body .img-hold:eq(0)').hide();
		$('body .img-hold:eq(1)').hide();
		$('body .img-hold:eq(2)').hide();
		$('body .img-hold:eq(3)').show();
	}
	if($( "#res:in-viewport(-300)" ).text()) {
		if (!x) $('.circlestat').circliful();x=1;
	}
}
