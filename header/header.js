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
    cartDropdown.style.height = "150px";
    cartDropdown.style.display = "flex";
    cartDropdown.style.justifyContent = "center";
    cartDropdown.style.alignItems = "Center";
}) 

function cartDropdeownContent(){
    let itemData = localStorage.getItem("itemData");
    let noProduct = document.querySelector("#cartDropdown > a");
    // console.log(noProduct)

    if (itemData === null){
        noProduct.style.display = "block";
    }
    
    else {
        noProduct.style.display = "none";
        
        itemData = JSON.parse(itemData);
        console.log(itemData)

        let image = itemData.image;
        let iName = itemData.name;
        let caplets = itemData.caplets;
        let quantity = itemData.quantity;
        let price = itemData.price;

        let cartHead = document.createElement("h6");
        cartHead.setAttribute("id", "cartHead");
        cartHead.innerHTML = "Shopping Cart";
        cartDropdown.append(cartHead)

        let img = document.createElement("img");
        img.setAttribute("src", image);

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("id", "imgDiv");

        imgDiv.append(img);

        let contentDiv = document.createElement("div");
        contentDiv.setAttribute("id", "contentDiv");

        let itemName = document.createElement("h2");
        itemName.innerHTML = iName;

        let caplet = document.createElement("p");
        caplet.innerHTML = `${caplets} Caplets`;

        let quant = document.createElement("p");
        quant.innerHTML = quantity;

        contentDiv.append(itemName);
        contentDiv.append(caplet);
        contentDiv.append(quant);

        let binDiv = document.createElement("div");
        let bin = document.createElement("i");
        bin.setAttribute("class","fi-rr-trash");
        bin.addEventListener("click", ()=>{
            localStorage.removeItem("itemData");
        })

        binDiv.append(bin);

        let dataDiv = document.createElement("div");
        dataDiv.append(imgDiv);
        dataDiv.append(contentDiv);
        dataDiv.append(binDiv);

        dataDiv.setAttribute("id", "dataDiv");

        let total = document.createElement("p");
        total.setAttribute("id", "total");
        total.innerHTML = `Total: $${price}`;

        let proceedBtn = document.createElement("button");
        proceedBtn.setAttribute("id", "proceedBtn");
        proceedBtn.innerHTML = "PROCEED TO CHECKOUT"

        let viewCart = document.createElement("p");
        viewCart.setAttribute("id", "viewCart");
        viewCart.innerHTML = "View Cart"
        viewCart.addEventListener("click",()=>{
            location.href = "../cart/cart.html"
        })

        cartDropdown.append(dataDiv);
        cartDropdown.append(total);
        cartDropdown.append(proceedBtn);
        cartDropdown.append(viewCart);
    }
}

cartDropdeownContent()