/* =====================================
   SAJJAD'S MEDICAL PORTFOLIO WEBSITE
   PROFESSIONAL JAVASCRIPT
===================================== */


document.addEventListener("DOMContentLoaded",()=>{


/* ==============================
   SCROLL REVEAL ANIMATION
============================== */


const sections=document.querySelectorAll("section");


function revealSections(){

    const trigger=
    window.innerHeight * 0.85;


    sections.forEach(section=>{


        const position=
        section.getBoundingClientRect().top;


        if(position < trigger){

            section.classList.add("show");

        }


    });

}


revealSections();



/* ==============================
   BACK TO TOP BUTTON
============================== */


const topBtn=document.createElement("button");


topBtn.id="topBtn";

topBtn.innerHTML="↑";


document.body.appendChild(topBtn);



window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }



});



topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});




/* ==============================
   ACTIVE NAVIGATION
============================== */


const navLinks=
document.querySelectorAll("nav a");



function activeNavigation(){


let current="";



sections.forEach(section=>{


const sectionTop=
section.offsetTop - 180;



if(window.scrollY >= sectionTop){

current=section.id;

}



});



navLinks.forEach(link=>{


link.classList.remove("active");



if(
link.getAttribute("href")
===
"#"+current
){

link.classList.add("active");

}



});


}





/* ==============================
   WEBSITE PROGRESS BAR
============================== */


function updateProgress(){


const progressBar=
document.getElementById("progressBar");



if(progressBar){


const height=
document.documentElement.scrollHeight
-
window.innerHeight;



const progress=
(window.scrollY / height)*100;



progressBar.style.width=
progress+"%";


}



}




/* ==============================
   OPTIMIZED SCROLL EVENT
============================== */


window.addEventListener("scroll",()=>{


revealSections();

activeNavigation();

updateProgress();


});




/* ==============================
   CARD INTERACTION
   (SOFT PROFESSIONAL EFFECT)
============================== */


const cards=
document.querySelectorAll(".card");



cards.forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.transform=
"translateY(-8px)";


});



card.addEventListener("mouseleave",()=>{


card.style.transform=
"translateY(0)";


});



});





/* ==============================
   WELCOME MESSAGE
============================== */


console.log(
"🩺 Welcome to Sajjad's Medical Portfolio"
);



});
// ==============================
// MOBILE MENU TOGGLE
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("#navMenu");


menuBtn.addEventListener("click", ()=>{

    navMenu.classList.toggle("active");

});
