import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Nav
{
  constructor() {

    const leftPin = () => {
        let pinItem = $('.section.is--nav')
        let trigger = $('.main')

        ScrollTrigger.create({
            trigger: trigger,
            start: "top top", 
            end: "top top",
            pin: pinItem,
          });
    }
    leftPin ()
  }
}