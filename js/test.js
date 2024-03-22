// Создаем переменные для элементов preloader и container
const preloader = document.getElementById('preloader');
const container = document.getElementById('container');

// Задаем начальное значение прогресса прокрутки и начальную высоту preloader'а
let scrollProgress = 0;
let preloaderHeight = 80; // Начальная высота в vh
let isInViewport = true; // Флаг для проверки видимости preloader'а

// Создаем анимацию с использованием GSAP
const tl = gsap.timeline({ paused: true }); // Начинаем анимацию, но останавливаем её

// Функция для изменения высоты preloader'а на определенную величину
function animatePreloader(heightChange) {
  // Ограничиваем изменение высоты, чтобы она не превышала максимальную
  preloaderHeight += heightChange; // Изменяем высоту на указанное значение
  preloaderHeight = Math.min(Math.max(preloaderHeight, 5), 80); // Ограничиваем высоту от 5 до 80vh
  preloader.style.minHeight = `${preloaderHeight}vh`; // Применяем изменение к preloader'у

  // Проверяем высоту preloader'а и применяем стили к контейнеру
  if (preloaderHeight <= 5) {
    container.style.overflow = 'auto';
  } else {
    container.style.overflow = 'hidden';
  }
}

// Функция обработки события wheel (колеса мыши)
function handleWheel(event) {
  // Проверяем, находится ли preloader в зоне видимости
  if (!isInViewport) {
    return; // Если preloader не виден, прекращаем выполнение функции
  }

  // Получаем прогресс прокрутки на основе дельты колеса мыши
  const delta = event.deltaY;
  scrollProgress += delta;

  // Ограничиваем прогресс в пределах от 0 до 100
  scrollProgress = Math.min(Math.max(scrollProgress, 0), 100);

  // Определяем, на сколько изменить высоту preloader'а в зависимости от прогресса прокрутки
  const heightChange = delta > 0 ? -5 : 5; // Изменение высоты на 5vh в зависимости от направления прокрутки

  // Добавляем анимацию изменения высоты preloader'а на указанное значение
  animatePreloader(heightChange);
}

// Создаем новый экземпляр Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Обновляем флаг isInViewport в зависимости от видимости preloader'а
    isInViewport = entry.isIntersecting;
    if (isInViewport) {
      // Если preloader виден, активируем обработчик события wheel
      window.addEventListener('wheel', handleWheel);
    } else {
      // Если preloader не виден, деактивируем обработчик события wheel
      window.removeEventListener('wheel', handleWheel);
    }
  });
});

// Начинаем отслеживать видимость preloader'а
observer.observe(preloader);

// document.addEventListener('DOMContentLoaded', function () {
//   const container = document.getElementById('container');
//   const preloader = document.getElementById('preloader');
//   const minHeight = 5; // Минимальная высота preloader в процентах

//   // Функция для обновления высоты preloader
//   function updatePreloaderHeight() {
//     const containerScroll = container.scrollTop;
//     const maxContainerScroll = container.scrollHeight - container.clientHeight;
//     const maxPreloaderHeight = 80; // Максимальная высота preloader

//     // Рассчитываем новую высоту preloader
//     let newHeight = maxPreloaderHeight - (containerScroll / maxContainerScroll) * maxPreloaderHeight;
//     newHeight = Math.max(newHeight, minHeight); // Убеждаемся, что высота не меньше минимальной
//     preloader.style.minHeight = newHeight + 'vh';
//   }

//   // Вызываем функцию при загрузке страницы и при скролле контейнера
//   updatePreloaderHeight();
//   container.addEventListener('scroll', updatePreloaderHeight);
// });



// function preloaderAnimation() {
//   const letter1 = document.getElementById('letter1');
//   const letter2 = document.getElementById('letter2');
//   const letter3 = document.getElementById('letter3');
//   const letter4 = document.getElementById('letter4');

//   const container = document.getElementById('container');
//   const containerContent = document.getElementById('containerContent');

//   function handleScroll() {
//     if (containerContent) { 
//       const containerHeight = container.clientHeight;
//       const containerContentTop = containerContent.offsetTop;
//       const scrollTop = container.scrollTop;

      
//       const distance = containerContentTop - scrollTop;
//       const distancePercentage = Math.max(0, (distance / containerHeight) * 106); 

//       const leftLetter2 = -100 + distancePercentage * 2 <= 0 ? 0 : -100 + (distancePercentage * 2); 

//       if (leftLetter2 <= 30) {
//         letter2.style.left = `30%`;
//       } else {
//         letter2.style.left = `${leftLetter2}%`;
//       }

//       const topLetter3 = -100 + distancePercentage * 2 <= 0 ? 0 : -100 + (distancePercentage * 2);
//       const leftLetter3 = distancePercentage * 2 >= 100 ? 100 : distancePercentage * 2;

//       letter3.style.left = `${leftLetter3}%`;
//       letter3.style.top = `${topLetter3}%`;

//       if (leftLetter3 <= 60) {
//         letter3.style.left = `60%`;
//       } else {
//         letter3.style.left = `${leftLetter3}%`;
//       }

//       const leftLetter4 = distancePercentage === 100 ? 100 : 100 - distancePercentage; 
//       const topLetter4 = leftLetter4 >= 86 ? 0 : 100;

//       letter4.style.left = `${leftLetter4}%`;
//       letter4.style.top = `${topLetter4}%`;
      

//       console.log(distancePercentage);
//     }
//   }

 
//   container.addEventListener('scroll', handleScroll);
// }

// preloaderAnimation();
