jQuery = jQuery.noConflict(true);
jQuery(document).ready(function(){
	grayscale.prepare( jQuery('#dov .table .table-cell img') );
	grayscale( jQuery('#dov .table .table-cell img') );

})
jQuery(function () {
	ParalaxImg();
	BrowserWindows()
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
