export default class Burger
{
    constructor() {
        const body = $('body');
        const burgerButton = $('.nav__burger');
        const burgerBlock = $('.nav-mobile');
        const burgerClose = $('.nav-mobile__close');
        const burgerBg = $('.nav-mobile__bg');
        const navItem = $('.nav__link.is--burger');
      
        navItem.on( "click", function() {
          burgerClose.trigger("click");
      });
      
        burgerButton.click(function() {
          burgerBlock.css("display", "flex").hide().fadeIn();
          body.css("overflow", "hidden");
          body.css("height", "100%");
          burgerBg .fadeIn();
      });
      
        burgerClose.click(function() {
          burgerBlock.fadeOut();
          body.css({"overflow" : "auto", "height":"auto"});
          burgerBg .fadeOut();
      });
      
        burgerBg.click(function() {
          burgerBlock.fadeOut();
          body.css({"overflow": "auto", "height": "auto"});
          burgerBg .fadeOut();
      });

window.addEventListener('load', () => 
        {
            setTimeout(() => {
                gsap.set($('.nav__logo.is--mob'), {autoAlpha: 1})
            }, 1500);
        })
    }
}