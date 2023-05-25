
(function ($) {

  "use strict";

  // NAVBAR
  $('.navbar-nav .nav-link').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

})(window.jQuery);

function requestHandler() {
  alert("Request submitted successfully.");
}