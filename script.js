/* =====================================
   SAJJAD'S MEDICAL PORTFOLIO
   FINAL JAVASCRIPT
===================================== */


document.addEventListener("DOMContentLoaded",()=>{


/* =====================================
        MOBILE MENU
===================================== */


const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("#navMenu");


if(menuBtn && navMenu){


    menuBtn.addEventListener("click",()=>{


        navMenu.classList.toggle("active");


        if(navMenu.classList.contains("active")){

            menuBtn.innerHTML="✖";

        }

        else{

            menuBtn.innerHTML="☰";

        }


    });



    // Close menu after clicking a link

    document.querySelectorAll("nav a")
    .forEach(link=>{


        link.addEventListener("click",()=>{


            navMenu.classList.remove("active");

            menuBtn.innerHTML="☰";


        });


    });


}







/* =====================================
        SCROLL REVEAL
===================================== */


const sections =
document.querySelectorAll("section");



function revealSections(){


    const trigger =
    window.innerHeight * 0.85;



    sections.forEach(section=>{


        const position =
        section.getBoundingClientRect().top;



        if(position < trigger){


            section.classList.add("show");


        }


    });


}








/* =====================================
        ACTIVE NAVIGATION
===================================== */


const navLinks =
document.querySelectorAll("nav a");



function updateActiveLink(){


    let current="";



    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 200;



        if(window.scrollY >= sectionTop){


            current = section.id;


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








/* =====================================
        SCROLL PROGRESS BAR
===================================== */


function updateProgress(){


    const progressBar =
    document.getElementById("progressBar");



    if(progressBar){



        const scrollHeight =
        document.documentElement.scrollHeight
        -
        window.innerHeight;



        const progress =
        (window.scrollY / scrollHeight) * 100;



        progressBar.style.width =
        progress + "%";


    }


}








/* =====================================
        BACK TO TOP BUTTON
===================================== */


const topBtn =
document.createElement("button");


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








/* =====================================
        SOFT CARD EFFECT
===================================== */


const cards =
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








/* =====================================
        OPTIMIZED SCROLL LISTENER
===================================== */


window.addEventListener("scroll",()=>{


    revealSections();

    updateActiveLink();

    updateProgress();


});




/* Initial Load */

revealSections();

updateActiveLink();

updateProgress();



console.log(
"🩺 Sajjad's Medical Portfolio Loaded Successfully"
);



});
