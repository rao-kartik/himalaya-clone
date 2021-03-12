var coll = document.getElementsByClassName("collapsible");
var parent = document.querySelector("body");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

function fun1() {
  document.getElementById("span_init").innerHTML = "$" + 13.95;
  document.getElementById("span_1").innerHTML = `30 `;
  btn1.style.border = "1px solid #333333";
  btn2.style.border = "1px solid rgb(231, 231, 231)";
  btn3.style.border = "1px solid rgb(231, 231, 231)";
}

function fun2() {
  document.getElementById("span_init").innerHTML = "$" + 21.95;
  document.getElementById("span_1").innerHTML = `60 `;
  btn1.style.border = "1px solid rgb(231, 231, 231)";
  btn2.style.border = "1px solid #333333";
  btn3.style.border = "1px solid rgb(231, 231, 231)";
}

function fun3() {
  document.getElementById("span_init").innerHTML = "$" + 29.95;
  document.getElementById("span_1").innerHTML = `90 `;
  btn1.style.border = "1px solid rgb(231, 231, 231)";
  btn2.style.border = "1px solid rgb(231, 231, 231)";
  btn3.style.border = "1px solid #333333";
}

var k = 1;
function fun4() {
  if (k > 1) {
    k--;
    document.getElementById("span_2").innerHTML = k;
  }
}

function fun5() {
  k++;
  document.getElementById("span_2").innerHTML = k;
}

var btn6 = document.getElementById("btn6");

function card_add() {
  var popup = document.getElementById("popup_container");
  popup.style.display = "block";
  var hides = document.getElementsByClassName("hides");
  for (i = 0; i < hides.length; i++) {
    hides[i].style.opacity = "10%";
  }
  document.getElementById("ch1").style.backgroundColor = "#EBEBFD";
  event.stopPropagation();
}

document.body.addEventListener("click", function (e) {
  var popup = document.getElementById("popup_container");
  popup.style.display = "none";
  document.body.style.backgroundColor = "white";
});

function fullOpacity() {
  var hides = document.getElementsByClassName("hides");
  for (i = 0; i < hides.length; i++) {
    hides[i].style.opacity = "100%";
  }
}
btn1.addEventListener("click", fun1);
btn2.addEventListener("click", fun2);
btn3.addEventListener("click", fun3);
btn4.addEventListener("click", fun4);
btn5.addEventListener("click", fun5);
btn6.addEventListener("click", card_add);
parent.addEventListener("click", fullOpacity);


// Page linking

let viewCart = document.getElementById("viewCart");
viewCart.addEventListener("click", ()=>{
  location.href = "../cart/cart.html"
})

btn6.addEventListener("click", ()=>{
  let organicAshw = document.getElementById("organicAshw").textContent;
  organicAshw = organicAshw.split(" ");
  // console.log(organicAshw)
  let price = organicAshw[2];
  organicAshw = organicAshw[0]+ " " + organicAshw[1];
  
  let caplet;
  if(price == "$13.95"){
    caplet = btn1.value;
  }
  else if (price == "$21.95"){
    caplet = btn2.value
  }
  else if(price == "$29.95"){
    caplet = btn3.value
  }
  
  var quantity = document.getElementById("span_2").textContent;
  
  let caplets = document.getElementById("caplets");
  caplets.innerHTML = caplet;

  let totQuan = `${quantity} x ${price}`

  let totalItem = document.getElementById("totalItem");
  totalItem.innerHTML = totQuan;

  price = price.slice(1, 6)

  let total = quantity * price;
  total = total.toFixed(2);

  let totalPrice = document.getElementById("totalPrice");
  totalPrice.textContent = `Total: $${total}`;

  var imag = document.getElementById("row1_1").innerHTML;

  let itemData = {
    image : imag,
    name : organicAshw,
    caplets: caplet,
    quantity: totQuan,
    price: total
  }

  itemData = JSON.stringify(itemData);

  localStorage.setItem("itemData", itemData);
})