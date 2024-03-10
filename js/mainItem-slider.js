document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.popular__list');
  if (slider) {
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    let animationID;

    slider.addEventListener('mousedown', startTouch);
    slider.addEventListener('touchstart', startTouch);
    slider.addEventListener('mouseup', endTouch);
    slider.addEventListener('mouseleave', endTouch);
    slider.addEventListener('touchend', endTouch);
    slider.addEventListener('mousemove', moveTouch);
    slider.addEventListener('touchmove', moveTouch);
      
        function startTouch(e) {
          if (e.type === 'touchstart') {
            startPosition = e.touches[0].clientX;
          } else {
            startPosition = e.clientX;
            isDragging = true;
          }
      
          animationID = requestAnimationFrame(animation);
        }
      
        function moveTouch(e) {
          if (isDragging) {
            const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const diff = currentPosition - startPosition;
            currentTranslate = prevTranslate + diff;
          }
        }
      
        function endTouch() {
          cancelAnimationFrame(animationID);
          isDragging = false;
          prevTranslate = currentTranslate;
        }
      
        function animation() {
          slider.style.transform = `translateX(${currentTranslate}px)`;
          animationID = requestAnimationFrame(animation);
        }
      }
    });