var query = window.location.search;

var url = new URLSearchParams(query);

let fName = url.get("f-name");
let lName = url.get("l-name");
var eMail = url.get("e-mail");

let personName = document.getElementById("personName");
personName.innerHTML = `${fName} ${lName}`;

let personEmail = document.getElementById("personEmail");
personEmail.innerHTML = eMail;