var preload_array = [];
buy_start = false;

function ImagePreload() {
    if (typeof(arguments) != 'undefined') {
        for (i = 0; i < arguments.length; i++) {
            if (typeof(arguments[i]) == "object") {
                for (k = 0; k < arguments[i].length; k++) {
                    if (typeof(preload_array[arguments[i][k]]) != 'undefined') {
                        var oImage = new Image;
                        oImage.src = arguments[i][k];
                        preload_array[arguments[i][k]] = 1;
                    }
                }
            }

            if (typeof(arguments[i]) == "string") {
                if (typeof(preload_array[arguments[i]]) != 'undefined') {
                    var oImage = new Image;
                    oImage.src = arguments[i];
                }
            }
        }
    }
}

function SlideTo(name) {
    $('html, body').animate({
        scrollTop: $(name).offset().top
    }, 800);
}

function deleteItem(id) {
    $.get('/catalog/delete/' + id + '/', function (response) {
        $(".basket").html(response);
        window.location.reload();
    });
}

function buyItem(id) {

    if (buy_start) {
        return false;
    }

    /*var count = parseInt($(".item-" + id + " .buy_count").val());

     var sizes_count = $(".item-" + id + " .sizes_count").val();

     if(sizes_count == '0'){
     var size_value = 0;
     }
     else{
     var size_value = $(".item-" + id + " .sizes .active").html();
     }
     if(sizes_count != '0' && typeof(size_value)=='undefined'){
     alert("Выберите размер");
     return false;
     }
     if(count == '0' || typeof(count)=='undefined'){
     count = 1;
     }*/

    buyItemProcess(id, 1, 0);

    //buyItemProcess(id,count,size_value);
}

function buyItemInside(id) {

    if (buy_start) {
        return false;
    }

    var count = parseInt($(".buy_count").val());

    var sizes_count = $(".sizes_count").val();

    if (sizes_count == '0') {
        var size_value = 0;
    }
    else {
        var size_value = $(".sizes .active").html();
    }
    if (sizes_count != '0' && typeof(size_value) == 'undefined') {
        alert("Выберите размер");
        return false;
    }
    if (count == '0' && typeof(count) == 'undefined') {
        count = 1;
    }

    buyItemProcess(id, count, size_value);
}

function buyItemProcess(id, count, size) {

    buy_start = true;
    $.get('/catalog/buy/' + id + '/', function (response) {
        $(".basket").html(response);
        $(".in-basket").show();

        /*if ($("img").is(".item-img-" + id)) {


            var i = $(".item-img-" + id);
            var b = $(".basket");

            var start_t = i.offset().top;
            var start_l = i.offset().left;
            var end_t = b.offset().top;
            var end_l = b.offset().left;
            var width = i.width();

            i
                .clone()
                .css({
                    'position': 'absolute',
                    'z-index': '100',
                    'top': start_t,
                    'left': start_l,
                    'width': width
                })
                .appendTo(".animate_wrap")
                .animate({
                    opacity: 0.5,
                    top: end_t,
                    left: end_l,
                    width: 50,
                    height: 50
                }, 700, function () {
                    $(this).remove();
                    buy_start = false;
                    $(".item-" + id + " .sizes_container").fadeOut().removeClass('active');
                });
        }*/

    });
}

function showAjaxLoader() {
    scrollWidth = $(document).width();
    scrollHeight = $(document).height();
    windowHeight = $(window).height();

    Math.round(scrollHeight / 2)

    l = Math.round(scrollWidth / 2) - 16;
    t = Math.round($(window).scrollTop() + (windowHeight / 2)) - 16;

    $("#ajaxloader").css({"top": t, "left": l}).show();
}

function hideAjaxLoader() {
    $("#ajaxloader").hide();
}

function setFilter() {
    $("#catalog-overlay").fadeIn();
    showAjaxLoader();
    get_trigger = false;
    var options = {
        success: function (data, statusText) {
            $('.b-catalog-items').html(data.html);
            history.pushState(null, null, data.href);
            $("#catalog-overlay").fadeOut();
            hideAjaxLoader();
        },
        dataType: 'json'
    };
    $("#filter-form").ajaxSubmit(options);
}

function clearFilter() {
    $(".b-filter input[type=checkbox]").removeAttr('checked');
    setFilter();
}

function closePopup(name) {
    $("." + name).fadeOut();
}

function setPhone(name, code, number) {
    $('.choosed-item .name').html(name);
    $('.choosed-item .code').html(code);
    $('.choosed-item .number').html(number);
    $('.contacts-choose-box').hide();
}

function makeBackcall() {
    name = $(".backcall_name").val();
    phone = $(".backcall_phone").val();

    if (name === '' || phone === '') {
        alert("Заполните все поля");
        return;
    }

    $.post("/kontakti/backcall/", {name: name, phone: phone}, function (data) {
        if (data.error == 0) {
            alert("Ваше сообщение отправлено");
            $(".backcall_name").val('');
            $(".backcall_phone").val('');
            $('.backcall-box').hide();
            window.location.hash = '#done-backckall-' + data.id;
            var yaGoalParams = {
                id: data.id,
                name: "обратный звонок"
            };
            yaCounter18808492.reachGoal('zvonok', yaGoalParams)
            ga('send', 'event', 'zvonok', 'form', 'id' + data.id);
        }
        else {
            alert(data.error_text);
        }
    }, 'json');
}

function makeIllustrationcall() {

    $(".b-promo-new .wrapper .form input[name=name]").removeClass("error");
    $(".b-promo-new .wrapper .form input[name=phone]").removeClass("error");

    n1 = $(".b-promo-new .wrapper .form input[name=n1]").val();
    n2 = $(".b-promo-new .wrapper .form input[name=n2]").val();
    n3 = $(".b-promo-new .wrapper .form input[name=n3]").val();
    name = $(".b-promo-new .wrapper .form input[name=name]").val();
    phone = $(".b-promo-new .wrapper .form input[name=phone]").val();

    if (name === '' || phone === '') {
        alert("Заполните все поля");

        if(name == ''){
            $(".b-promo-new .wrapper .form input[name=name]").addClass("error");
        }
        if(phone == ''){
            $(".b-promo-new .wrapper .form input[name=phone]").addClass("error");
        }

        return;
    }

    $.post("/kontakti/illustration/", {n1:n1, n2:n2, n3:n3, name: name, phone: phone}, function (data) {
        if (data.error == 0) {
            alert("Ваше сообщение отправлено");
            $(".b-promo-new .wrapper .form input[name=n1]").val('');
            $(".b-promo-new .wrapper .form input[name=n2]").val('');
            $(".b-promo-new .wrapper .form input[name=n3]").val('');
            $(".b-promo-new .wrapper .form input[name=name]").val('');
            $(".b-promo-new .wrapper .form input[name=phone]").val('');
            window.location.hash = '#done-promo-' + data.id;
            var yaGoalParams = {
                id: data.id,
                name: "заказ с промоблока"
            };
            yaCounter18808492.reachGoal('promo', yaGoalParams)
            ga('send', 'event', 'promo', 'form', 'id' + data.id);
        }
        else {
            alert(data.error_text);
        }
    }, 'json');
}

function makeIllustrationCameracall() {
    name = $(".illustration_name").val();
    phone = $(".illustration_phone").val();

    if (name === '' || phone === '') {
        alert("Заполните все поля");
        return;
    }

    $.post("/ip-kamera-besplatno/", {name: name, phone: phone}, function (data) {
        if (data.error == 0) {
            alert("Ваше сообщение отправлено");
            $(".illustration_name").val('');
            $(".illustration_phone").val('');
        }
        else {
            alert(data.error_text);
        }
    }, 'json');
}

function makeVs1Call() {
    ats = $("#vs1-ats").val();
    name = $("#vs1-name").val();
    phone = $("#vs1-phone").val();

    if (name === '' || phone === '') {
        alert("Заполните все поля");
        return;
    }

    $.post("/vs1/", {ats: ats, name: name, phone: phone}, function (data) {
        if (data.error == 0) {
            alert("Ваше сообщение отправлено");
            $("#vs1-name").val('');
            $("#vs1-phone").val('');
        }
        else {
            alert(data.error_text);
        }
    }, 'json');
}

function setActiveTab(name) {

    if ($(".b-catalog-item .tab." + name).hasClass('active') == false) {

        $(".b-catalog-item .tab").removeClass('active');
        $(".b-catalog-item .tab." + name).addClass('active');

        $(".b-catalog-item .container").removeClass('active');

        $(".b-catalog-item ." + name + "-container").addClass('active');

    }

}

function setActiveSubTab(name) {

    if ($(".b-catalog-item .subtab." + name).hasClass('active') == false) {

        $(".b-catalog-item .subtab").removeClass('active');
        $(".b-catalog-item .subtab." + name).addClass('active');

        $(".b-catalog-item .subtab-container").hide();

        $(".b-catalog-item ." + name + "-sub-container").show();

    }

}

function setSubTabActive(name) {

    if ($(".subtabs .subtab." + name).hasClass('active') == false) {

        $(".subtabs .subtab").removeClass('active');
        $(".subtabs .subtab." + name).addClass('active');

        $(".subtabs .subtab-container").hide();

        $(".subtabs ." + name + "-sub-container").show();

    }

}

function showCategoryAddText() {
    $(".category_add_text_link").hide();
    $(".category_add_text").fadeIn();
}

function setPriceRate(e, name) {

    if ($(e).hasClass('active') == false) {

        $(".price-rates-container a").removeClass('active');
        $(e).addClass('active');

        $(".prive-rate-value").removeClass('active');

        $(".prive-rate-value." + name).addClass('active');

    }

}

function subscribe() {
    var email = $("#email").val();

    $.post('/email-subscribe/in/', {email: email}, function (response) {
        if (response == '1') {
            alert("Вы успешно подписаны на рассылку");
            $("#email").val("");
        }
        else {
            alert(response);
        }
    });
}

function GoTop() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
}

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 210) {
            $('.b-arrow_up').fadeIn();
        } else {
            $('.b-arrow_up').fadeOut();
        }
    });

    $('.table-zebra tr:even').addClass('even');
    $('.b-catalog-table tr.item:odd').addClass('even');
    $('.b-catalog-params-table tr.param-tr:even').addClass('even');
    $('.b-vs1 tr.content-tr:odd').addClass('odd');

    if (location.pathname != '/') {
        $(".menu li a").each(function () {
            if (this.pathname != '/') {
                var link_path = this.pathname;

                if ($.browser.msie) {
                    link_path = '/' + link_path;
                }
                if (link_path != '/') {
                    var l = link_path.length;
                    var loc = location.pathname.substring(0, l);
                    if (loc == link_path) {
                        $(this).parent().addClass('active');
                    }
                }
            }
        });
    }
    else {
        $(".b-menu li.main").addClass('active');
    }

    $("a[rel=gallery]").fancybox({
        'overlayColor': '#332826',
        'overlayOpacity ': '0.9',
        'cyclic': true,
        'padding': '0',
        'margin': '70'
    });

    $('#carousel').jcarousel({
    });

    $('.b-catalog-categories-slider').jcarousel({
    });

});


