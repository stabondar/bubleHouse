import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Swiper, { Pagination, Navigation,  Autoplay, Scrollbar, EffectFade } from 'swiper'

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
          centeredSlides: false,
          spaceBetween: 24
        },

        480: {
          centeredSlides: false,
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
          centeredSlides: false,
          spaceBetween: 24
        },

        480: {
          centeredSlides: false,
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
      modules: [Pagination, Autoplay, EffectFade],
      // keyboard: true,
      fadeEffect: { crossFade: true },
      autoplay: true,
      virtualTranslate: true,
      effect: "fade",
      autoplay: {
        delay: 2500,
      },
      speed: 1000,
      loop: true,
      slidersPerView: 1,
      centeredSlides: false,
      breakpoints: {
        320: {
          centeredSlides: false,
          slidersPerView: 1
        },

        480: {
          centeredSlides: false,
          slidersPerView: 1
        },

        991: {
          centeredSlides: false,
          slidersPerView: 1
        }
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });


    //is brands slider
    $(".brand-slider").append(`<div class="swiper-pagination"></div>`);
    const swiperBrands = new Swiper('.brand-slider', {
      modules: [Pagination, Navigation, EffectFade],
      // keyboard: true,
      fadeEffect: { crossFade: true },
      virtualTranslate: true,
      effect: "fade",
      speed: 800,
      loop: true,
      slidersPerView: 1,
      centeredSlides: false,
      breakpoints: {
        320: {
          centeredSlides: false,
          slidersPerView: 1
        },

        480: {
          centeredSlides: false,
          slidersPerView: 1
        },

        991: {
          centeredSlides: false,
          slidersPerView: 1
        }
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });

    //is brands slider
    const swiperCompare = new Swiper('.compare__block', {
          speed: 800,
          slidersPerView: 1,
          centeredSlides: false
        });
  }
}