// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");

// IIFE - Immediately Invoked Function Expression
// this is used instead of $("document").ready(function()
//that you may see in examples or places you copy code
(function ($, window, document) {

    // Write your jQuery JavaScript here!
    
  })(window.jQuery, window, document);
  // The global jQuery object is passed as a parameter
  
  
  // --------- NAV BAR ---------------------------------
  // This code shows and hides the nav bar as people scroll. It is the "Smart" part. Written by Jemima Abu
  // =======================================
  
  const nav = document.querySelector("nav");
  const supportPageOffset = window.pageXOffset !== undefined;
  const isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
  
  let previousScrollPosition = 0;
  
  const isScrollingDown = () => {
    let scrolledPosition = supportPageOffset
      ? window.pageYOffset
      : isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
    let isScrollDown;
  
    if (scrolledPosition > previousScrollPosition) {
      isScrollDown = true;
    } else {
      isScrollDown = false;
    }
    previousScrollPosition = scrolledPosition;
    return isScrollDown;
  };
  
  const handleNavScroll = () => {
    if (isScrollingDown() && !nav.contains(document.activeElement)) {
      nav.classList.add("scroll-down");
      nav.classList.remove("scroll-up");
    } else {
      nav.classList.add("scroll-up");
      nav.classList.remove("scroll-down");
    }
  };
  
  var throttleTimer;
  
  const throttle = (callback, time) => {
    if (throttleTimer) return;
  
    throttleTimer = true;
    setTimeout(() => {
      callback();
      throttleTimer = false;
    }, time);
  };
  
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  
  window.addEventListener("scroll", () => {
    if (mediaQuery && !mediaQuery.matches) {
      throttle(handleNavScroll, 250);
    }
  });
  
  
  /* Slide Toggle on Hamburger Menu 
  Code modified from this JS Fiddle: https://jsfiddle.net/gebpjo1L/18/
  */
  var container = document.getElementById('nav-links')
  var button    = document.getElementById('nav-toggle')
  console.log(container.classList); console.log(button);
  button.addEventListener('click', () => {
      /** Slide down. */
      if(!container.classList.contains('active')) {
          /** Show the container. */
          container.classList.add('active')
        container.style.height = "auto"
          
          /** Get the computed height of the container. */
          var height = container.clientHeight + "px"
  
          /** Set the height of the content as 0px, */
          /** so we can trigger the slide down animation. */
          container.style.height = "0px"
  
          /** Do this after the 0px has applied. */
          /** It's like a delay or something. MAGIC! */
          setTimeout(() => {
              container.style.height = height
          }, 0) 
      
      /** Slide up. */
      } else {
        
          /** Set the height as 0px to trigger the slide up animation. */
          container.style.height = "0px"
          
          /** Remove the `active` class when the animation ends. */
          container.addEventListener('transitionend', () => {
              container.classList.remove('active')
            container.style.height = "auto"
          }, {once: true})
      }
  })
  