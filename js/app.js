$(document).ready(() => {
  $('#mycarousel').carousel({
    interval: 2000
  });
  $('#carouselButton').click(() => {
    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#mycarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    } else {
      $('#mycarousel').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    }
  });

  // Toggle the reserveTable modal
  $('#bookAppointment').click((e) => {
    e.preventDefault();
    $('#appointmentTable').modal('toggle');
  });

  // Toggle the Login Modal
  $('#login').click((e) => {
    e.preventDefault();
    $('#loginModal').modal('toggle');
  });
});