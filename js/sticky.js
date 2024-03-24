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
      // if (leftLetter4 < 100) {
      //   letter4.style.left = `${leftLetter4}%`;
      //   letter4.style.top = `${topLetter4}`;
      // } else {
      //   letter4.style.left = `100%`; // Убедимся, что left не выходит за пределы контейнера
      // }
    }
  }

 
  container.addEventListener('scroll', handleScroll);
}

preloaderAnimation();