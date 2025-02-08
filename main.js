// SWIPER
const swiperMenu = new Swiper('.menu__swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
})


// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeat
  });

  sr.reveal('.about__data , .menu__container')
  sr.reveal('.about__board', { delay: 700, distance: '100px', origin: 'right' })
  sr.reveal('.about__pizza', { delay: 1400, distance: '100px', origin: 'bottom', rotate: { z: -90 } })
  sr.reveal('.about__ingredient', { delay: 1000, interval: 100 })
  sr.reveal('.recipe__list', { origin: 'right' })
  sr.reveal('.recipe__img', { origin: 'left' })
  sr.reveal('.service-item', { delay: 700, distance: '40px', origin: 'bottom' });

  