var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 500,
    },
  });