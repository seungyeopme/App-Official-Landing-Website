$(function(){
    /* Slick Slider - Welcome */
    $('.slideshow').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplayuSpeed: 2000,
        fade: true,
        speed: 1000,
        pauseOnHover: false
    });

    /* TypeIt - Welcome */
    $('#typing').typeIt({
        strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."],
        speed: 100,
        autoStarT: true,
        breakLines: false,
    });
})