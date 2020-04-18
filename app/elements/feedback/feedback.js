let feedbackMainSlider = new Swiper($('[data-slider="main-reviews"]'), {
    slidesPerView: 1,
    loop: true
});

$('body')
  .on('click', '.feedback__left-arrow', function() {
      feedbackMainSlider.slidePrev();
  })
  .on('click', '.feedback__right-arrow', function() {
      feedbackMainSlider.slideNext();
  });