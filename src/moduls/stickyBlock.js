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

                // ScrollTrigger.create({
                //     trigger: body, start: 'top top', end: 'bottom 80%', pin: heading
                // })

                const mask = () => {
                    const item = $('.scroll-cards__mask');
                    const bg1 = "linear-gradient(180deg, #f3f3f2 21%, hsla(0, 0%, 95.3%, 0) 50%, #f3f3f3)";
                    const bg2 = "linear-gradient(180deg, #f3f3f2 0%, hsla(0, 0%, 95.3%, 0) 20%, #f3f3f3)";

                    let tl = gsap.timeline({
                        scrollTrigger : {
                            trigger: body, start: 'top top', end: 'bottom 80%', pin: heading, scrub: true
                        }
                    })
                        tl.fromTo(item, { backgroundImage: bg2}, {backgroundImage: bg1})
                        
                    }
                mask()



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