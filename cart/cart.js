let shoppingBtn = document.getElementById("shoppingBtn");
shoppingBtn.addEventListener("click", ()=>{
    location.href = `../Landing Page/landingPage.html`
})


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