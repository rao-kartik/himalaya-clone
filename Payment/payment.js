var user_data = localStorage.getItem("data");
var user_data = JSON.parse(user_data);
var assign_email = document.getElementById("assign_email");
assign_email.textContent = user_data.email;
var add = document.getElementById("add");
add.textContent = user_data.adr + ", " + user_data.city + ", " + user_data.zip;
var finalstep = document.getElementById("finalstep-btn");

function paymentDone() {
  var inputs = document.querySelectorAll("input");
  for (input of inputs) {
    input.style.borderColor = "rgb(202, 202, 202)";
  }
  warn.textContent = "";
  var cvv = document.getElementById("cvv");
  var card = document.getElementById("card");
  var name = document.getElementById("name");
  if (
    card.value == "123412341234" &&
    name.value == "Masai School" &&
    date.value == "03/23" &&
    cvv.value == "123"
  ) {
    orderPlaced();
  } else {
    orderFailed();
  }
}

function orderFailed() {
  var warn = document.getElementById("warn");
  warn.textContent = "The Card details are invalid";
  var inputs = document.querySelectorAll("input");
  for (input of inputs) {
    input.style.borderColor = "red";
  }
}

function orderPlaced() {
  var process_animation = document.getElementById("process_animation");
  var btn = document.getElementById("finalstep-btn");
  process_animation.setAttribute("class", "lds-roller");
  btn.style.color = "white";
  setTimeout(function () {
    process_animation.removeAttribute("class");
    var popup = document.getElementById("popup");
    var page = document.getElementById("order_info");
    page.style.opacity = "10%";
    popup.setAttribute("class", "popup");
    tick_animate();
  }, 3000);
}

finalstep.addEventListener("click", paymentDone);
