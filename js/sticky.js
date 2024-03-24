// Устанавливаем начальные значения для preloader__letter
gsap.set(".preloader__letter:nth-child(1)", { x: 0, y: 0, top: "45%", left: "45%", transformOrigin: "center center" }); 
gsap.set(".preloader__letter:nth-child(2)", { x: 0, y: 0, top: "45%", left: "55%", transformOrigin: "center center" }); 
gsap.set(".preloader__letter:nth-child(3)", { x: 0, y: 0, top: "55%", left: "55%", transformOrigin: "center center" }); 
gsap.set(".preloader__letter:nth-child(4)", { x: 0, y: 0, top: "55%", left: "45%", transformOrigin: "center center" }); 

// Анимация перемещения preloader__letter в нужные позиции
gsap.to(".preloader__letter:nth-child(1)", { x: 0, y: 0, top: "0%", left: "0%", duration: 0.7, delay: 0, ease: "power2.inOut" }); 
gsap.to(".preloader__letter:nth-child(2)", { x: 0, y: 0, top: "0%", left: "100%", duration: 0.7, delay: 0, ease: "power2.inOut" }); 
gsap.to(".preloader__letter:nth-child(3)", { x: 0, y: 0, top: "100%", left: "100%", duration: 0.7, delay: 0, ease: "power2.inOut" }); 
gsap.to(".preloader__letter:nth-child(4)", { x: 0, y: 0, top: "100%", left: "0%", duration: 0.7, delay: 0, ease: "power2.inOut" });

// Дополнительная анимация для установки top значения var(--headerMarginTop)
gsap.to([".preloader__letter:nth-child(1)", ".preloader__letter:nth-child(2)"], { top: "var(--headerMarginTop)", duration: 0.7, delay: 0.7, ease: "power2.inOut" });
// Получение значения переменной CSS
const headerHeight = getComputedStyle(document.documentElement).getPropertyValue('--headerHeight');

// Преобразование значения в отрицательное число
const negativeHeaderHeight = -parseInt(headerHeight, 10);

// Установка отрицательного значения в GSAP
gsap.set(".header", {y: negativeHeaderHeight});
gsap.set(".container", {y: negativeHeaderHeight, height: "100dvh", width: "100%"});
gsap.set(".container__content", {y: 0, display: "none"}); 
gsap.set(".footer", {y: 0, display: "none"}); 
gsap.set(".preloader", {y: "", height: "100dvh", width: "100%"}); 
gsap.to(".preloader", {
  duration: 0.7, 
  height: "var(--preloaderHeight)",
  ease: "power2.inOut", 
  onComplete: () => { 
    gsap.to(".header", {y: 0, duration: 0.7, ease: "power2.inOut"}); 
    gsap.to(".container", {y: 0, duration: 0.7, height: "calc(100dvh - var(--headerHeight) + var(--headerMarginTop))",  ease: "power2.inOut", display: "block"}); 
    gsap.to(".container__content", {y: 0, duration: 0.7, ease: "power2.inOut", display: "block"}); 
    gsap.to(".preloader", {y: 0, duration: 0.7, ease: "power2.inOut"}); 
    gsap.to(".footer", {y: 0, duration: 0, ease: "power2.inOut", display: "grid"});
  }
});

function preloaderAnimation() {
  const letter1 = document.getElementById('letter1');
  const letter2 = document.getElementById('letter2');
  const letter3 = document.getElementById('letter3');
  const letter4 = document.getElementById('letter4');

  const container = document.getElementById('container');
  const containerContent = document.getElementById('containerContent');

  function handleScroll() {
    if (containerContent) { 
      const containerHeight = container.clientHeight;
      const containerContentTop = containerContent.offsetTop;
      const scrollTop = container.scrollTop;

      
      const distance = containerContentTop - scrollTop;
      const distancePercentage = Math.max(0, (distance / containerHeight) * 100); 

      const leftLetter2 = -100 + distancePercentage * 2 <= 0 ? 0 : -100 + (distancePercentage * 2); 

      if (leftLetter2 <= 30) {
        letter2.style.left = `30%`;
      } else {
        letter2.style.left = `${leftLetter2}%`;
      }

      const topLetter3 = -100 + distancePercentage * 2 <= 2 ? 'var(--headerMarginTop)' : -100 + (distancePercentage * 2) + '%';
      const leftLetter3 = distancePercentage * 2 >= 100 ? 100 : distancePercentage * 2;

      letter3.style.left = `${leftLetter3}%`;
      letter3.style.top = `${topLetter3}`;

      if (leftLetter3 <= 60) {
        letter3.style.left = `60%`;
      } else {
        letter3.style.left = `${leftLetter3}%`;
      }


      const topLetter4 = -50 + distancePercentage * 2 <= 2 ? 'var(--headerMarginTop)' : -50 + (distancePercentage * 2) + '%';
      const leftLetter4 = distancePercentage * 2 >= 187 ? 0 : 175 - distancePercentage * 2;
      
      letter4.style.left = `${leftLetter4}%`;
      letter4.style.top = `${topLetter4}`;
    }
  }

 
  container.addEventListener('scroll', handleScroll);
}

preloaderAnimation();
