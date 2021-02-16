
$(function () {

    
  
    var mixer = mixitup('.products__inner-box'); //filter

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
});
