const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {

if(playing){

music.pause();
musicBtn.innerHTML="🎵";

}else{

music.play();
musicBtn.innerHTML="🔊";

}

playing=!playing;

}

function nextPage(id){

document.querySelector(".page.active").classList.remove("active");

document.getElementById("page"+id).classList.add("active");

window.scrollTo(0,0);

}

function accepted(){

// Confetti
confetti({
particleCount:250,
spread:180,
origin:{y:.6}
});

// Fireworks
let duration=5000;

let animationEnd=Date.now()+duration;

(function frame(){

confetti({

particleCount:6,

angle:60,

spread:70,

origin:{x:0}

});

confetti({

particleCount:6,

angle:120,

spread:70,

origin:{x:1}

});

if(Date.now()<animationEnd){

requestAnimationFrame(frame);

}

})();

// Hearts
for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(25+Math.random()*25)+"px";

heart.style.transition="4s linear";

heart.style.zIndex="9999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-100px";

heart.style.transform="rotate(720deg)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},4500);

}

// Final Page
setTimeout(()=>{

nextPage(7);

},3500);

}

// Auto-play music after first click
document.body.addEventListener("click",()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="🔊";

}

},{once:true});

// Floating sparkles
setInterval(()=>{

let star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top="100vh";

star.style.fontSize=(10+Math.random()*20)+"px";

star.style.transition="6s linear";

star.style.pointerEvents="none";

document.body.appendChild(star);

setTimeout(()=>{

star.style.top="-50px";

star.style.opacity="0";

},100);

setTimeout(()=>{

star.remove();

},6500);

},400);
