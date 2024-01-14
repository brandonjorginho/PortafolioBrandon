(function ($) {
    "use strict";

    // Desplazamiento
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Iniciado mecanografiado
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '50%' });


    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);
function mostrarCuadro() {
    var cuadro = document.getElementById("cuadro");
    cuadro.style.display = "block";
    cuadro.innerHTML = "Semana de parcial";
}

function ocultarCuadro() {
    var cuadro = document.getElementById("cuadro");
    cuadro.style.display = "none";
}
function mostrarCuadro2() {
    var cuadro2 = document.getElementById("cuadro2");
    cuadro2.style.display = "block";
    cuadro2.innerHTML = "Semana de consolidado";
}

function ocultarCuadro2() {
    var cuadro2 = document.getElementById("cuadro2");
    cuadro2.style.display = "none";
}
function showTooltip(element, text) {
    var tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.left = element.offsetLeft + "px";
    tooltip.style.top = (element.offsetTop + element.offsetHeight) + "px";
}

function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}
