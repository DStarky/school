// import Swiper JS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

import { menuToggle } from './src/scripts/menuToggle'
import './src/styles/style.scss'

const swiper = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  slidesPerView: 'auto',
  // spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
menuToggle();