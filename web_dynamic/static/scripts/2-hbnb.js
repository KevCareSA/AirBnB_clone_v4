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

  $.getJSON('http://127.0.0.1:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
