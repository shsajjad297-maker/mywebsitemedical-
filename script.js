
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




function openGuideline(subject){


let file="";



if(subject==="anatomy"){

file="guideline/anatomy.pdf";

}


else if(subject==="physiology"){


file="guideline/physiology.pdf";


}


else if(subject==="biochemistry"){


file="guideline/biochemistry.pdf";


}




window.open(file,"_blank");



}
