window.addEventListener("load", ()=>{
    let data = localStorage.getItem("userData")
    // console.log(data)

    data = JSON.parse(data)

    if (data != null){
        arr = data;
    }
    else {
        arr = [];
    }
    console.log(arr)
})

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

var arr;

function registerUser(e){
    e.preventDefault();

    let form = new FormData(event.target);

    let firstName = form.get("firstName");
    let lastName = form.get("lastName");
    let email = form.get("email");
    let password = form.get("password");

    let userName = `${firstName} ${lastName}`;

    let usrData = localStorage.getItem("userData");
    usrData = JSON.parse(usrData);
    // console.log(usrData)
    
    let errMsg = document.getElementById("errMsg");

    var flag =false;
    for(var i = 0; i < usrData.length; i++){
        if (firstName == usrData[i].firstName && lastName == usrData[i].lastName && email == usrData[i].email){
            flag = true;
            break;
        }
    }
    if (flag == true){
        errMsg.innerHTML = `This email address is already associated with an account. If this account is yours, you can <span>reset your password</span></li></ul>`
    
        var rstPass = document.querySelector("#errMsg span");
        rstPass.style.color = "#777777";
        rstPass.style.cursor = "pointer";
        rstPass.addEventListener("click", ()=>{
            location.href = `../lost Password/lostPassword.html`
        })
    }
    else {
        var url = `../account/account.html?name=${userName}&&e-mail=${email}`
        location.href = url;

        let user = new userData (firstName, lastName, email, password)
        // console.log(user)
        arr.push(user);
        console.log(arr)

        arr = JSON.stringify(arr);

        localStorage.setItem("userData", arr);
    }
    

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