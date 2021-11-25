

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
    const contact_form_modal = $('#contact-form-modal');

    contact_button.on('click', (e) => {

        noScroll();
        contact_form_modal.fadeIn();
    });

    contact_form_modal.on('click', (e) => {

        allowScroll();
        contact_form_modal.fadeOut();
    })
    contact_form_modal.find('.inner').on('click', (e) => {
        e.stopPropagation();
    })

    const contact_form = $('#contact-form');

    contact_form.submit( e => {
        e.preventDefault();

        console.log(1111);

        const url = 'https://penguin-x.tokyo/contact.php'

        const data = {
            name: $('input[name="name"]').val(),
            phone: $('input[name="phone"]').val(),
            email: $('input[name="email"]').val(),
        }

        console.log(data);

        $.ajax({
            type: 'POST',
            url: url,
            data: data,

        }).done( res => {

            $('#contact-form-input').slideUp(500, () => {
                $('#contact-form-complete').slideDown();
            });
        });
    })



})