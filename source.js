let menuBtn = document.querySelector(".menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");
let body = document.querySelector("body");

var controller = new ScrollMagic.Controller();
var timeline = new TimelineMax();
var box1Tween = gsap.to("#banner", .3, { opacity: 0, duration: .4, ease: "power2.in" });
var box2Tween = gsap.to(".sm-header", .3, { paddingTop: 8,  duration: .6, ease: "power2.in"});
var stretch = gsap.from(".collections-area", { height: 0 });
var produtDetailStretch = gsap.from(".product-details", { height: 0 });
let totalDuration = 3;
timeline.add(box1Tween, "-=3");
timeline.add(box2Tween, "-=3");
// timeline.add(stretch, totalDuration * .25);
// timeline.add(produtDetailStretch, totalDuration * .30);
var scene = new ScrollMagic.Scene({
  triggerHook: .1,
  offset:40
})
.setTween(timeline)
.addIndicators()
.addTo(controller);


menuBtn.addEventListener("click",()=>{
  clickHandler();
});
let tl = new TimelineMax({ paused: true });

function clickHandler(){
  body.style.overflow = body.style.overflow ? "hidden" : null;
  // console.log(body.style.overflow);
  tl.to(".mobile-menu", { left : 0, ease: "expo.in", duration: .5 });
  // tl.to(".overlay", { opacity: .85, ease: "expo.in" }, "=.1");
  tl.reversed() ? tl.play():tl.reverse();
}
