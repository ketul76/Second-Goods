var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    499: {
        slidesPerView: 1,
    },
    999: {
        slidesPerView: 2,
    }
}});