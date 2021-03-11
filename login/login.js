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
    
    for (let i = 0; i < data.length; i++){
        if(data[i].email == email && data[i].password == password){
            location.href = `../account/account.html?f-name=${data[i].firstName}&l-name=${data[i].lastName}&&e-mail=${data[i].email}`
            break;
        }
        else {
            errorMsg.innerHTML = "<ul><li>Incorrect email or password.</li></ul>"
            break;
        }
    }
}
