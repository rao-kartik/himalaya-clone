var temp;
var cart_bag = document.getElementsByClassName("cart_bag");
function cart_bag_hide() {
  var hovered = this.id;
  var para = document.getElementById(`price${hovered}`);
  temp = para.textContent;
  para.style.display = "block";
  para.textContent = "ADD TO CART";
  para.style.fontSize = "14px";
  para.style.fontFamily = "Poppins";
  para.setAttribute("class", "zindex");
}

function cart_bag_show() {
  console.log(this.id);
  var hovered = this.id;
  var para = document.getElementById(`price${hovered}`);
  var para = document.getElementById(`price${hovered}`);
  para.textContent = temp;
  para.setAttribute("class", "cart-price");
  para.style.display = "block";
}

for (i = 0; i < cart_bag.length; i++) {
  cart_bag[i].addEventListener("mouseover", cart_bag_hide);
}

for (i = 0; i < cart_bag.length; i++) {
  cart_bag[i].addEventListener("mouseout", cart_bag_show);
}
