// Select the menu button and the menu list
const menuBtn = document.querySelector('.header__menu-btn');
const menuList = document.querySelector('.header__nav-list');

// Add click event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the 'open' class on the menu list to trigger the animation
  menuList.classList.toggle('open');

  // Rotate the burger menu icon spans
  menuBtn.classList.toggle('open');
  if (menuBtn.classList.contains('open')) {
    menuBtn.querySelectorAll('.header__menu-btn_span')[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    menuBtn.querySelectorAll('.header__menu-btn_span')[1].style.opacity = '0';
    menuBtn.querySelectorAll('.header__menu-btn_span')[2].style.transform = 'rotate(-45deg) translate(2px, -2px)';
  } else {
    menuBtn.querySelectorAll('.header__menu-btn_span')[0].style.transform = 'none';
    menuBtn.querySelectorAll('.header__menu-btn_span')[1].style.opacity = '1';
    menuBtn.querySelectorAll('.header__menu-btn_span')[2].style.transform = 'none';
  }
});