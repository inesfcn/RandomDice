let dice = document.getElementsByClassName("dice");

function addDot(){
    let div = document.createElement("div");
    div.className = "dot"
    dice[0].appendChild(div)
}

function addRandomDot(){
    
    let randomNumber= Math.ceil(Math.random()*6)
    if(randomNumber>1){
    for(i=0;i<randomNumber-1;i++){
        addDot()
    }
    dice[0].removeEventListener("click", addRandomDot);
}
}

//  addRandomDot()

dice[0].addEventListener("click", addRandomDot);