const slide = document.getElementById("bestid");
let slides = document.querySelectorAll(".imageSlide")
console.log(slides)

const nextBtn = document.getElementById("rightArrow");
const prevBtn = document.getElementById("leftArrow");

nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

let counter = 1;

function showNextImage() {
    slide.scrollLeft = "250px";
}

function showPrevImage() {
    slide.scroll = "-250px 0";
}

// var num=event.target.value;
// console.log(num);
// num=Number(num);
// // document.getElementById('bestid').scrollLeft=0;
// //document.getElementById('bestid').scrollLeft += num*20;
// if(num==1)
// {
//     document.getElementById('bestid').scrollLeft=0;
// }
// else if(num==2)
// {
//     document.getElementById('bestid').scrollLeft=0;
    
//     document.getElementById('bestid').scrollLeft+=num*50;
// }
// else if(num==3)
// {
//     document.getElementById('bestid').scrollLeft+=num*30;
// }
// else if(num==8)
// {
//     document.getElementById('bestid').scrollLeft+=num*100;
// }

function wrapped_bag_hide() {
    console.log(this.id);
    var hovered = this.id;
    var para = document.getElementById(`price${hovered}`);
    temp = para.textContent;
    para.style.display = "block";
    para.textContent = "ADD TO CART";
    para.setAttribute("class", "zindex");
}

function wrapped_bag_show() {
    console.log(this.id);
    var hovered = this.id;
    var para = document.getElementById(`price${hovered}`);
    var para = document.getElementById(`price${hovered}`);
    para.textContent = temp;
    para.setAttribute("class", "price");
    para.style.display = "block";
}

for (i = 0; i < wrapped_bag.length; i++) {
    wrapped_bag[i].addEventListener("mouseover", wrapped_bag_hide);
}

for (i = 0; i < wrapped_bag.length; i++) {
    wrapped_bag[i].addEventListener("mouseout", wrapped_bag_show);
}