// import '../styles/loco.css'

// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import LocomotiveScroll from 'locomotive-scroll'

// export default class LocoGsap 
// {
//     constructor()
//     {
//         /**
//          * Setup Loco And Gsap
//          */
//         gsap.registerPlugin(ScrollTrigger)
        
//         let locoScroll
//         // if (window.innerWidth > 480) 
//         // {
//             locoScroll = new LocomotiveScroll({
//                 el: document.querySelector('.main'),
//                 smooth: true,
//                 multiplier: 1.0,
//                 lerp: 0.15
//             });
//             if (window.innerWidth > 480) 
//             {
//             locoScroll.on('scroll', ScrollTrigger.update);
//             ScrollTrigger.scrollerProxy('.main', {
//                 scrollTop(value) {
//                     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//                 },
//                 getBoundingClientRect() {
//                     return {
//                         top: 0,
//                         left: 0,
//                         width: window.innerWidth,
//                         height: window.innerHeight
//                     };
//                 },
//                 pinType: document.querySelector('.main').style.transform ? 'transform' : 'fixed'
//             });
//             }
        
//         ScrollTrigger.defaults({
//             scroller: '.main'
//         })
        
//         const init = () => 
//         {
//             /**
//              * GSAP no blick
//              */
//             gsap.set('main', { autoAlpha: 1 })
        
//         }
        
//         window.addEventListener('load', () => 
//         {
//             init()
//             ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
//             locoScroll.update()
//         })
        
        
//         $(window).on('resize', function (e) {
//             ScrollTrigger.refresh()
//             locoScroll.update();
//         });

//         if (window.innerWidth > 991) 
//             {
//         $('.nav__link').eq(0).on('click', function() {
//             const slider = document.querySelector('#solution');
//                 locoScroll.scrollTo(slider)
//         });

//         $('.nav__link').eq(1).on('click', function() {
//             const slider = document.querySelector('#launchpad');
//                 locoScroll.scrollTo(slider)
//         });

//         $('[contact-us]').on('click', function() {
//             const slider = document.querySelector('#contacts');
//                 locoScroll.scrollTo(slider)
//                 console.log(slider);
//         });

//         $('[learn-more]').eq(0).on('click', function() {
//             const slider = document.querySelector('#solution');
//                 locoScroll.scrollTo(slider)
//         });

//         $('[learn-more]').eq(1).on('click', function() {
//             const slider = document.querySelector('#launchpad');
//                 locoScroll.scrollTo(slider)
//         });
//     }
//     }
// }

