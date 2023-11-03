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
});
