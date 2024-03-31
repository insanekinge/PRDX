$(document).ready(function() {
  $('.basket__list-item_description-size_item_select').click(function() {
    $(this).siblings('.basket__list-item_description-size_item').toggle();
    $('.toggle-icon').toggleClass('rotate');
  });

  $('.basket__list-item_description-size_item_option').click(function() {
    var selectedOption = $(this).text();
    $('.basket__list-item_description-size_item_select').text(selectedOption);
    $(this).parent('.basket__list-item_description-size_item').hide();
    $('.toggle-icon').removeClass('rotate');
  });

  $(document).on('click', function(event) {
    if (!$(event.target).closest('.basket__list-item_description-size').length) {
      $('.basket__list-item_description-size_item').hide();
      $('.toggle-icon').removeClass('rotate');
    }
  });
});