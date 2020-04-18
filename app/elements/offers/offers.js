const card = $('.offers__overlay');

$(card).mousemove(function(event) {
  let x = event.clientX - this.getBoundingClientRect().x,
      y = event.clientY - this.getBoundingClientRect().y;
  const text = $(this).find('.offers__card-tooltip');
  $(text).css('left', `${x}px`);
  $(text).css('top', `${y + 25}px`);

  this.getBoundingClientRect().width - x < 80 ? $(text).css('opacity', 0) : $(text).css('opacity', 1);
});