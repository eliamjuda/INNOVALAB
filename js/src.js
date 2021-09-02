
var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('', .5, {x:200, opacity: 0});
tl.from('span', 1.5, { width: 0}, "=-.5");
tl.from('#intro-p1', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl.from('#intro-p2', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");
tl.from('#caja-image1', 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.6");


tl.from('#protozoa-p1', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl.from('#protozoa-p2', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");



const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".sticky")
  .setTween(tl)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#caja-image1"
})
  .setTween(tl2)
    .addTo(controller);


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}

