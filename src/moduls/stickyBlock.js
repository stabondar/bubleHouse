import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Sticky
{
  constructor() {
    let mm = gsap.matchMedia(),
            isDesktop = '(min-width: 991px)',
            isMobile = '(max-width: 991px)'

        const init = () => {
            let body = $('.scroll-cards')
            let right = body.find('.scroll-cards__right')
            let list = body.find('.scroll-cards__cards')
            let item = body.find('.scroll-cards__card')
            let mask = body.find('.scroll-cards__mask')
            let img = right.find('.scroll-cards__img')
            let heading = $('.scroll-cards__heading')

            mm.add(isDesktop, () => 
            {
                // Pin
                ScrollTrigger.create({
                    trigger: body, start: 'top 0%', end: 'bottom 80%', pin: right
                })

                ScrollTrigger.create({
                    trigger: list, start: 'top top', end: 'bottom 80%', pin: mask
                })

                ScrollTrigger.create({
                    trigger: body, start: 'top top', end: 'bottom 80%', pin: heading
                })

                const mask1 = () => {
                    const item = $('.scroll-cards__mask');
                    const bg1 = "linear-gradient(180deg, #FFF 26.43%, rgba(243, 243, 243, 0) 34.39%, rgba(243, 243, 243, 0) 66.46%, #FFF 87.03%)";
                    const bg2 = "linear-gradient(180deg, #FFF 18.22%, rgba(243, 243, 243, 0) 21.58%, rgba(243, 243, 243, 0) 61.38%, #FFF 76.86%)";

                    let tl = gsap.timeline({
                        scrollTrigger : {
                            trigger: body, start: 'top top', end: 'bottom 80%', scrub: true
                        }
                    })
                        tl.fromTo(item, {background: bg2}, {background: bg1})
                }
                mask1()



                $(item).each(function(index) {
                    let self = $(this)
                    let currentImg = img.eq(index)
                    let tl = gsap.timeline({
                        scrollTrigger: { 
                            trigger: self, start: 'top 60%', end: 'bottom bottom',
                            onEnter: () => 
                            {
                                img.removeClass('active')
                                currentImg.addClass('active')
                            },
                            onEnterBack: () => 
                            {
                                img.removeClass('active')
                                currentImg.addClass('active')
                            }
                        }
                    })
    
                    const wrapper = document.querySelector('.main')
                    new ResizeObserver(() => ScrollTrigger.refresh(true)).observe(wrapper)
                })
            })
        }
        window.addEventListener('load', () => init())
    }
}