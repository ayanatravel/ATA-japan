const swiper = new Swiper('.swiper-container', {
  speed: 1000,
  loop: true,
  effect: 'fade',

  autoplay: {
    delay: 2000
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});