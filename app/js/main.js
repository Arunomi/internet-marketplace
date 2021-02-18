
$(function () {
    $('.product-slider__inner').slick({  //slickslider
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    });

    $(".rate-star").rateYo({        //rating
        rating: 3.6,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
    });

    $('.menu__btn').on('click', function () {
        $(this).toggleClass('open')
        $('.header__nav').slideToggle()
        $('section').toggle()
        $('footer').toggle()
    });

    var mixer = mixitup('.products__inner-box'); //filter
});
