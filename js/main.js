$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.intro__switcher--next',
            prevEl: '.intro__switcher--prev',
        },
    });

    var overlay = $('.overlay');
    var toTop = $('.to-top');

    $('[data-modal-id]:not(.modal)').on('click', function() {
        var modalId = $(this).attr('data-modal-id');
        overlay.addClass('overlay--show');
        $('.modal[data-modal-id=' + modalId + ']').addClass('modal--show');
    });

    overlay.on('click', function() {
        overlay.removeClass('overlay--show');
        $('.modal').removeClass('modal--show');
    });

    $('.modal__close').on('click', function() {
        overlay.removeClass('overlay--show');
        $(this).closest('.modal').removeClass('modal--show');
    });

    toTop.on('click', function() {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.modal-application__form').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var formData = $(this).serialize();
        $.post(
            '/ajax.php', { data: formData },
            function(response) {
                var response = JSON.parse(response);
                alert(response.message);
            }
        );
    });
});