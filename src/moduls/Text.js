import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'


gsap.registerPlugin(ScrollTrigger, SplitText)

export default class Text
{
    constructor() {

        let mm = gsap.matchMedia(),
            isDesktop = '(min-width: 991px)'

         mm.add(isDesktop, () => 
            {
                const cardMask = () => {  
                    let enter = 'top 80%'
                    let splitLine, splitChar
                    const init = () => {
        
                    const lineAnimation = () => {
                        let item = $('[text-line]')
                        splitLine = new SplitText(item, {type: 'lines'})
                        $(item).each(function()
                        {
                            let self = $(this)
                            let lines = self.find(splitLine.lines)
                            let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.04}})
                            tl.from(lines, {yPercent: 100, opacity: 0, clearProps: 'all'})
            
                            ScrollTrigger.create({
                                trigger: self,
                                start: enter,
                                onEnter: () => tl.play()
                            })
                        })
                    }
        
                    lineAnimation()
            
                    const charAnimation = () => {
                        let item = $('[text-char]')
                        splitChar = new SplitText(item, {type: 'words, chars'})
                        $(item).each(function()
                        {
                            let self = $(this)
                            let chars = self.find(splitChar.chars)
                            let words = self.find(splitChar.words)
                            gsap.set([chars, words], {position: 'static'})
                            let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power1', stagger: 0.02}})
                            tl.from(chars, { opacity: 0, y: 20},)
                            .to(chars, {clearProps: "transform", duration: 0 })
                            .fromTo(chars, { "-webkit-text-fill-color": "#333" }, { "-webkit-text-fill-color": "transparent", duration: 0.1 }, '<')
                            .to(chars, { backgroundPosition: "100% 50%", duration: 0.1 }, "<");
            
                            ScrollTrigger.create({
                                trigger: self,
                                start: enter,
                                onEnter: () => tl.play()
                            })
                        })
                    }
        
                    charAnimation()
                    }
        
                    const charAnimation1 = () => {
                        let item = $('[text-char1]')
                        splitChar = new SplitText(item, {type: 'words, chars'})
                        $(item).each(function()
                        {
                            let self = $(this)
                            let chars = self.find(splitChar.chars)
                            let words = self.find(splitChar.words)
                            let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power1', stagger: 0.02}})
                            tl.from(chars, { opacity: 0, y: 20},)
                            .to(chars, {clearProps: "transform", duration: 0 })
            
                            ScrollTrigger.create({
                                trigger: self,
                                start: enter,
                                onEnter: () => tl.play()
                            })
                        })
                    }
        
                    charAnimation1()
                
                    window.addEventListener('load', () => init())
        
                    let windowWidth = window.innerWidth
        
                    const checkWidth = () => {
                        let afterWidth = window.innerWidth
                        if (windowWidth !== afterWidth) {  
                            if(splitLine != null) splitLine.revert()
                            if(splitChar != null) splitChar.revert()
        
                    let tl = gsap.timeline({paused: true, defaults: {duration: 0.9, ease: 'power3', stagger: 0.2}})
                        tl.to(item, {height: 0})
        
                        init() 
                    }
        
                    windowWidth = window.innerWidth
                    ScrollTrigger.create({
                        trigger: item,
                        start: enter,
                        onEnter: () => tl.play()
                    })
                    }
        
                    function debounce(func) {
                        var timer
                        return function (event) {
                            if (timer) clearTimeout(timer)
                            timer = setTimeout(func, 300, event)
                        }
                    }
        
                    window.addEventListener('resize', debounce(function (e) {checkWidth()}))
                }
        })

        cardMask()
    }
}
        