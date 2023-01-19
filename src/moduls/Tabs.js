export default class Tabs
{
  constructor() {
    const automatically = () => {
        let arrowLeft = $('.slider__arrow').eq(0),
            arrowRight = $('.slider__arrow').eq(1),
            activeLink = $('.usecase-tabs__btn.w--current'),
            link = $('.usecase-tabs__btn'),
            length = link.length,
            activeIndex = activeLink.index()

            arrowRight.on('click', () => {
                if(activeIndex != length - 1) {
                    activeLink.next().click()
                    } else {
                        link.first().click()
                    }

                activeLink = $('.usecase-tabs__btn.w--current')
                activeIndex = activeLink.index()
            })

            arrowLeft.on('click', () => {
                if(activeIndex != 0) {
                    activeLink.prev().click()
                    } else {
                        link.last().click()
                    }

                    activeLink = $('.usecase-tabs__btn.w--current')
                    activeIndex = activeLink.index()
            })

            link.on('click', () => {
                activeLink = $('.usecase-tabs__btn.w--current')
                activeIndex = activeLink.index()
            })
        }
        automatically()
  }
}

