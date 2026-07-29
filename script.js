"use strict";


/*
=================================================
 SAJJAD'S MEDICAL PORTAL
 PROFESSIONAL JAVASCRIPT SYSTEM

 PART 1
 - Initialization
 - Mobile Menu
 - Navbar Control
 - Active Navigation
=================================================
*/



document.addEventListener(
"DOMContentLoaded",
()=>{



/* =============================================
        DOM ELEMENTS
============================================= */


const menuBtn =
document.querySelector(".menu-btn");


const navMenu =
document.querySelector("#navMenu");


const navLinks =
document.querySelectorAll("nav a");



const header =
document.querySelector("header");



const sections =
document.querySelectorAll("section");







/* =============================================
        MOBILE MENU
============================================= */


if(menuBtn && navMenu){



    menuBtn.addEventListener(
    "click",
    ()=>{


        navMenu.classList.toggle("active");



        const opened =
        navMenu.classList.contains("active");



        menuBtn.innerHTML =
        opened ? "✖" : "☰";



    });



}







/*
 Close menu after clicking navigation link
*/


navLinks.forEach(link=>{


    link.addEventListener(
    "click",
    ()=>{


        if(navMenu){


            navMenu.classList.remove("active");


        }



        if(menuBtn){


            menuBtn.innerHTML="☰";


        }



    });



});








/*
 Close menu when clicking outside
*/


document.addEventListener(
"click",
(event)=>{


    const clickedInside =
    navMenu?.contains(event.target)
    ||
    menuBtn?.contains(event.target);



    if(!clickedInside){


        navMenu?.classList.remove("active");


        if(menuBtn){


            menuBtn.innerHTML="☰";


        }


    }



});








/*
 Close menu with ESC key
*/


document.addEventListener(
"keydown",
(event)=>{


    if(event.key==="Escape"){


        navMenu?.classList.remove("active");


        if(menuBtn){


            menuBtn.innerHTML="☰";


        }


    }


});








/* =============================================
        STICKY HEADER EFFECT
============================================= */


window.addEventListener(
"scroll",
()=>{


    if(!header) return;



    if(window.scrollY>50){


        header.style.background =
        "rgba(2,20,35,0.95)";



        header.style.boxShadow =
        "0 10px 35px rgba(0,0,0,0.25)";



    }

    else{


        header.style.background =
        "rgba(2,20,35,0.82)";



        header.style.boxShadow =
        "none";


    }



},
{
passive:true
});









/* =============================================
        ACTIVE NAVIGATION
============================================= */


function updateActiveNav(){



let currentSection="";



sections.forEach(section=>{


    const sectionTop =
    section.offsetTop - 180;



    if(window.scrollY >= sectionTop){


        currentSection =
        section.id;


    }



});





navLinks.forEach(link=>{


    link.classList.remove("active");



    const target =
    link.getAttribute("href");



    if(target === "#"+currentSection){


        link.classList.add("active");


    }



});



}









window.addEventListener(
"scroll",
updateActiveNav,
{
passive:true
});





/*
 Initial active navigation
*/


updateActiveNav();




console.log(
"🩺 Sajjad's Medical Portal - JS Part 1 Loaded"
);



});



/* =============================================
        SCROLL PROGRESS BAR
============================================= */


const progressBar =
document.getElementById("progressBar");



function updateProgressBar(){


    if(!progressBar) return;



    const scrollTop =
    window.scrollY;



    const documentHeight =
    document.documentElement.scrollHeight
    -
    window.innerHeight;



    const progress =
    (scrollTop / documentHeight) * 100;



    progressBar.style.width =
    progress + "%";



}





window.addEventListener(
"scroll",
updateProgressBar,
{
passive:true
});



updateProgressBar();










/* =============================================
        SCROLL REVEAL ANIMATION
        (Intersection Observer)
============================================= */


const revealElements =
document.querySelectorAll(
"section, .card, .study-card"
);





revealElements.forEach(element=>{


    element.classList.add(
    "reveal"
    );


});







const revealObserver =
new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){



            entry.target.classList.add(
            "active"
            );



            revealObserver.unobserve(
            entry.target
            );



        }



    });



},
{


    threshold:0.15


});








revealElements.forEach(element=>{


    revealObserver.observe(element);



});









/* =============================================
        CARD STAGGER ANIMATION
============================================= */


const cardGroups =
document.querySelectorAll(
".card-container, .study-container"
);





cardGroups.forEach(group=>{


    const cards =
    group.querySelectorAll(
    ".card, .study-card"
    );



    cards.forEach(
    (card,index)=>{


        card.style.transitionDelay =
        `${index * 0.12}s`;



    });



});









/* =============================================
        BACK TO TOP BUTTON
============================================= */


const topButton =
document.createElement("button");



topButton.id =
"topBtn";



topButton.innerHTML =
"↑";



document.body.appendChild(
topButton
);







window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 500){


        topButton.style.display =
        "flex";



        setTimeout(()=>{


            topButton.style.opacity =
            "1";



        },50);



    }

    else{


        topButton.style.opacity =
        "0";



        setTimeout(()=>{


            if(window.scrollY <= 500){


                topButton.style.display =
                "none";


            }



        },300);



    }



},
{
passive:true
});







topButton.addEventListener(
"click",
()=>{


    window.scrollTo({


        top:0,


        behavior:"smooth"



    });



});









/* =============================================
        IMAGE / MEDIA LAZY EFFECT
        Future Ready
============================================= */


const mediaElements =
document.querySelectorAll(
"img, iframe"
);



mediaElements.forEach(media=>{


    media.loading =
    "lazy";


});








/* =============================================
        SMOOTH LINK OFFSET
        For Fixed Header
============================================= */


navLinks.forEach(link=>{


    link.addEventListener(
    "click",
    event=>{


        const targetID =
        link.getAttribute("href");



        const targetSection =
        document.querySelector(
        targetID
        );



        if(targetSection){



            event.preventDefault();



            const headerHeight =
            header.offsetHeight;



            const position =
            targetSection.offsetTop
            -
            headerHeight
            -
            20;



            window.scrollTo({


                top:position,


                behavior:"smooth"



            });



        }



    });



});








console.log(
"✨ Sajjad's Medical Portal - JS Part 2 Loaded"
);



/* =============================================
        BUTTON RIPPLE EFFECT
============================================= */


const buttons =
document.querySelectorAll(
".card a, button"
);





buttons.forEach(button=>{


    button.addEventListener(
    "click",
    function(event){



        const ripple =
        document.createElement("span");



        const rect =
        this.getBoundingClientRect();



        const size =
        Math.max(
            rect.width,
            rect.height
        );



        const x =
        event.clientX - rect.left - size/2;



        const y =
        event.clientY - rect.top - size/2;



        ripple.style.width =
        size + "px";



        ripple.style.height =
        size + "px";



        ripple.style.left =
        x + "px";



        ripple.style.top =
        y + "px";



        ripple.className =
        "ripple";



        this.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();


        },600);



    });



});










/* =============================================
        CARD 3D MICRO INTERACTION
============================================= */


const interactiveCards =
document.querySelectorAll(
".card, .study-card"
);





interactiveCards.forEach(card=>{


    card.addEventListener(
    "mousemove",
    event=>{


        const rect =
        card.getBoundingClientRect();



        const x =
        event.clientX - rect.left;



        const y =
        event.clientY - rect.top;



        const centerX =
        rect.width/2;



        const centerY =
        rect.height/2;



        const rotateX =
        ((y-centerY)/centerY)*5;



        const rotateY =
        ((centerX-x)/centerX)*5;



        card.style.transform =
        `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;



    });






    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform =
        "";



    });



});









/* =============================================
        PAGE LOADING EFFECT
============================================= */


window.addEventListener(
"load",
()=>{


    document.body.classList.add(
    "loaded"
    );



});









/* =============================================
        OPTIMIZED SCROLL HANDLER
============================================= */


let ticking =
false;



function optimizedScroll(){



    if(!ticking){



        window.requestAnimationFrame(()=>{


            updateActiveNav();


            updateProgressBar();



            ticking=false;



        });



        ticking=true;


    }



}





window.addEventListener(
"scroll",
optimizedScroll,
{
passive:true
});









/* =============================================
        ACCESSIBILITY IMPROVEMENT
============================================= */


document.addEventListener(
"keydown",
event=>{


    if(event.key==="Tab"){


        document.body.classList.add(
        "keyboard-user"
        );


    }



});









/* =============================================
        ERROR PROTECTION
============================================= */


window.addEventListener(
"error",
event=>{


    console.warn(
    "Medical Portal Script Warning:",
    event.message
    );



});









/* =============================================
        FINAL WEBSITE INITIALIZATION
============================================= */


function initializePortal(){



    console.log(
    `
    🩺 SAJJAD'S MEDICAL PORTAL

    Status:
    ✔ Navigation Ready
    ✔ Mobile Menu Ready
    ✔ Scroll Animation Ready
    ✔ Study Guide Ready
    ✔ YouTube Resources Ready
    ✔ Performance Optimized

    Welcome Future Doctor 👨‍⚕️
    `
    );



}




initializePortal();
