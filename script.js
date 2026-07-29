
window.onscroll=function(){

let scroll =
document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progress =
(scroll/height)*100;


document.getElementById("progressBar").style.width=
progress+"%";


}


