// Выбор кнопки меню и списка меню
const menuBtn = document.querySelector('.header__menu-btn');
const menuList = document.querySelector('.header__nav-list');

// Добавление обработчика события клика на кнопку меню
menuBtn.addEventListener('click', () => {
  // Переключение класса 'open' у списка меню для запуска анимации
  menuList.classList.toggle('open');

  // Поворот спанов иконки бургер-меню
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

// Выбор обертки меню корзины и кнопки закрытия
const basketMenuWrapper = document.querySelector('.header__basket-menu-wrapper');
const basketMenuClose = document.querySelector('.basket__menu-top_close');
const headerBasket = document.querySelector('.header__basket');

// Добавление обработчика события клика на кнопку закрытия меню корзины
basketMenuClose.addEventListener('click', () => {
  // Скрытие меню корзины
  basketMenuWrapper.classList.remove('open');
});

// Добавление обработчика события клика на кнопку меню корзины
headerBasket.addEventListener('click', () => {
  // Переключение состояния меню корзины
  basketMenuWrapper.classList.toggle('open');
});