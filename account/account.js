var query = window.location.search;

var url = new URLSearchParams(query);

let uName = url.get("name");
var eMail = url.get("e-mail");

let personName = document.getElementById("personName");
personName.innerHTML = uName;

let personEmail = document.getElementById("personEmail");
personEmail.innerHTML = eMail;