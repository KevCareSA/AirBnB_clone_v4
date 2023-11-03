$(document).ready(() => {
  const amenityId = {};
  $('li input[type=checkbox]').change(function () {
    if (this.checked) {
      amenityId[this.dataset.name] = this.dataset.id;
    } else {
      delete amenityId[this.dataset.name];
    }
    $('.amenities h4').text(Object.keys(amenityId).sort().join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('div#status_api').addClass('available');
    } else {
      $('div#status_api').removeClass('available');
    }
  });
});
