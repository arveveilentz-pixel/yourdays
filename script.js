/* PADLET BUTTON */

const button=document.getElementById("openMessage");

button.addEventListener("click",()=>{

startConfetti();

setTimeout(()=>{
window.open("https://padlet.com/newhyowk/lullabiesss___","_blank");
},1200);

});



/* CAROUSEL */

const photos=document.querySelectorAll(".memory-photo");
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");

let index=0;

function showPhoto(i){

photos.forEach(p=>p.classList.remove("active"));
photos[i].classList.add("active");

}

next.addEventListener("click",()=>{

index++;
if(index>=photos.length) index=0;
showPhoto(index);

});

prev.addEventListener("click",()=>{

index--;
if(index<0) index=photos.length-1;
showPhoto(index);

});

setInterval(()=>{

index++;
if(index>=photos.length) index=0;
showPhoto(index);

},4000);



/* TYPING MESSAGE */

const text=`Happy Birthday, Jeli.

I just want to say that meeting you has been one of those small but meaningful things in life that I truly appreciate. You are such a funny, kind, and genuinely enjoyable person to be around.

You always manage to bring good energy wherever you go. Your humor makes even ordinary moments feel lighter and happier, and that's something really special about you.

Sometimes I see you like a little sister that I want to protect, but at other times you somehow feel like the older one who understands things better than me.

I hope this new year of your life brings you more laughter, more memories, and many beautiful moments. Please keep being the cheerful, kind, and wonderful person that you are.

Once again, happy birthday, Jeli.`;

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,35);

}

}

typing();



/* SCROLL REVEAL */

function reveal(){

const reveals=document.querySelectorAll(".reveal");

for(let r of reveals){

const windowHeight=window.innerHeight;
const elementTop=r.getBoundingClientRect().top;

if(elementTop<windowHeight-80){

r.classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);



/* CONFETTI */

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let confetti=[];

function startConfetti(){

confetti=[];

for(let i=0;i<120;i++){

confetti.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+2
});

}

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ffb6c1";

ctx.beginPath();

for(let i=0;i<confetti.length;i++){

let c=confetti[i];

ctx.moveTo(c.x,c.y);
ctx.arc(c.x,c.y,c.r,0,Math.PI*2,true);

}

ctx.fill();

confetti.forEach(c=>{
c.y+=1;
if(c.y>canvas.height)c.y=0;
});

}

setInterval(draw,30);



/* SPARKLES */

const sparkles=document.getElementById("sparkles");

for(let i=0;i<40;i++){

let s=document.createElement("div");

s.style.position="absolute";
s.style.width="4px";
s.style.height="4px";
s.style.background="#ffd1dc";
s.style.borderRadius="50%";
s.style.top=Math.random()*100+"%";
s.style.left=Math.random()*100+"%";
s.style.opacity=Math.random();

sparkles.appendChild(s);

}