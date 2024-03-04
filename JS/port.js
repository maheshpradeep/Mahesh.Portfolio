var $galleryContainer = $('.gallery').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});

$('.button-group .button').on('click', function(){
  // Remove the 'active' class from all buttons
  $('.button-group .button').removeClass('active');
  // Add the 'active' class to the clicked button
  $(this).addClass('active');

  // Get the filter value from the data attribute of the clicked button
  var value = $(this).attr('data-filter');
  // Apply the filter to the gallery container
  $galleryContainer.isotope({
      filter: value 
  });
});
