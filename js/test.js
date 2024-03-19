function preloaderAnimation() {
  const letter1 = document.getElementById('letter1');
  const letter2 = document.getElementById('letter2');
  const letter3 = document.getElementById('letter3');
  const letter4 = document.getElementById('letter4');

  const container = document.getElementById('container');
  const containerContent = document.getElementById('containerContent');

  function handleScroll() {
    if (containerContent) { // Проверяем наличие элемента
      const containerHeight = container.clientHeight;
      const containerContentTop = containerContent.offsetTop;
      const scrollTop = container.scrollTop;

      // Вычисляем расстояние от верхней границы контейнера до элемента в процентах
      const distance = containerContentTop - scrollTop;
      const distancePercentage = Math.max(0, (distance / containerHeight) * 100);

      const leftLetter2 = -100 + distancePercentage * 3 <= 0 ? 0 : -100 + (distancePercentage * 3); // Позиция для letter2

      const topLetter3 = -100 + distancePercentage * 2 <= 0 ? 0 : -100 + (distancePercentage * 2);

      const leftLetter3 = topLetter3 === 0 ? Math.max(55, 100 - distancePercentage) : 100; // Позиция для letter3

      letter3.style.left = `${leftLetter3}%`;
      letter3.style.top = `${topLetter3}%`;

      
      const leftLetter4 = 100 - distancePercentage * 0.7 <= 25 ? 25 : 100 - distancePercentage * 0.7;// Позиция для letter3
     
      

      if (leftLetter2 <= 25) {
        letter2.style.left = `25%`;
      } else {
        letter2.style.left = `${leftLetter2}%`;
      }

      // if (topLetter3 == 0 ) {
      //   letter3.style.left = `${leftLetter3}%`;
      // } else {
      //   letter3.style.top = `${topLetter3}%`;
      // }


      // letter3.style.top = `${topLetter3}%`;

      letter4.style.left = `${leftLetter4}%`;
      

      console.log(letter3.style.left);
    }
  }

  // Добавляем обработчик события прокрутки к контейнеру
  container.addEventListener('scroll', handleScroll);
}

preloaderAnimation();
