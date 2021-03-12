var query = window.location.search;

var url = new URLSearchParams(query);

let uName = url.get("name");
console.log(uName)
var eMail = url.get("e-mail");
console.log(eMail)

let personName = document.getElementById("personName");
personName.innerHTML = uName;

let personEmail = document.getElementById("personEmail");
personEmail.innerHTML = eMail;