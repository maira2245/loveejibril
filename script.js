/* =====================================================
   SCRAPBOOK WEBSITE
   SCRIPT.JS - PART 1
===================================================== */

/* ==========================================
LOADING SCREEN
========================================== */

window.addEventListener("load", function () {

    const loading = document.querySelector(".loading");

    setTimeout(function () {

        loading.style.opacity = "0";
        loading.style.visibility = "hidden";

        setTimeout(function () {

            loading.style.display = "none";

        }, 800);

    }, 2000);

});


/* ==========================================
WELCOME ENVELOPE
========================================== */

const popup = document.getElementById("welcomePopup");
const openStory = document.getElementById("openStory");

if(openStory){

openStory.addEventListener("click",function(){

popup.style.opacity="0";

popup.style.transform="scale(.95)";

setTimeout(function(){

popup.style.display="none";

},600);

});

}


/* ==========================================
FLOATING HEART
========================================== */

const heartContainer=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(16+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

heartContainer.appendChild(heart);

setTimeout(function(){

heart.remove();

},9000);

}

setInterval(createHeart,350);


/* ==========================================
SCROLL TO TOP BUTTON
========================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",function(){

if(window.scrollY>350){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/* ==========================================
AOS INIT
========================================== */

if(typeof AOS!=="undefined"){

AOS.init({

duration:1200,

once:true,

offset:120

});

}


/* ==========================================
ACTIVE NAVBAR
========================================== */

const links=document.querySelectorAll(".navbar a");

links.forEach(function(link){

link.addEventListener("click",function(){

links.forEach(function(item){

item.classList.remove("active");

});

this.classList.add("active");

});

});


/* ==========================================
IMAGE HOVER EFFECT
========================================== */

const images=document.querySelectorAll("img");

images.forEach(function(img){

img.addEventListener("mouseenter",function(){

img.style.transform="scale(1.03)";

});

img.addEventListener("mouseleave",function(){

img.style.transform="scale(1)";

});

});


/* ==========================================
HERO BUTTON EFFECT
========================================== */

const heroBtn=document.querySelector(".hero-btn");

if(heroBtn){

heroBtn.addEventListener("mouseenter",function(){

heroBtn.innerHTML="❤️ Let's Continue ❤️";

});

heroBtn.addEventListener("mouseleave",function(){

heroBtn.innerHTML="Open Our Story ❤️";

});

}


/* ==========================================
END PART 1
========================================== */