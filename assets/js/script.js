console.log('Hello world')
document.querySelector('.banner__button').addEventListener("click", function(event){
    event.preventDefault()
})

$(document).ready(function() {
    $('#slider_desktop').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        /*   rows: 2,*/
        dots: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        /*centerMode: false,*/
        variableWidth: true

    })
});