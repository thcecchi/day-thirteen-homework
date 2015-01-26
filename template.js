var templates = {};

templates.productBox = [
  "<div class='product'>",
  "<h3><%= name %></h3>",
  "<img src='<%= img %>'></img>",
  "<p><%= description %></p>",
  "</div>"
].join("");
