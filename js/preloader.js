gsap.set(".preloader__letter:nth-child(1)", { x: 0, y: 0, top: "50%",left: "50%", transformOrigin: "center center" }); 
gsap.set(".preloader__letter:nth-child(2)", { x: 0, y: 0, top: "50%",right: "50%",transformOrigin: "center center" }); 
gsap.set(".preloader__letter:nth-child(3)", { x: 0, y: 0, bottom: "50%",left: "50%", right: "50%", transformOrigin: "center center" }); 
gsap.set(".preloader__letter:nth-child(4)", { x: 0, y: 0, bottom: "50%",right: "50%",transformOrigin: "center center" }); 

gsap.to(".preloader__letter:nth-child(1)", { x: 0, y: 0, top:0,left:0, duration: 0.9, delay: 0, ease: "power2.inOut" }); // Анимация для первой буквы
gsap.to(".preloader__letter:nth-child(2)", { x: 0, y: 0, top:0,right:0, duration: 0.9, delay: 0, ease: "power2.inOut" }); // Анимация для второй буквы
gsap.to(".preloader__letter:nth-child(3)", { x: 0, y: 0, bottom:0,left:0, duration: 0.9, delay: 0, ease: "power2.inOut" }); // Анимация для третьей буквы
gsap.to(".preloader__letter:nth-child(4)", { x: 0, y: 0, bottom:0,right:0, duration: 0.9, delay: 0, ease: "power2.inOut" }); // Анимация для четвертой буквы



gsap.set(".header", {y: "-58px" }); // Начально устанавливаем header за пределами экрана
gsap.set(".container", {y: 0, display: "none"}); // Начально устанавливаем container за пределами экрана
gsap.set(".footer", {y: 0, display: "none"}); // Начально устанавливаем container за пределами экрана
gsap.set(".preloader", {y: "-58px", height: "100vh", width: "100vw"}); // Устанавливаем начальные размеры preloader
gsap.to(".preloader", {
  duration: 0.9, // Продолжительность анимации preloader
  height: "80vh",
  ease: "power2.inOut", // Высота preloader после анимации
  onComplete: () => { // После завершения анимации preloader
    gsap.to(".header", {y: 0, duration: 0.9, ease: "power2.inOut"}); // Плавно выезжаем header сверху на своё место
    gsap.to(".container", {y: 0, duration: 0.9, ease: "power2.inOut", display: "block"}); // Плавно выезжаем container снизу на своё место
    gsap.to(".preloader", {y: 0, duration: 0.9, ease: "power2.inOut"}); 
    gsap.to(".footer", {y: 0, duration: 0, ease: "power2.inOut", display: "grid"}); // Плавно выезжаем preloader снизу на своё место
    // gsap.set("body, .wrapper", { overflow: "auto" }); 
  }
});


let scrollCount = 0; // Переменная для отслеживания количества скролов
let Xwidth = '37px';

// Функция для изменения высоты preloader при скролле колёсиком мышки или касании на мобильных устройствах
function handleScroll(event) {
  if (scrollCount < 3) { // Проверка на количество скролов
    gsap.to(".preloader", {
      duration: 0.5, // Продолжительность анимации уменьшения на 20vh
      height: `-=25vh`, // Уменьшение высоты на 20vh
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
          document.body.style.overflow = "auto"; // Включение скролла в body после завершения анимации
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