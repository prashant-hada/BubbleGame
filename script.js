let timer=60;
let hitnum=0;
let score=0;
let bottom= document.querySelector("#bottom");
let flag=0;
document.querySelector(".score").textContent=score;

function makeBubble(){
    let bubble="";
    for(let i=0 ; i<126 ; i++ ){
        bubble +=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    bottom.innerHTML  = bubble;
}

function countdown(){
    let timerint= setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector(".timer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            flag=1;
            bottom.innerHTML= `<h1>GAME OVER</h1><h2>Your Score: ${score}</h2><h5><a href="index.html">CLICH HERE TO PLAY AGAIN</a></h5>`,
            bottom.style.flexDirection="column",
            bottom.style.gap="15%"
        }
    }, 1000);
}

function hit(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = hitnum;
}
bottom.addEventListener("click",function(dets){
    if(flag===1){return 0;}
    if(hitnum === Number(dets.target.textContent)){
       score+=10;
    }
    else{
        score-=5;
    }
    hit();
    makeBubble(); 
    document.querySelector(".score").textContent=score;
})

hit();
makeBubble();
countdown();