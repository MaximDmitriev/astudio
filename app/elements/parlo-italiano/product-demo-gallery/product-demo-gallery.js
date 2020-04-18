new Swiper('[data-slider="parlo-italiano-slider"]', {
    autoHeight: true,
    slidesPerView: 1.55,
    centeredSlides: true,
    loopedSlides: 30,
    spaceBetween: 0,
    loop: true,
    nested: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        1199: {
            slidesPerView: 1.3
        },
        749: {
            slidesPerView: 1
        }
    }
});