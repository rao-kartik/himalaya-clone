var pay = document.getElementById("pay-btn");

function paymentPage() {
  var email = document.getElementById("email");
  var add = document.getElementById("u_address");
  var city = document.getElementById("u_city");
  var zip = document.getElementById("zipcode");
  var obj = {
    email: email.value,
    adr: add.value,
    city: city.value,
    zip: zip.value,
  };
  localStorage.setItem("data", JSON.stringify(obj));
  location.assign("/payment.html");
}
