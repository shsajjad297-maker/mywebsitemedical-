/* ==========================================================
        MEDICAL LEARNING PORTAL
        SCRIPT.JS
        PART - 1
========================================================== */


/* ==========================================================
        ELEMENTS
========================================================== */

const progressBar = document.getElementById("progressBar");

const backToTop = document.getElementById("backToTop");

const header = document.querySelector("header");

const navLinks = document.querySelectorAll("nav a");

const themeBtn = document.getElementById("themeBtn");



/* ==========================================================
        SCROLL PROGRESS BAR
========================================================== */

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});



/* ==========================================================
        BACK TO TOP BUTTON
========================================================== */

backToTop.style.display = "none";

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.style.display = "flex";

    }

    else{

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/* ==========================================================
        HEADER SHADOW
========================================================== */

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.boxShadow =
        "0 12px 30px rgba(0,0,0,.08)";

    }

    else{

        header.style.boxShadow = "none";

    }

});



/* ==========================================================
        SMOOTH NAVIGATION
========================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});



/* ==========================================================
        ACTIVE NAV LINK
========================================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



/* ==========================================================
        DARK MODE
========================================================== */

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});



/* ==========================================================
        PAGE LOADED
========================================================== */

window.addEventListener("load", () => {

    console.log("Medical Learning Portal Loaded Successfully");

});
/* ==========================================================
        SCRIPT.JS
        PART - 2 (FINAL)
========================================================== */


/* ==========================================================
        SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(

".subjectCard, .infoCard, .heroText, .glassCard"

);

const revealOnScroll = () => {

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120){

            el.style.opacity = "1";

            el.style.transform =

            "translateY(0px)";

        }

    });

};

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(60px)";

    el.style.transition=

    "all .8s ease";

});

window.addEventListener(

"scroll",

revealOnScroll

);

revealOnScroll();



/* ==========================================================
        RIPPLE EFFECT
========================================================== */

const rippleButtons = document.querySelectorAll(

".primaryBtn,.youtubeBtn"

);

rippleButtons.forEach(button=>{

button.addEventListener(

"click",

function(e){

const ripple=document.createElement("span");

const size=Math.max(

this.clientWidth,

this.clientHeight

);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background=

"rgba(255,255,255,.45)";

ripple.style.transform="scale(0)";

ripple.style.animation=

"ripple .6s linear";

ripple.style.left=

e.offsetX-size/2+"px";

ripple.style.top=

e.offsetY-size/2+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});



/* ==========================================================
        RIPPLE KEYFRAME
========================================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(style);



/* ==========================================================
        CARD HOVER
========================================================== */

const cards=

document.querySelectorAll(

".subjectCard"

);

cards.forEach(card=>{

card.addEventListener(

"mouseenter",

()=>{

card.style.transform=

"translateY(-15px) scale(1.02)";

});

card.addEventListener(

"mouseleave",

()=>{

card.style.transform=

"translateY(0px)";

});

});



/* ==========================================================
        FLOATING ICONS
========================================================== */

const floating=

document.querySelectorAll(

".floating"

);

floating.forEach((icon,index)=>{

setInterval(()=>{

const y=Math.random()*20;

const x=Math.random()*15;

icon.style.transform=

`translate(${x}px,-${y}px)`;

},

2500+(index*600));

});



/* ==========================================================
        MOBILE MENU
========================================================== */

const menuBtn=

document.querySelector(

".menuBtn"

);

const nav=

document.querySelector(

"nav"

);

menuBtn.addEventListener(

"click",

()=>{

if(nav.style.display==="block"){

nav.style.display="none";

}

else{

nav.style.display="block";

}

});



/* ==========================================================
        BUTTON HOVER
========================================================== */

const buttons=

document.querySelectorAll(

".youtubeBtn,.primaryBtn"

);

buttons.forEach(btn=>{

btn.addEventListener(

"mouseenter",

()=>{

btn.style.filter=

"brightness(110%)";

});

btn.addEventListener(

"mouseleave",

()=>{

btn.style.filter=

"brightness(100%)";

});

});



/* ==========================================================
        RANDOM GLOW
========================================================== */

setInterval(()=>{

cards.forEach(card=>{

card.style.boxShadow=

"0 18px 40px rgba(46,134,222,.18)";

setTimeout(()=>{

card.style.boxShadow="";

},800);

});

},5000);



/* ==========================================================
        LOADING COMPLETE
========================================================== */

window.addEventListener(

"load",

()=>{

document.body.style.opacity="1";

});



console.log(

"All JavaScript Loaded Successfully."

);

/* ==========================================================
        END
========================================================== */
