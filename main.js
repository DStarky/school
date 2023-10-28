// import Swiper JS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiwper styles
import 'swiper/css';

import { menuToggle } from './src/scripts/menuToggle'
import { collapse } from './src/scripts/collapse';
import './src/styles/style.scss'

const swiper = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  slidesPerView: 'auto',
  initialSlide: 1,
  // spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      spaceBetween: 100,
    }
  }

});

menuToggle();
collapse();