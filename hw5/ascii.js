var speed = 250;
var timer;
var frame = 0;
var size;

window.onload = eventHandler;

function eventHandler(){
    size = document.getElementById("fontsize").value;
    document.getElementById("animation").onchange = getAnimation;
    document.getElementById("start").onclick = startAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("turbo").onchange = changeSpeed;
    document.getElementById("fontsize").onchange = changeSize;
}

function getAnimation(){
    let textArea = document.getElementById("text-area");
    textArea.value =  ANIMATIONS[document.getElementById("animation").value];
}

function startAnimation(){  
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    timer = setInterval(runAnimation, 250);
}

function runAnimation(){
    let textArea = document.getElementById("text-area");
    let animate = ANIMATIONS[document.getElementById("animation").value].split("=====");

    if(animate.length === frame){
        frame = 0;
    }

    textArea.value = animate[frame];
    frame++;
}


function stopAnimation(){
    clearInterval(timer);
    timer = null;
    document.getElementById("text-area").value = "";
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

function changeSpeed(){
    if(document.getElementById("turbo").checked){
        speed = document.getElementById("turbo").value = 50;
    }else{
        speed = document.getElementById("turbo").value = 250;
    }
    clearInterval(timer);
    timer = setInterval(runAnimation, speed);
}

function changeSize(){
    size = document.getElementById("fontsize").value;
    document.getElementById("text-area").className = size;
}