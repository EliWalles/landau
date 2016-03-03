$(function () {
  quickContact();
  setEqualHeight($(".row>.services"));
  $('.row.contentR .partner').each(function(){
    $(this).addClass('col-md-6');
    var pW = ($('.row.contentR').width() - 115)/2;
    $(this).width(pW);
  })
});
function setEqualHeight(columns){
        var tallestcolumn = 0;
        columns.each(function(){
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn){
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }
    
function quickContact() {
  $('#quickContact .ccm-input-captcha').attr('placeholder','Enter the characters you see here');
  $('#quickContact label').each(function(){
    $(this).find('span').remove();
    $(this).next().attr('placeholder',$(this).text());
    $(this).remove();
  });
  $('.contentR .forms label').each(function(){
    $(this).find('span').remove();
    $(this).next().attr('placeholder',$(this).text());
    $(this).remove();
  });
  $('header a.button').click(function(e){
    $('#quickContact').fadeIn('slow');
    e.preventDefault();
  });
  $('.Fclose').click(function(e){
    $('#overlay').hide();
    $(this).parent().fadeOut('slow');
    e.preventDefault();
  });
  $('#quickContact form').submit(function(){
    var x = 0;
    if (!$(this).find('input[type="email"]').val()) {
      $(this).find('input[type="email"]').addClass('req');
      x = 1;
    }
    /*if (!$(this).find('input[type="text"]').val()) {
      $(this).find('input[type="text"]').addClass('req');
      x = 1;
    }*/
    if (!!$(this).find('textarea').text()) {
      $(this).find('textarea').addClass('req');
      x = 1;
    }
    if (x==1) return false;
  });
  $('.forms form').submit(function(){
    var x = 0;
    if (!$(this).find('input[type="email"]').val()) {
      $(this).find('input[type="email"]').addClass('req');
      x = 1;
    }
    /*if (!$(this).find('input[type="text"]').val()) {
      $(this).find('input[type="text"]').addClass('req');
      x = 1;
    }*/
    if (!!$(this).find('textarea').text()) {
      $(this).find('textarea').addClass('req');
      x = 1;
    }
    if (x==1) return false;
  });
  var options = { 
    success:    function(data) { 
        $('#quickContact form #Fanswer').html(data);
        var er = $('#quickContact form #Fanswer #quickContact form .alert.alert-danger').text();
        if (er) $('#quickContact form #Fdanger').html(er).slideDown();
        else {
          $('#quickContact form #Fdanger').slideUp().empty();
          $('#quickContact .qCtitle').html('Thank you!');
          $('#quickContact form').html('Your request has been  sent!');
        }
        $('#quickContact form #Fanswer').empty();
    } 
  }; 
  $('#quickContact form').ajaxForm(options);
  var options = { 
    success:    function(data) { 
      $('#overlay').show();
      $('#popup').fadeIn('slow');
      $('.forms form').clearForm();
    } 
  }; 
  $('.forms form').ajaxForm(options);

}