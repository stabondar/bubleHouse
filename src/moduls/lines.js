import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class Lines
{
    constructor()
    {
        const enter = 'top 70%';
        const item = $('.compare__line-inner');

        const cardMask = () => {

            let tl = gsap.timeline({paused: true, defaults: {duration: 0.9, ease: 'power3', stagger: 0.2}})
                tl.set (item, {transformOrigin: "left center"})
                tl.from(item, {width: 0})

            ScrollTrigger.create({
                trigger: item,
                start: enter,
                onEnter: () => tl.play()
            })
        }
        cardMask()
    
    }
}