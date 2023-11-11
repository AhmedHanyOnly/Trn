
swiper = new Swiper('.swiper-clients', {
  loop: true,
  slidesPerView:1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 300, 
  breakpoints: {
    796: {
      slidesPerView:2,
      spaceBetween:40,
    },
    997:{
      slidesPerView:3,
      spaceBetween:20,
    },
    
  },
  navigation: {
    nextEl: '.next-client',
    prevEl: '.prev-client',
  },
});
swiper = new Swiper('.swiper-brands', {
  loop: true,

  slidesPerView:2,
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  speed: 300, 
  breakpoints: {
    796: {
      slidesPerView:3,
      spaceBetween:40,
    },
    997:{
      slidesPerView:5,
      spaceBetween:20,
    },
    
  },
  navigation: {
    nextEl: '.next-client',
    prevEl: '.prev-client',
  },
});