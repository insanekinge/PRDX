

gsap.set(".header", {y: "-50px" }); // Начально устанавливаем header за пределами экрана
gsap.set(".container", {y: "0", display: "none"}); // Начально устанавливаем container за пределами экрана
gsap.set(".footer", {y: "0", display: "none"}); // Начально устанавливаем container за пределами экрана
gsap.set(".preloader", {y: "-50px", height: "100vh", width: "100vw"}); // Устанавливаем начальные размеры preloader

gsap.to(".preloader", {
  duration: 2, // Продолжительность анимации preloader
  height: "80vh",
  ease: "power2.inOut", // Высота preloader после анимации
  onComplete: () => { // После завершения анимации preloader
    gsap.to(".header", {y: 0, duration: 2, ease: "power2.inOut"}); // Плавно выезжаем header сверху на своё место
    gsap.to(".container", {y: 0, duration: 0, ease: "power2.inOut", display: "block"}); // Плавно выезжаем container снизу на своё место
    gsap.to(".preloader", {y: 0, duration: 2, ease: "power2.inOut"}); 
    gsap.to(".footer", {y: 0, duration: 0, ease: "power2.inOut", display: "block"}); // Плавно выезжаем preloader снизу на своё место
    gsap.set("body, .wrapper", { overflow: "auto" }); // Включаем прокрутку в body и wrapper после анимации
  }
});

gsap.set("body, .wrapper", { overflow: "hidden" }); // Изначально отключаем прокрутку в body и wrapper

gsap.to(window, {
  scrollTrigger: {
    trigger: ".container",
    start: "top center",
    end: "bottom center",
    scrub: true,
    onToggle: self => {
      if (self.isActive) {
        self.scrollTrigger.scrub = false;
      }
    }
  }
});

