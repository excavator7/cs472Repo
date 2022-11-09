window.onload = eventHandler;
var timer = null;

function eventHandler(){
    document.getElementById("circle").onclick = removeCircle;
    document.getElementById("startId").onclick = startGame;
}

function startGame(){
    document.getElementById("circle").style.width = document.getElementById("widthId").value + "px";
    document.getElementById("circle").style.display = "block";
    let interval = document.getElementById("intervalId").value;

    let nbrOfCircles = document.getElementById("nbrCirclesId").value;
    for (let index = 0; index < nbrOfCircles; index++) {
        let p = "<div class='moreCircles'></div>";
        //document.body.insertBefore(p, document.body.firstChild);
    }
    
    timer = setInterval(increaseCircle, interval);

}

function increaseCircle(){
    document.getElementById("circle").style.width = 
        parseInt(document.getElementById("circle").clientWidth) +
            parseInt(document.getElementById("growthId").value) + "px";
}

function removeCircle(){
    clearInterval(timer);
    timer = null;
    this.style.display = "none";
}