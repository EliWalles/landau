jQuery = jQuery.noConflict(true);
jQuery(document).ready(function(){
	grayscale.prepare( jQuery('#dov .table .table-cell img') );
	grayscale( jQuery('#dov .table .table-cell img') );
	jQuery('a[href="#form"]').click(function(e){
		top =  jQuery('#form').offset().top+50;
					jQuery('html, body').animate({
						scrollTop: top
					}, "slow");
		e.preventDefault();
	});

})
jQuery(function () {
	ParalaxImg();
	BrowserWindows()
	jQuery('a[href="#fire_form_new4"]').click(function(e) {
		jQuery('#form form').submit();
		e.preventDefault();
	})
	jQuery('#form form').submit(function(e) {
		var ErW = '';
		if (!jQuery('input[name="widget_9"]').val()) {
			ErW = 'Представьтесь<br/>';
			jQuery('input[name="widget_9"]').addClass('rq');
		}
		if (!jQuery('input[name="widget_4"]').val()) {
			ErW += 'Введите имя компании<br/>';
			jQuery('input[name="widget_4"]').addClass('rq');
		}
		if (!jQuery('input[name="widget_7"]').val()) {
			ErW += 'Введите телефон<br/>';
			jQuery('input[name="widget_7"]').addClass('rq');
		}
		if (!jQuery('select[name="widget_5"]').val()) {
			ErW += 'Выберете количество сотрудников в компании<br/>';
			jQuery('select[name="widget_5"]').addClass('rq');
		}
		if (ErW) {
			jQuery('.errori').html(ErW);
			return false;
		}
	});
	jQuery(window).scroll(function(){
		ParalaxImg();
	});
	jQuery(window).resize(function () {
		BrowserWindows();
	});
	jQuery('#dov .table .table-cell').hover(function() {
		grayscale.reset( jQuery(this).find('img') );
	}, function() {
		grayscale( jQuery(this).find('img') );
	});	
});

function ParalaxImg() {
	if(jQuery( "header:in-viewport" ).text()) {
		jQuery('body .img-hold:eq(0)').show();
		jQuery('body .img-hold:eq(1)').hide();
		jQuery('body .img-hold:eq(2)').hide();
		jQuery('body .img-hold:eq(3)').hide();
	}
	if(jQuery( "#inf:in-viewport" ).text()) {
		jQuery('body .img-hold:eq(0)').hide();
		jQuery('body .img-hold:eq(1)').show();
		jQuery('body .img-hold:eq(2)').hide();
		jQuery('body .img-hold:eq(3)').hide();
	}
	if(jQuery( "#num:in-viewport" ).text()) {
		jQuery('body .img-hold:eq(0)').hide();
		jQuery('body .img-hold:eq(1)').hide();
		jQuery('body .img-hold:eq(2)').show();
		jQuery('body .img-hold:eq(3)').hide();
	}
	if(jQuery( "#why:in-viewport" ).text()) {
		jQuery('body .img-hold:eq(0)').hide();
		jQuery('body .img-hold:eq(1)').hide();
		jQuery('body .img-hold:eq(2)').hide();
		jQuery('body .img-hold:eq(3)').show();
	}
	if(jQuery( "#why:in-viewport" ).text()) {
		jQuery('body .img-hold:eq(0)').hide();
		jQuery('body .img-hold:eq(1)').hide();
		jQuery('body .img-hold:eq(2)').hide();
		jQuery('body .img-hold:eq(3)').show();
	}
	if(jQuery( "#res:in-viewport(-300)" ).text()) {
		jQuery('.circlestat').each(function(){
			if (jQuery(this).hasClass('actc')===false) { 
				jQuery(this).addClass('actc').circliful();
			}	
		});
	}
}

function BrowserWindows() {
	var wW = jQuery(window).width()/2+120;
	var wWm = jQuery(window).width()/2-120-683;
	jQuery('#all .block1').css('background-position',wW+'px center');
	jQuery('#all .block2').css('background-position',wWm+'px center');
	jQuery('#all .block3').css('background-position',wW+'px center');
}
