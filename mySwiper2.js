var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on: {
      slideChangeTransitionEnd: function () {
        if (this.isEnd) {
          this.navigation.$nextEl.css('display', 'none');
        } else {
          this.navigation.$nextEl.css('display', 'block');
        }
      },
    },
  })