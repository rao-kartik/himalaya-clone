var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var btn1=document.getElementById('btn1')
var btn2=document.getElementById('btn2')
var btn3=document.getElementById('btn3')
var btn4=document.getElementById('btn4')
var btn5=document.getElementById('btn5')

function fun1()
{
  document.getElementById('span_init').innerHTML=13.95
  document.getElementById('span_1').innerHTML=30
}

function fun2()
{
document.getElementById('span_init').innerHTML=21.95
document.getElementById('span_1').innerHTML=60
}

function fun3()
{
document.getElementById('span_init').innerHTML=29.95
document.getElementById('span_1').innerHTML=90
}

var i=0
function fun4()
{
i--
if(i>=0){
document.getElementById('span_2').innerHTML=i
}
}

function fun5()
{
i++
document.getElementById('span_2').innerHTML=i
}

var btn6=document.getElementById('btn6')

function card_add()
{
  var popup=document.getElementById('popup_container')
  popup.style.display='block'
  document.body.style.backgroundColor="#EBEBFD"
  document.getElementById('ch1').style.backgroundColor="#EBEBFD"
  event.stopPropagation();
}

document.body.addEventListener('click',function(e){
  var popup=document.getElementById('popup_container')
  popup.style.display='none'
  document.body.style.backgroundColor="white"
  
})

btn1.addEventListener('click',fun1)
btn2.addEventListener('click',fun2)
btn3.addEventListener('click',fun3)
btn4.addEventListener('click',fun4)
btn5.addEventListener('click',fun5)
btn6.addEventListener('click',card_add)