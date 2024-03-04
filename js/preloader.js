gsap.set(".preloader__letter:nth-child(1)", { x: 0, y: 0, top: "45%",left: "45%", transformOrigin: "center center" }); 
gsap.set(".preloader__letter:nth-child(2)", { x: 0, y: 0, top: "45%",right: "45%",transformOrigin: "center center" }); 
gsap.set(".preloader__letter:nth-child(3)", { x: 0, y: 0, bottom: "45%",left: "45%", right: "45%", transformOrigin: "center center" }); 
gsap.set(".preloader__letter:nth-child(4)", { x: 0, y: 0, bottom: "45%",right: "45%",transformOrigin: "center center" }); 

gsap.to(".preloader__letter:nth-child(1)", { x: 0, y: 0, top:0,left:0, duration: 0.9, delay: 0, ease: "power2.inOut" }); 
gsap.to(".preloader__letter:nth-child(2)", { x: 0, y: 0, top:0,right:0, duration: 0.9, delay: 0, ease: "power2.inOut" }); 
gsap.to(".preloader__letter:nth-child(3)", { x: 0, y: 0, bottom:0,left:0, duration: 0.9, delay: 0, ease: "power2.inOut" }); 
gsap.to(".preloader__letter:nth-child(4)", { x: 0, y: 0, bottom:0,right:0, duration: 0.9, delay: 0, ease: "power2.inOut" }); 



gsap.set(".header", {y: "-58px" }); 
gsap.set(".container", {y: "-58px", height: "100dvh", width: "100%"}); 
gsap.set(".container__content", {y: 0, display: "none"}); 
gsap.set(".footer", {y: 0, display: "none"}); 
gsap.set(".preloader", {y: "", height: "100dvh", width: "100%"}); 
gsap.to(".preloader", {
  duration: 0.9, 
  height: "80vh",
  ease: "power2.inOut", 
  onComplete: () => { 
    gsap.to(".header", {y: 0, duration: 0.9, ease: "power2.inOut"}); 
    gsap.to(".container", {y: 0, duration: 0.9, height: "calc(100vh - var(--headerHeight))",  ease: "power2.inOut", display: "block"}); 
    gsap.to(".container__content", {y: 0, duration: 0.9, ease: "power2.inOut", display: "block"}); 
    gsap.to(".preloader", {y: 0, duration: 0.9, ease: "power2.inOut"}); 
    gsap.to(".footer", {y: 0, duration: 0, ease: "power2.inOut", display: "grid"});
  }
});




let scrollCount = 0;

let Xwidth = '37px';


function handleScroll(event) {
  if (scrollCount < 3) { 
    gsap.to(".preloader", {
      duration: 0.5, 
      height: `-=25vh`, 
      onComplete: () => {
        if (scrollCount === 1) { 
          gsap.to(".preloader__letter:nth-child(2)", { top: "0%",right: "25%", duration: 0.5, ease: "power2.inOut" }); 
          gsap.to(".preloader__letter:nth-child(3)", { bottom: "0%", left: "0%", right: "100%", duration: 0.5, ease: "power2.inOut" });
          gsap.to(".preloader__letter:nth-child(4)", { top: "50%",right: "0%", duration: 0.5, ease: "power2.inOut" }); 
        }

        if (scrollCount === 2) {
          gsap.to(".preloader__letter:nth-child(2)", { top: "0%", right: "50%", duration: 0.5, ease: "power2.inOut" }); 
          gsap.to(".preloader__letter:nth-child(3)", { bottom: "0%", left: "calc(100% - 37px)", right: "0%",   duration: 0.5, ease: "power2.inOut" }); 
          gsap.to(".preloader__letter:nth-child(4)", { top: "0%", right: "0%", duration: 0.5, ease: "power2.inOut" }); 
        }

        if (scrollCount === 3) {
          gsap.to(".preloader__letter:nth-child(2)", { top: "0%", right: "60%", duration: 0.5, ease: "power2.inOut" }); 
          gsap.to(".preloader__letter:nth-child(3)", { top: "0%",  left: "calc(100% - 37px)", right: "0%",  duration: 0.5, ease: "power2.inOut" }); 
          gsap.to(".preloader__letter:nth-child(4)", {  top: "0%",right: "30%", duration: 0.5, ease: "power2.inOut" }); 

          
        }

        

        if (scrollCount === 3) {
          document.body.style.overflow = "hidden"; // Включение скролла в body после завершения анимации
          let container = document.querySelector(".container");
          container.style.overflow = "auto";
          container.style.overflowX = "hidden";
        } else {
          setTimeout(() => {
            window.addEventListener("wheel", handleScroll, { once: true }); // Добавление задержки между скроллами
            window.addEventListener("touchmove", handleScroll, { once: true }); // Добавление задержки между касаниями
          }, 500); // Пауза в 0.5 секунду между скроллами
        }
      }
    });
    scrollCount++; // Увеличение счетчика скролов
  }
}

// Добавление слушателя события колёсика мышки для обработки скролла
window.addEventListener("wheel", handleScroll, { once: true }); // Триггером будет 1 скролл колёсиком мышки
window.addEventListener("touchmove", handleScroll, { once: true }); // Триггером будет 1 касание на мобильном устройстве