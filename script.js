// Überraschung

function showMessage(){

const msg=document.getElementById("message");

msg.style.display="block";

msg.animate([
{transform:"scale(0)",opacity:0},
{transform:"scale(1.2)",opacity:1},
{transform:"scale(1)",opacity:1}
],{
duration:800
});

confetti();

}

// 💖 Herzen

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

const hearts=["💖","💕","💗","💘","💝","💞"];

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

},150);


// ✨ Glitzer

setInterval(()=>{

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},2000);

},120);


// 🎊 Konfetti

function confetti(){

const emojis=["🎉","🎊","✨","💖","💕","🌸","🎀"];

for(let i=0;i<150;i++){

let c=document.createElement("div");

c.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-50px";

c.style.fontSize=(15+Math.random()*20)+"px";

c.style.pointerEvents="none";

c.style.zIndex="9999";

document.body.appendChild(c);

c.animate([

{
transform:"translateY(0px) rotate(0deg)",
opacity:1
},

{
transform:"translateY(120vh) rotate(720deg)",
opacity:0
}

],{

duration:3000+Math.random()*3000

});

setTimeout(()=>{

c.remove();

},6000);

}

}


// 💗 Herz-Cursor

document.addEventListener("mousemove",e=>{

const h=document.createElement("div");

h.innerHTML="💗";

h.style.position="fixed";

h.style.left=e.clientX+"px";

h.style.top=e.clientY+"px";

h.style.pointerEvents="none";

h.style.fontSize="18px";

h.style.zIndex="9999";

document.body.appendChild(h);

h.animate([

{
transform:"translateY(0px)",
opacity:1
},

{
transform:"translateY(-35px)",
opacity:0
}

],{

duration:900

});

setTimeout(()=>{

h.remove();

},900);

});


// 🌸 Begrüßung

window.onload=()=>{

setTimeout(()=>{

alert("💖 Happy Birthday Melina! Ich wünsche dir einen wunderschönen 18. Geburtstag! 🎂💕");

},800);

}