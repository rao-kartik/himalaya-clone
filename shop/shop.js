var products = document.getElementById('inside_product');
var first_li = document.getElementById('health_interest');
var wrapped_bag = document.getElementsByClassName('wrapped_bag');
var lis = products.querySelectorAll('li');
var open = true;

function inside_product_fn() {
    if (open == true) {
        for (li of lis) {
            li.style.display = 'block';
        }
        open = false;
    } else {
        for (i = 1; i < lis.length; i++) {
            lis[i].style.display = 'none';
            open = true;
        }
    }
}

var open2 = true;
var first_li2 = document.getElementById('herbal_supplements')
var product2 = document.getElementById('inside_product_2');
var lis2 = product2.querySelectorAll('li');
function inside_product_fn2() {
    if (open2 == true) {
        for (li of lis2) {
            li.style.display = 'block';
        }
        open2 = false;
    } else {
        for (i = 1; i < lis2.length; i++) {
            lis2[i].style.display = 'none';
            open2 = true;
        }
    }
}
first_li.addEventListener('click', inside_product_fn)
first_li2.addEventListener('click', inside_product_fn2)
function wrapped_bag_hide() {
    console.log(this.id)
    var hovered = this.id;
    var para = document.getElementById(`price${hovered}`)
    para.style.display = 'none';
}

function wrapped_bag_show() {
    console.log(this.id)
    var hovered = this.id;
    var para = document.getElementById(`price${hovered}`)
    para.style.display = 'block';
}

for (i = 0; i < wrapped_bag.length; i++) {
    wrapped_bag[i].addEventListener('mouseover', wrapped_bag_hide)
}

for (i = 0; i < wrapped_bag.length; i++) {
    wrapped_bag[i].addEventListener('mouseout', wrapped_bag_show)

}