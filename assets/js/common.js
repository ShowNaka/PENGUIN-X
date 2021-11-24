

var G_scrollTop;

// モーダルを開いた際のbodyのスクロール禁止処理
function noScroll() {
    G_scrollTop = $(window).scrollTop();
    $('body').addClass('noscroll').css({
        'position': 'fixed',
        'top': -G_scrollTop + 'px',
    });
}

// スクロールロックの解除
function allowScroll() {
    $('body').removeClass('noscroll').css({
        'position': 'static',
        'top': 0,
    });
    $(window).scrollTop(G_scrollTop);
}


$(function() {

    const contact_button = $('.contact-button');
    const contact_form = $('#contact-form');

    contact_button.on('click', (e) => {

        noScroll();
        contact_form.fadeIn();
    });

    contact_form.on('click', (e) => {

        allowScroll();
        contact_form.fadeOut();
    })
    contact_form.find('.inner').on('click', (e) => {
        e.stopPropagation();
    })



})