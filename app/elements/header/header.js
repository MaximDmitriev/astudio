const header = $('header');

$(window).scroll(() => {
  window.pageYOffset > 100 ? $(header).addClass('header_small') : $(header).removeClass('header_small');
});