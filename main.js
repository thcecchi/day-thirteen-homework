var productPage =

{
    init: function () {
      productPage.initStyle();
      productPage.initEvents();
    },

    initStyle: function () {
      productPage.addAllProducts(products);
    },

    initEvents: function () {
      $('section').on('click', '.deleteProduct', productPage.deleteProduct);

      $('.formContainer form').on('submit', function (event) {
        event.preventDefault();
        productPage.createProduct();
      });

      $('p').on('dblclick', this, productPage.updateProduct);

      $('section').on('click', '.updateProduct', productPage.addUpdateProduct);
    },

    addProduct: function (productBox, index, array) {
      productBox.idx = index;

      var compiled = _.template(templates.productBox);
      $('section').append(compiled(productBox));
    },

    addAllProducts: function (productData) {
      productData.forEach(productPage.addProduct);
    },

    createProduct: function () {
      var newProduct = {
        name: $('.formContainer input[name="productName"]').val(),
        img: $('.formContainer input[name="productImage"]').val(),
        description: $('.formContainer textarea[name="productDescription"]').val() ,
        price: $('.formContainer input[name="productPrice"]').val()
      };

      products.push(newProduct);

      productPage.addProduct(newProduct, products.indexOf(newProduct));

      $('.formContainer input').val('');
      $('.formContainer textarea').val('');
    },

    updateProduct: function () {

      $(this).replaceWith('<input type="text" class="' + $(this).attr("class") + '" name="newValue" placeholder="What do you want to change?">');
      //
    },

    addUpdateProduct: function () {

      var newValue = $('.product input[name="newValue"]').val();
      console.log(newValue);
      //
      var newKey = $('input').attr('class');
      console.log(newKey);
      //
      var productIndex = $(this).closest('.product').data('index');
      console.log(productIndex);
      //
      updatedObj = {};
      //
      updatedObj[newKey] = newValue;
      //
      $.extend(true, products[productIndex], updatedObj);
      //
      console.log(products[productIndex]);
      //
      $(".product input").replaceWith($(this).closest('p').text(newValue));
    },


    deleteProduct: function () {
      var productIndex = $(this).closest('.product').data('index');

      console.log(productIndex);
      products.splice(productIndex, 1);

      $(this).closest('.product').remove();
    }

};

$(document).ready(function() {
  productPage.init();
});
