$(document).ready(function ($) {
  "use strict";

  let bookTable = new Swiper(".book-table-img-slider", {
    slidesPerView : 1,
    spaceBetween : 20,
    loop : true,
    autoplay : {
      delay : 3000,
      disableOnInteraction : false,
    },
    speed : 2000,
    effect : "coverflow",
    coverflowEffect : {
      rotate : 3,
      stretch : 2,
      depth : 100,
      modifier : 5,
      sildesShadows : false,
    },
  })

  jQuery(".filters").on("click", function () {
    jQuery("#menu-dish").removeClass("bydefault_show");
});
$(function () {
    var filterList = {
        init: function () {
            $("#menu-dish").mixItUp({
                selectors: {
                    target: ".dish-box-wp",
                    filter: ".filter",
                },
                animation: {
                    effects: "fade",
                    easing: "ease-in-out",
                },
                load: {
                    filter: ".all, .breakfast, .lunch, .dinner",
                },
            });
        },
    };
    filterList.init();
});

  jQuery(".menu-toggle").click(function () {
    jQuery(".main-navigation").toggleClass("toggled");
  });

  jQuery(".header-menu ul li a").click(function () {
    jQuery(".main-navigation").removeClass("toggled");
  });

  gsap.registerPlugin(ScrollTrigger);

  const elementFirst = document.querySelector('.site-header');
  ScrollTrigger.create({
    trigger : "body",
    start : "30px top",
    end : "bottom bottom",

    onEnter : () => myFunction(),
    onLeaveBack : () => myFunction(),
  });

  function myFunction(){
    elementFirst.classList.toggle('sticky_head');
  }
  const scene = $(".js-parallax-scene").get(0);
  const parallaxInstance = new Parallax(scene);
});

jQuery(window).on('load', function (){
  $('body').removeClass('body-fixed');

  let targets = document.querySelectorAll(".filter");
  let activeTab = 0;
  let old = 0;
  let dur = 0.4;
  let animation

  for(let i = 0; i < targets.length; i++){
    targets[i].index = i;
    targets[i].addEventListener("click", moveBar);
  }

  gsap.set(".filter-active", {
    x: targets[0].offsetLeft,
    width: targets[0].offsetWidth
  });

  function moveBar(){
    if(this.index != activeTab){
      if(animation && animation.isActive()){
        animation.progress(1);
      }
      animation = gsap.timeline({
        default : {
          duration : 0.4
        }
      });
      old = activeTab;
      activeTab = this.index;
      animation.to(".filter-active",{
        x: targets[activeTab].offsetLeft,
        width: targets[activeTab].offsetWidth,
      });
      
      animation.to(targets[old], {
        color: "#0d0d25",
        ease: "none"
      }, 0);
      animation.to(targets[activeTab], {
        color: "#fff",
        ease: "none"
      }, 0);
    }
  }
})