$(document).ready(function(){
    $('.carousel__items').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"> <img src="icons/arrow_left.png" alt=""> </button>',
        nextArrow:'<button type="button" class="slick-next"> <img src="icons/arrow_right.png" alt=""> </button>',
        responsive: [
            {
              breakpoint: 575,
              settings: {
                dots: true,
                arrows:false,
                slick: false
              }
            }  
          ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function() {
        $(this)
          .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
          .closest('.container').find('.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

      // Modal
    $('[data-modal=consult]').on('click', function() {
        $('.overlay, #consult').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consult, #thanks, #order').fadeOut('slow');
    });
    $('[data-modal=order]').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };
    validateForms('#consult-form');
    validateForms('#consult form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consult, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

     // Smooth scroll and pageup
     $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

  });
      