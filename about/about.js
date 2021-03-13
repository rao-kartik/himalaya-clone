function change()
{
    let st=document.getElementById("story");
    let rt=document.getElementById("roots");
    let proc=document.getElementById("process");
    let sci=document.getElementById("science");
    let ini=document.getElementById("initiatives");
    console.log(st,rt,proc,sci,ini)
    var id=event.target.id;
    if(id=="storybtn")
    {
       rt.visibility = "hidden";
       proc.visibility = "hidden";
       sci.visibility = "hidden";
       ini.visibility = "hidden"     
    }
    else if(id="rootsbtn")
    {
        st.visibility = "hidden";
        proc.visibility = "hidden";
        sci.visibility = "hidden";
        ini.visibility = "hidden"   
    }
    else if(id="processbtn")
    {
        rt.visibility = "hidden";
        st.visibility = "hidden";
        sci.visibility = "hidden";
        ini.visibility = "hidden"   
    }
    else if(id="sciencebtn")
    {
        rt.visibility = "hidden";
        proc.visibility = "hidden";
        st.visibility = "hidden";
        ini.visibility = "hidden"   
    }
    else if(id="initiativesbtn")
    {
        rt.visibility = "hidden";
        proc.visibility = "hidden";
        sci.visibility = "hidden";
        st.visibility = "hidden"   
    }
}