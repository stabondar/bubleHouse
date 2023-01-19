import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Swiper, { Pagination, Autoplay, Scrollbar } from 'swiper'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

gsap.registerPlugin(ScrollTrigger)

export default class Slider 
{
  constructor() {
    //is lunchpad by numbers slider
    $(".swiper-container").append(`<div class="swiper-scrollbar"></div>`);

    const swiperNumbers = new Swiper('.swiper-container', {
      modules: [Scrollbar],
      keyboard: true,
      direction: "horizontal",
      spaceBetween: 24,
      speed: 800,
      grabCursor: true,
      slidesPerView: 'auto',
      loop: false,
      centeredSlides: false,
      breakpoints: {
        320: {
          centeredSlides: true,
          spaceBetween: 24
        },

        480: {
          centeredSlides: true,
          spaceBetween: 24
        },

        991: {
          centeredSlides: false,
          spaceBetween: 24
        }
      },

      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
      }
    });

    //is lunchpad slider
    $(".launchpad__slider").append(`<div class="launchpad-scrollbar"></div>`);
    const swiperLaunchpad = new Swiper('.launchpad__slider', {
      modules: [Scrollbar],
      keyboard: true,
      direction: "horizontal",
      spaceBetween: 24,
      speed: 800,
      grabCursor: true,
      slidesPerView: 'auto',
      loop: false,
      centeredSlides: false,
      breakpoints: {
        320: {
          centeredSlides: true,
          spaceBetween: 24
        },

        480: {
          centeredSlides: true,
          spaceBetween: 24
        },

        991: {
          centeredSlides: false,
          spaceBetween: 24
        }
      },

      scrollbar: {
        el: ".launchpad-scrollbar",
        draggable: true
      }
    });

    //is hero slider
    $(".hero__slider").append(`<div class="swiper-pagination"></div>`);
    const swiperHero = new Swiper('.hero__slider', {
      modules: [Pagination, Autoplay],
      // keyboard: true,
      autoplay: true,
      effect: "fade",
      // direction: "horizontal",
      // speed: 800,
      // grabCursor: true,
      // slidesPerView: 'auto',
      loop: true,
      centeredSlides: false,
      breakpoints: {
        320: {
          centeredSlides: true,
          spaceBetween: 24
        },

        480: {
          centeredSlides: true,
          spaceBetween: 24
        },

        991: {
          centeredSlides: false,
          spaceBetween: 24
        }
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
}