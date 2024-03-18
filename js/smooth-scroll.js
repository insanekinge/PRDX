// // Функция для плавной докрутки с эффектом задержки
// function smoothScrollWithDelay() {
//         // Добавление обработчика события для скролла колесиком мыши внутри контейнера
//         document.querySelector(".container__content").addEventListener('wheel', function(e) {
//           // Получение направления скролла
//           const scrollDirection = e.deltaY > 0 ? 1 : -1;
      
//           // Анимация прокрутки с использованием GSAP с эффектом задержки
//           gsap.to(".container__content", {
//             y: "+=" + 5 * scrollDirection, // Немного дополнительной прокрутки
//             duration: 1, // Продолжительность анимации в секундах
//             ease: "power2.inOut" // Использование эффекта плавности
//           });
//         });
//       }
      
//       // Вызов функции для инициализации плавной докрутки с эффектом задержки
//       smoothScrollWithDelay();