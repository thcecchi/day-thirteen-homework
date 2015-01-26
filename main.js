var productPage =
{

    init: function () {
      productPage.initStyle();
      productPage.initEvents();
    },

    initStyle: function () {
      productPage.addAllProducts(productInfo);
    },

    initEvents: function () {

    },

    addProduct: function (productBox, index, array) {
      var compiled = _.template(templates.productBox);
      $('section').append(compiled(productBox));
    },

    addAllProducts: function (productData) {
      productData.forEach(productPage.addProduct);
    }


};

$(document).ready(function() {
  productPage.init();
});
