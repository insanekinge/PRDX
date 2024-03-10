var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    1919: {
      slidesPerView: 3,
      spaceBetween: 0,
      navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      },
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});