const productDepictions = document.querySelectorAll('.product__item-depiction');

productDepictions.forEach((depiction) => {
  const button = depiction.querySelector('.product__item-depiction_top-button');
  const hiddenContent = depiction.querySelector('.product__item-depiction_hidden');

  button.addEventListener('click', function() {
    hiddenContent.classList.toggle('show');
    button.classList.toggle('show');
  });
});