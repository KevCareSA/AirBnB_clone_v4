/**
 * A JavaScript script (static/scripts/1-hbnb.js):
 *  executed only when DOM is loaded
 *
 * Author: Bradley Dillion Gilden And Lebohang KevCare Mokobane
 * Date: 04-11-2023
 */

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
