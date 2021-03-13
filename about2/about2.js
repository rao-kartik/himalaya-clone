let story=document.getElementById("story");
let root=document.getElementById("roots");
let process=document.getElementById("process");
let science=document.getElementById("science");
let initiative=document.getElementById("initiatives");
function change()
{
   let id=event.target.id
   if(id=="rootsbtn")
   {
     console.log("hi");
     rootsbtn.setAttribute("class","backdisplay");
    storybtn.removeAttribute("class");
    processbtn.removeAttribute("class");
    sciencebtn.removeAttribute("class");
    initiativesbtn.removeAttribute("class");


     root.removeAttribute("class");
     story.setAttribute("class","display");
    process.setAttribute("class","display");
     science.setAttribute("class","display");
     initiative.setAttribute("class","display");
   }
   else if(id=="storybtn")
   {
     storybtn.setAttribute("class","backdisplay");
     rootsbtn.removeAttribute("class");
     processbtn.removeAttribute("class");
     sciencebtn.removeAttribute("class");
     initiativesbtn.removeAttribute("class");

     console.log("hello")
    story.removeAttribute("class");
    root.setAttribute("class","display");
    process.setAttribute("class","display");
    science.setAttribute("class","display");
    initiative.setAttribute("class","display");

   }
   else if(id=="processbtn")
   {
     processbtn.setAttribute("class","backdisplay");
     sciencebtn.removeAttribute("class");
     initiativesbtn.removeAttribute("class");
     storybtn.removeAttribute("class");
     rootsbtn.removeAttribute("class");
     


     rootsbtn.removeAttribute("class");
     process.removeAttribute("class");
     story.setAttribute("class","display");
     science.setAttribute("class","display");
     initiative.setAttribute("class","display");
     root.setAttribute("class","display");
   }
   else if(id=="sciencebtn")
   {
     sciencebtn.setAttribute("class","backdisplay");
     initiativesbtn.removeAttribute("class");
     storybtn.removeAttribute("class");
     rootsbtn.removeAttribute("class");
     processbtn.removeAttribute("class");


     science.removeAttribute("class");
     story.setAttribute("class","display");
     initiative.setAttribute("class","display");
     root.setAttribute("class","display");
     process.setAttribute("class","display");


   }
   else if(id=="initiativesbtn")
   {
      initiativesbtn.setAttribute("class","backdisplay");
      storybtn.removeAttribute("class");
      rootsbtn.removeAttribute("class");
      processbtn.removeAttribute("class");
      sciencebtn.removeAttribute("class");
 

     initiative.removeAttribute("class");
     story.setAttribute("class","display");
     science.setAttribute("class","display");
     root.setAttribute("class","display");
     process.setAttribute("class","display");

   }
}
document.getElementById("rootsbtn").addEventListener('click',change);
document.getElementById("storybtn").addEventListener('click',change);
document.getElementById("processbtn").addEventListener('click',change);
document.getElementById("sciencebtn").addEventListener('click',change);
document.getElementById("initiativesbtn").addEventListener('click',change);
let rootsbtn=document.getElementById("rootsbtn");
let storybtn=document.getElementById("storybtn");
let processbtn=document.getElementById("processbtn");
let sciencebtn=document.getElementById("sciencebtn");
let initiativesbtn=document.getElementById("initiativesbtn");