// Swiper options – identical to the original assets/js/main.js
const swiperConfigs = {
  brand: {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
      1920: { slidesPerView: 6, spaceBetween: 30 },
      1440: { slidesPerView: 6, spaceBetween: 30 },
      1366: { slidesPerView: 6, spaceBetween: 30 },
      1201: { slidesPerView: 5, spaceBetween: 30 },
      1025: { slidesPerView: 4, spaceBetween: 30 },
      769: { slidesPerView: 4, spaceBetween: 30 },
      577: { slidesPerView: 3, spaceBetween: 30 },
      480: { slidesPerView: 2, spaceBetween: 20 },
      375: { slidesPerView: 2, spaceBetween: 20 },
    },
  },
  project: {
    loop: true,
    slidesPerView: 2,
    autoplay: { delay: 3000, disableOnInteraction: false },
    spaceBetween: 20,
    pagination: {
      el: '.project .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1920: { slidesPerView: 2, spaceBetween: 30 },
      1440: { slidesPerView: 2, spaceBetween: 30 },
      1366: { slidesPerView: 2, spaceBetween: 30 },
      1201: { slidesPerView: 2, spaceBetween: 30 },
      1025: { slidesPerView: 2, spaceBetween: 30 },
      769: { slidesPerView: 1, spaceBetween: 30 },
      577: { slidesPerView: 1, spaceBetween: 30 },
      480: { slidesPerView: 1, spaceBetween: 20 },
      375: { slidesPerView: 1, spaceBetween: 20 },
    },
  },
  testi: {
    loop: true,
    slidesPerView: 1,
    // autoplay: { delay: 3000, disableOnInteraction: false },
    spaceBetween: 20,
    pagination: {
      el: '.testi .swiper-pagination',
      clickable: true,
    },
  },
};

export default swiperConfigs;
