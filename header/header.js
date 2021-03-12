var search = document.getElementById("search");
search.addEventListener("click", searchBox);

var search = document.getElementById("searchBox");
function searchBox(){
    search.style.display = "block";
    cartDropdown.style.visibility = "hidden";
    userDropdown.style.visibility = "hidden";
}

// close search
var clsearch = document.getElementById("clSearch");
clsearch.addEventListener("click", closeSearch);

function closeSearch(){
    search.style.display = "none";
}

// search

var searchD = document.getElementById("searchData");
// console.log(searchD)
searchD.addEventListener("click", searchData);

function searchData(){
    var input = document.getElementById("searchInput").value;
    console.log(input)

    let url = `https://himalayausa.com/search?type=product&q=${input}`;
    location.href = url;

    input.value = null;
}

//  On Mouse Over shop, about & store

let shop = document.getElementById("shop");
let navDropdown = document.getElementById("navDropdown");


shop.addEventListener("mouseover", ()=>{
    navDropdown.style.visibility = "visible";
    shop.style.cursor = "pointer"
})

navDropdown.addEventListener("mouseleave", ()=>{
    navDropdown.style.visibility = "hidden";
})

// userData

let user = document.getElementById("user");
user.addEventListener("click", userOptions);

let userDropdown = document.getElementById("userDropdown")

function userOptions() {
    userDropdown.style.visibility = "visible";
    cartDropdown.style.visibility = "hidden";
}

userDropdown.addEventListener("mouseleave", ()=>{
    userDropdown.style.visibility = "hidden";
})

// navLine

var pEle = document.getElementsByClassName("navP");

let shopDiv = document.querySelector("#shopDiv > div")
let aboutDiv = document.querySelector("#aboutDiv > div")
let storeDiv = document.querySelector("#storeDiv > div")

pEle[0].addEventListener("mouseover", ()=>{
    shopDiv.style.display = "block";
    shopDiv.setAttribute("class","navLineHov");
})

pEle[0].addEventListener("mouseleave", ()=>{
    shopDiv.style.display = "none";
    shopDiv.setAttribute("class","navLine");
})

pEle[1].addEventListener("mouseover", ()=>{
    aboutDiv.style.display = "block";
    aboutDiv.setAttribute("class","navLineHov");
    navDropdown.style.visibility = "hidden";
})

pEle[1].addEventListener("mouseleave", ()=>{
    aboutDiv.style.display = "none";
    aboutDiv.setAttribute("class","navLine");
})

pEle[2].addEventListener("mouseover", ()=>{
    storeDiv.style.display = "block";
    storeDiv.setAttribute("class","navLineHov");
    navDropdown.style.visibility = "hidden";
})

pEle[2].addEventListener("mouseleave", ()=>{
    storeDiv.style.display = "none";
    storeDiv.setAttribute("class","navLine");
})

// cart

let cartItem = document.getElementById("cartItem");
let cartDropdown = document.getElementById("cartDropdown");

cartItem.addEventListener("click", ()=>{
    cartDropdown.style.visibility = "visible";
    userDropdown.style.visibility = "hidden";
})

cartDropdown.addEventListener("mouseleave", ()=>{
    cartDropdown.style.visibility = "hidden";
})