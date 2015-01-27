var templates = {};

templates.productBox = [
  "<div data-index='<%= idx %>' class='product'>",
  "<h3 class='name'><%= name %></h3>",
  "<img class='image' src='<%= img %>'></img>",
  "<p class='description'><%= description %></p>",
  "<p class='price'><%= price %></p>",
  "<p><button class='deleteProduct'>Delete Product</button></p>",
  "<button class='updateProduct'>Update Product</button>",
  "</div>"
].join("");
