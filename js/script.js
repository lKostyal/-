//video
$('#play_btn').click(function(event){

    $('video')[0].play();

    $('#play_btn').hide();

    $('video').attr('controls', 'value');

})

//bg-color header
var elem = $('.header');
var doc = $(document);
function scrolled() {
   var threshold = doc.scrollTop() > 50;
   elem.toggleClass('scrolled', threshold);
   }
$(window).on({ scroll: scrolled });

//slick-slider
$(document).ready(function() {

    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3500,
    });
});

// скролл до элемента 
$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

    $('.header__burger').click(function(event) {
        $('.header__burger,.header__list').toggleClass('active');
        $('body').toggleClass('lock');
    });