

const preloader = document.getElementById('preloader');
const container = document.getElementById('container');

let scrollProgress = 0;
let preloaderHeight = 80;
let isInViewport = true;
let touchStartY = 0;

const tl = gsap.timeline({ paused: true });

function animatePreloader(heightChange) {
  preloaderHeight += heightChange;
  preloaderHeight = Math.min(Math.max(preloaderHeight, 5), 80);
  preloader.style.minHeight = `${preloaderHeight}vh`;

  // Вычисляем процентное соотношение изменяющейся высоты от изначально заданного размера
  const percentageHeight = (preloaderHeight / 80) * 100;
  console.log(`Процент изменения высоты preloader: ${percentageHeight}%`);

  if (preloaderHeight <= 5) {
    container.style.overflow = 'auto';
  } else {
    container.style.overflow = 'hidden';
  }

  
  const letter2Left = 100 + (percentageHeight - 100);
  const letter3Left = 100 + (percentageHeight - 100);
  const letter3Top = 100 + ((percentageHeight - 100) * 2);
  const letter4Left = 0 - (percentageHeight - 100); 

 
  if (letter2Left >= 25) {
    gsap.to('#letter2', {
      duration: 0.1,
      left: `${letter2Left}%`,
      ease: 'power2.out'
    });
  }
 
  
  if (letter3Top >= 0) {
    gsap.to('#letter3', {
      duration: 0.1,
      top: `${letter3Top}%`,
      ease: 'power4.out',
      onComplete: () => {
        
          gsap.to('#letter3', {
            duration: 0.1,
            left: `${letter3Left}%`,
            ease: 'power4.out'
          });
        
      }
    });
  }

  
  gsap.to('#letter4', {
    duration: 0.1,
    left: `${letter4Left}%`,
    ease: 'power4.out'
  });
}


function handleWheel(event) {
  if (!isInViewport) {
    return;
  }
  const delta = event.deltaY;
  scrollProgress += delta;
  scrollProgress = Math.min(Math.max(scrollProgress, 0), 100);
  const heightChange = delta > 0 ? -5 : 5;
  animatePreloader(heightChange);
}

function handleTouchMove(event) {
  if (!isInViewport) {
    return;
  }
  const touchMoveY = event.touches[0].clientY;
  const deltaY = touchMoveY - touchStartY;
  scrollProgress += deltaY;
  scrollProgress = Math.min(Math.max(scrollProgress, 0), 100);
  const heightChange = deltaY > 0 ? 5 : -5;
  animatePreloader(heightChange);
  touchStartY = touchMoveY;
}


window.addEventListener('touchstart', function (event) {
  touchStartY = event.touches[0].clientY;
});

window.addEventListener('touchmove', function (event) {
  handleTouchMove(event);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    isInViewport = entry.isIntersecting;
    if (isInViewport) {
      window.addEventListener('wheel', handleWheel);
    } else {
      window.removeEventListener('wheel', handleWheel);
    }
  });
});
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
