var getData_area = document.getElementById('buttons')
var btns = getData_area.querySelectorAll('button');
var comments = document.getElementById('comments')
var divs = comments.querySelectorAll('div');
var arr = ['page1', 'page2', 'page3', 'page4']
function task(val) {
    for (btn of btns) {
        btn.style.width = "15px";
        btn.style.backgroundColor = '#e0e0e0'
    }
    console.log(val);
    var ele = document.getElementById(val);
    ele.style.width = "35px"
    ele.style.backgroundColor = '#48CAB2';
    ele.style.transition = `width 0.4s`;
    var class_name = ele.className;
    var page = document.getElementById(class_name);
    page.style.display = `flex`;
    page.style.transition = `flex 1s`;
    for (i = 0; i < divs.length; i++) {
        if ((divs[i].id == 'page1' || divs[i].id == 'page2' || divs[i].id == 'page3' || divs[i].id == 'page4') && divs[i].id != ele.className) {
            divs[i].style.display = 'none'
        }
    }
}
var arr = ['two', 'three', 'four', 'one',]
var count = 0;
setInterval(function () {
    task(arr[count % 4])
    console.log('calling')
    count++;
}, 5000)