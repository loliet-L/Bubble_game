
function makeBubble(){

    var clutter ="";

for(var i=1;i<=147;i++)
{
    var rn=Math.floor(Math.random()*10);
   clutter +=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbottom").innerHTML = clutter;

}
var score=0;
var timer=60;
var hitrn=0
function runTimer(){
   var timeint= setInterval(function(){
        if(timer>0) { 
        timer--;
        document.querySelector("#TimerValue").textContent=timer;
          }
        else{
        clearInterval(timeint);
        document.querySelector("#pbottom").innerHTML = `<h1>GAME OVER </h1>`;

        }

    },1000);
}

function getNewHit(){
     hitrn=Math.floor(Math.random()*10);
     document.querySelector("#hit").textContent=hitrn;
}


function increaseScore(){
    score +=10;
    document.querySelector("#Scoreval").textContent=score;
}

document.querySelector("#pbottom").addEventListener("click",function(details){
    var clickedNo=Number(details.target.textContent);
    // console.log(clickedNo);
    // console.log(hitrn);
    if(clickedNo===hitrn) {
         increaseScore();
         getNewHit();
    makeBubble();
    }
    
});
getNewHit();
makeBubble();
runTimer();

