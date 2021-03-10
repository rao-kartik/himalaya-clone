let formRegister = document.getElementById("registerForm");
formRegister.addEventListener("submit", registerUser);

let btn = document.getElementById("button");
btn.addEventListener("mouseover", ()=>{
    btn.style.cursor = "pointer";
})

function userData(firstName, lastName, email, password) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password
}

function registerUser(e){
    e.preventDefault();

    let form = new FormData(event.target);

    let firstName = form.get("firstName");
    let lastName = form.get("lastName");
    let email = form.get("email");
    let password = form.get("password");

    let user = new userData (firstName, lastName, email, password)
    // console.log(user)

    user = JSON.stringify(user);

    localStorage.setItem("userData", user);

    let fName = document.getElementById("userFirstName");
    fName.value = null;

    let lName = document.getElementById("userLastName");
    lName.value = null;

    let emailId = document.getElementById("userEmail");
    emailId.value = null;

    let pass = document.getElementById("userPassword");
    pass.value = null;
}

let returnUnderline = document.getElementById("returnUnderLine");
returnUnderline.addEventListener("mouseover",()=>{
    let underline = document.getElementById("underLine");
    // console.log(underline)
    underline.style.display = "block"
    underline.setAttribute("id","uline")
})

returnUnderline.addEventListener("mouseleave",()=>{
    let underline = document.getElementById("underLine");
    uline.style.display = "none"
    uline.setAttribute("id","underLine")
})