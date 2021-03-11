var products = document.getElementById("inside_product");
var first_li = document.getElementById("health_interest");
var wrapped_bag = document.getElementsByClassName("wrapped_bag");
var lis = products.querySelectorAll("li");
var open = true;

function inside_product_fn() {
  if (open == true) {
    for (li of lis) {
      li.style.display = "block";
    }
    open = false;
  } else {
    for (i = 1; i < lis.length; i++) {
      lis[i].style.display = "none";
      open = true;
    }
  }
}

var open3 = true;
var first_li3 = document.getElementById("oral_care");
var product3 = document.getElementById("inside_product_3");
var lis3 = product3.querySelectorAll("li");
function inside_product_fn3() {
  if (open3 == true) {
    for (li of lis3) {
      li.style.display = "block";
    }
    open3 = false;
  } else {
    for (i = 1; i < lis3.length; i++) {
      lis3[i].style.display = "none";
      open3 = true;
    }
  }
}

var open2 = true;
var first_li2 = document.getElementById("herbal_supplements");
var product2 = document.getElementById("inside_product_2");
var lis2 = product2.querySelectorAll("li");
function inside_product_fn2() {
  if (open2 == true) {
    for (li of lis2) {
      li.style.display = "block";
    }
    open2 = false;
  } else {
    for (i = 1; i < lis2.length; i++) {
      lis2[i].style.display = "none";
      open2 = true;
    }
  }
}

var open4 = true;
var first_li4 = document.getElementById("personal_care");
var product4 = document.getElementById("inside_product_4");
var lis4 = product4.querySelectorAll("li");
function inside_product_fn4() {
  if (open4 == true) {
    for (li of lis4) {
      li.style.display = "block";
    }
    open4 = false;
  } else {
    for (i = 1; i < lis4.length; i++) {
      lis4[i].style.display = "none";
      open4 = true;
    }
  }
}

first_li.addEventListener("click", inside_product_fn);
first_li2.addEventListener("click", inside_product_fn2);
first_li3.addEventListener("click", inside_product_fn3);
first_li4.addEventListener("click", inside_product_fn4);
var temp;
function wrapped_bag_hide() {
  console.log(this.id);
  var hovered = this.id;
  var para = document.getElementById(`price${hovered}`);
  temp = para.textContent;
  para.style.display = "block";
  para.textContent = "ADD TO CART";
  para.setAttribute("class", "zindex");
}

function wrapped_bag_show() {
  console.log(this.id);
  var hovered = this.id;
  var para = document.getElementById(`price${hovered}`);
  var para = document.getElementById(`price${hovered}`);
  para.textContent = temp;
  para.setAttribute("class", "price");
  para.style.display = "block";
}

for (i = 0; i < wrapped_bag.length; i++) {
  wrapped_bag[i].addEventListener("mouseover", wrapped_bag_hide);
}

for (i = 0; i < wrapped_bag.length; i++) {
  wrapped_bag[i].addEventListener("mouseout", wrapped_bag_show);
}

var showmore_btn = document.getElementById("showmore");
var hidden_products = document.getElementById("hidden-blocks");
var recreate_btn = document.getElementById("recreate_btn");
function makeMeVisible() {
  hidden_products.style.display = "block";
  hidden_products.style.marginTop = "30vh";
  hidden_products.style.marginBottom = "45vh";
  document.getElementById("showmore").remove();
  createBtn();
}
function createBtn() {
  var btn = document.createElement("button");
  btn.textContent = "Show more";
  btn.setAttribute("class", "showmore");
  btn.style.marginLeft = "40%";
  btn.style.marginTop = "10%";
  recreate_btn.appendChild(btn);
}
showmore_btn.addEventListener("click", makeMeVisible);
