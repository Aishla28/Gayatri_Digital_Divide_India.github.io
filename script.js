const locomotiveScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getSpeed: true,
  getDirection: true,
  inertia: 0.75,
});

document.addEventListener('DOMContentLoaded', function () {
  function ScrollUpdateDelay() {
    setTimeout(function () {
      locomotiveScroll.update();
    }, 100);
  }

  ScrollUpdateDelay();
});

const anchorLinks = document.querySelectorAll('.fixed-nav .location');

anchorLinks.forEach((anchorLink) => {
  let hashval = anchorLink.getAttribute('href');
  let target = document.querySelector(hashval);

  anchorLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    locomotiveScroll.scrollTo(target);
  });
});

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})


const cursorRounded = document.querySelector('.cursor');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)

