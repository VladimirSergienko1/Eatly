console.log('Hello world')

$(document).ready(function() {
    $('#slider_desktop').on('init', function(event, slick){
        if (slick.currentSlide === 0) {
            $('.prev-arrow').css('stroke', '#989898');
            $('.slick-prev').css('pointer-events', 'none')

        }
    }).slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        /*   rows: 2,*/
        dots: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
       /* centerMode: true,*/
    })
});