if ('swal' in window) {
  window.alert = function(s) {
    swal({
      title: "Jack Store",
      text: s,
      timer: 1000,
      showConfirmButton: false
    });
  }
}

(function($) {
  
  $('.product-form').on('submit', function(e) {
    e.preventDefault();
  });
  $('.buy-button').on('click', function(e) {
    e.preventDefault();
    var form = $(e.target).closest('form').get(0);
    Shopify.addItem(form.id.value, 1);
    location = '/cart';
  });
  $('.add-button').on('click', function(e) {
    e.preventDefault();
    var form = $(e.target).closest('form').get(0);
    Shopify.addItem(form.id.value, 1);
    $('.cart-count').each(function(i, node) {
      var c = parseInt(node.innerHTML, 10);
      node.innerHTML = c + 1;
    });
  });

})(jQuery);
