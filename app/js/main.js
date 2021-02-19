
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

    $('.new-items__sort-grid').on('click', function() {
        $(this).toggleClass('new-items__sort--active')
        $('.new-items__sort-list').toggleClass('new-items__sort--active')
        $('.new-items__content-box').addClass('new-items__content-box--grid')
        $('.new-items__content-box').removeClass('new-items__content-box--list')
    });
    $('.new-items__sort-list').on('click', function() {
        $(this).toggleClass('new-items__sort--active')
        $('.new-items__sort-grid').toggleClass('new-items__sort--active')
        $('.new-items__content-box').addClass('new-items__content-box--list')
        $('.new-items__content-box').removeClass('new-items__content-box--grid')
    });

    //select menu//
    $('select[data-menu]').each(function () {

        let select = $(this),
            options = select.find('option'),
            menu = $('<div />').addClass('select-menu'),
            button = $('<div />').addClass('button'),
            list = $('<ul />'),
            arrow = $('<em />').prependTo(button);

        options.each(function (i) {
            let option = $(this);
            list.append($('<li />').text(option.text()));
        });

        menu.css('--t', select.find(':selected').index() * -41 + 'px');

        select.wrap(menu);

        button.append(list).insertAfter(select);

        list.clone().insertAfter(button);

    });

    $(document).on('click', '.select-menu', function (e) {

        let menu = $(this);

        if (!menu.hasClass('open')) {
            menu.addClass('open');
        }

    });

    $(document).on('click', '.select-menu > ul > li', function (e) {

        let li = $(this),
            menu = li.parent().parent(),
            select = menu.children('select'),
            selected = select.find('option:selected'),
            index = li.index();

        menu.css('--t', index * -41 + 'px');
        selected.attr('selected', false);
        select.find('option').eq(index).attr('selected', true);

        menu.addClass(index > selected.index() ? 'tilt-down' : 'tilt-up');

        setTimeout(() => {
            menu.removeClass('open tilt-up tilt-down');
        }, 500);

    });

    $(document).click(e => {
        e.stopPropagation();
        if ($('.select-menu').has(e.target).length === 0) {
            $('.select-menu').removeClass('open');
        }
    })
    //select menu end//

    var mixer = mixitup('.products__inner-box'); //filter
});
