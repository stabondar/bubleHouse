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
            let nextSection = $('.slider')

            mm.add(isDesktop, () => 
            {
                // Pin
                ScrollTrigger.create({
                    trigger: body, start: 'top 0%', end: 'bottom 80%', pin: right
                })

                ScrollTrigger.create({
                    trigger: list, start: 'top top', end: 'bottom 80%', pin: mask
                })

                // let opacity = gsap.timeline({
                //     scrollTrigger: {trigger: list, start: 'bottom bottom', end: 'bottom 70%', scrub:true}
                //     }).to(mask, { opacity: 0})
    
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

            // mm.add(isMobile, () => 
            // {
            //     $(item).each(function(index) 
            //     {
            //         let self = $(this),
            //             div = self.find('.feature__text'),
            //             currentImg = img.eq(index)
                    
            //         currentImg.clone().appendTo(div)

            //         if(index === 3) 
            //         {
            //             let btn = self.find('.feature__btn')
            //             btn.appendTo(div)
            //         }
            //     })
            // })
        }
        window.addEventListener('load', () => init())
    }
}