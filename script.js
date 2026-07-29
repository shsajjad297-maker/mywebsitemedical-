// ==========================
// SAJJAD'S WEBSITE
// PART 3
// ==========================

// Scroll Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSection);

revealSection();

function revealSection(){

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

const trigger=window.innerHeight*0.82;

if(top<trigger){

section.classList.add("show");

}

});

}

// ==========================
// Back To Top Button
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#00c9ff";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 20px cyan";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==========================
// Navbar Active Link
// ==========================

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// Card Hover Effect
// ==========================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

card.style.transform=

`rotateX(${(y-100)/20}deg)
 rotateY(${-(x-150)/20}deg)
 scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0) scale(1)";

});

});

// ==========================
// Welcome Message
// ==========================

console.log("Welcome to Sajjad's Website");
//========================
// Progress Bar
//========================

window.addEventListener("scroll",()=>{

const totalHeight=document.body.scrollHeight-window.innerHeight;

const progress=(window.pageYOffset/totalHeight)*100;

document.getElementById("progressBar").style.width=progress+"%";

});
