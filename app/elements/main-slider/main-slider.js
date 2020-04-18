$('.main-slider__show-project')
  .on('click', function() {
      var role = $(this).attr('data-role');
      if(role === 'open') {
          $('.main-slider__wrap').css('max-height', 10000);
          $('.main-slider__show-project').attr('data-role', 'close');
          $('span', $(this)).text('Свернуть');
          $(this).addClass('main-slider__show-project_active');
      } else {
          $(this).css('position', 'absolute');
          $(this).css('bottom', '-80px');
          $('.main-slider__wrap').css('max-height', '');
          $('.main-slider__show-project').attr('data-role', 'open');
          $('span', $(this)).text('Смотреть проект');
          $(this).removeClass('main-slider__show-project_active');
      }
  });

$('body')
  .on('mouseenter', '[data-role="open"]', function() {
    if($(window).outerWidth() > 1199) {
        $('.main-slider__wrap').css('max-height', 950);
    } else if($(window).outerWidth() > 991) {
        $('.main-slider__wrap').css('max-height', 700);
    } else {
        $('.main-slider__wrap').css('max-height', 600);
    }
    $('.main-slider__show-project').css('bottom', -80);
  })
  .on('mouseleave', '[data-role="open"]', function() {
      $('.main-slider__wrap').css('max-height', '');
      $('.main-slider__show-project').css('bottom', '');
  });

new Swiper($('[data-slider="big-slider"]'), {
    speed: 1000,
    slidesPerView: 1,
    simulateTouch: false,
    pagination: {
        el: '.main-slider__pagination',
        type: 'bullets',
        clickable: true,
        bulletElement: 'div',
        bulletClass: 'main-slider__pagination-item',
        bulletActiveClass: 'main-slider__pagination-item_active'
    },
});


const galleryThumbs = new Swiper($('[data-slider="lower-slider"]'), {
    speed: 1000,
    slidesPerView: 7,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        1199: {
            slidesPerView: 5
        }
    }
});

const upperSlider = new Swiper($('[data-slider="upper-slider"]'), {
    speed: 1000,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

const tabBtn = $('.tab'),
  tab = $('.main-slider__about'),
  closeTabBtn = $('.main-slider__about-close'),
  list = $('.main-slider__about-list'),
  listItem = $('.main-slider__about-item'),
  sliders = $('.main-slider__about-slider');

$(tabBtn).click(() => {
    $(tab).addClass('showTab');
    $(list).addClass('showTab');
    $(upperSlider).removeClass('showTab');
    $(header).addClass('header_slider');
});

$(listItem).each(function(i) {
    $(this).click(() => {
        upperSlider.slideTo(i, 1);
        $(sliders).addClass('showTab');
        $(list).removeClass('showTab');
    });
});

$(closeTabBtn).click(() => {
    $(tab).removeClass('showTab');
    $(list).removeClass('showTab');
    $(sliders).removeClass('showTab');
    $(header).removeClass('header_slider');
});

