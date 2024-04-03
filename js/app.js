$(document).ready(function ($) {
  "use strict";

  WebGLSampler.registerPlugin(ScrollTrigger);

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
})