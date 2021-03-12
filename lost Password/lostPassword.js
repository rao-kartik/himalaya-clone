var reset = document.getElementById("resetForm");
reset.addEventListener("submit", resetPass);

function resetPass(e) {
    e.preventDefault();
    let errorMsg = document.getElementById("errorMsg");
    errorMsg.innerHTML = null;

    let resetForm = new FormData(event.target);
    
    let email = resetForm.get("email");
    // console.log(email)

    var data = localStorage.getItem("userData");
    data = JSON.parse(data);
    // console.log(data)

    var flag = false;
    var uPass;

    if (data == null){
        errorMsg.innerHTML = "<ul><li>No account found with that email.</li></ul>";
    }

    for (let i = 0; i < data.length; i++){
        if(data[i].email == email){
            flag = true;
            uPass = data[i].password;;
            // console.log(uPass)
            break
        }
    }
    
    if (flag == true){
        errorMsg.innerHTML = `<ul><li>Your password is <span>"${uPass}"</span></li></ul>`;
        errorMsg.style.color = "black"
        let errSpan = document.querySelector("#errorMsg span");
        errSpan.style.color = "blue";
    }
    else {
        errorMsg.innerHTML = "<ul><li>No account found with that email.</li></ul>";
    }
}

let cancel = document.getElementById("cancel");
cancel.addEventListener("mouseover",()=>{
    let underline = document.getElementById("underLine");
    // console.log(underline)
    underline.style.display = "block"
    underline.setAttribute("id","uline")
})

cancel.addEventListener("mouseleave",()=>{
    let underline = document.getElementById("underLine");
    uline.style.display = "none"
    uline.setAttribute("id","underLine")
})