var login = document.getElementById("loginForm");
login.addEventListener("submit", getLogin);

function getLogin(e) {
    e.preventDefault();
    let errorMsg = document.getElementById("errorMsg");
    errorMsg.innerHTML = null;

    let loginForm = new FormData(event.target);
    
    let email = loginForm.get("email");
    let password = loginForm.get("password");

    var data = localStorage.getItem("userData");
    data = JSON.parse(data);
    // console.log(data)
    var flag = false;
    var uEmail;
    var uName;
    
    if (data == null){
        errorMsg.innerHTML = "<ul><li>Incorrect email or password.</li></ul>";
    }
    
    for (let i = 0; i < data.length; i++){
        if(data[i].email == email && data[i].password == password){
            flag = true;
            uEmail = data[i].email;
            uName = `${data[i].firstName} ${data[i].lastName}`;
            break;
        }
    }
    if (flag == true){
        location.href = `../account/account.html?name=${uName}&&e-mail=${uEmail}`;
    }
    else {
        errorMsg.innerHTML = "<ul><li>Incorrect email or password.</li></ul>";
    }
}