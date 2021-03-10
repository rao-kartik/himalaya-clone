 var btn1=document.getElementById('btn1')
 var arr=[]
 function fun1()
 {
 
    var input1=document.getElementById('input1') .value
    var input2=document.getElementById('input2') .value
    var input3=document.getElementById('input3') .value
    var input4=document.getElementById('input4') .value
     var obj={
         Name:input1,
         Email:input2,
         Phone:input3,
         Feedback:input4
     }
     obj=JSON.stringify(obj)
     arr.push(obj)
     var data=localStorage.setItem('info1',arr)
 }
 btn1.addEventListener('click',fun1)