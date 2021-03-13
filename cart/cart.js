let shoppingBtn = document.getElementById("shoppingBtn");
shoppingBtn.addEventListener("click", ()=>{
    location.href = `../Landing Page/landingPage.html`
})

let itemDataS = localStorage.getItem("itemData");
// console.log(itemDataS)
let cart = document.getElementById("cart");
// console.log(cart)

let cartLogo = document.getElementById("cartLogo")
if (itemDataS === null){
    cartLogo.style.display = "block";
}

else {
    cartLogo.style.display = "none";
    
    itemDataS = JSON.parse(itemDataS);
    // console.log(itemDataS)

    let image = itemDataS.image;
    let iName = itemDataS.name;
    let caplets = itemDataS.caplets;
    let quantity = itemDataS.quantity;
    let price = itemDataS.price;
    
    let cartHead = document.createElement("h6");
    cartHead.setAttribute("id", "cartsHead");
    cartHead.innerHTML = "Shopping Cart";
    cart.append(cartHead)

    let img = document.createElement("img");
    img.setAttribute("src", image);
    
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "imgsDiv");
    
    imgDiv.append(img);

    let contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "contentsDiv");

    let itemName = document.createElement("h2");
    itemName.innerHTML = iName;
    
    let caplet = document.createElement("p");
    caplet.innerHTML = `Size: ${caplets} Caplets`;

    let nameCap = document.createElement("div");
    nameCap.setAttribute("id", "nameCap");
    nameCap.append(itemName);
    nameCap.append(caplet)
    
    let singlePrice = quantity.slice(4,10)
    // console.log(singlePrice)
    let priceItem = document.createElement("p");
    priceItem.innerHTML = singlePrice;
    
    let totQuantity = quantity.slice(0, 1)
    console.log(totQuantity)
    let quant = document.createElement("p");
    quant.innerHTML = totQuantity;

    contentDiv.append(nameCap);
    contentDiv.append(priceItem);
    contentDiv.append(quant);

    let binDiv = document.createElement("div");
    binDiv.setAttribute("id","binDiv");
    let bin = document.createElement("i");
    bin.setAttribute("class","fi-rr-trash");
    bin.addEventListener("click", ()=>{
        localStorage.removeItem("itemDataS");
    })

    binDiv.append(bin);
    
    let total = document.createElement("p");
    total.setAttribute("id", "totals");
    total.innerHTML = `Total: $${price}`;
    
    let dataDiv = document.createElement("div");
    dataDiv.append(binDiv);
    dataDiv.append(imgDiv);
    dataDiv.append(contentDiv);
    dataDiv.append(total);
    
    dataDiv.setAttribute("id", "datasDiv");
    
    let proceedBtn = document.createElement("button");
    proceedBtn.setAttribute("id", "proceedBtn");
    proceedBtn.innerHTML = "PROCEED TO CHECKOUT"

    let totBtnDiv = document.createElement("div");
    totBtnDiv.id = "totBtnDiv"
    totBtnDiv.append(total);
    totBtnDiv.append(proceedBtn);

    cart.append(dataDiv);
    cart.append(totBtnDiv);
}