const container = document.getElementById("container");
const buttons = document.getElementsByClassName("btn");
const sliderValue = document.getElementById("sliderValue");
const slider = document.getElementById("slider");
const blackButton = document.querySelector(".black");
const whiteButton = document.querySelector(".white");
const colorButton = document.querySelector(".color");
const randomButton = document.querySelector(".random");
const colorPicker = document.getElementById("colorPicker");

// Add clicked effect to buttons //

blackButton.classList.add("clicked");
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", clickedFunction);
}

function clickedFunction(){
    var previousElement= document.querySelector(".clicked");

    if (previousElement){
        previousElement.classList.remove("clicked");
    }
    if (this.classList.length <= 2){
        this.classList.add("clicked");
    }
    else {
        this.classList.remove("clicked");
    }
}
// Add clicked effect to buttons //

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function makeGrid(num){
    container.style.setProperty("grid-template-columns", "repeat(" + num + ", 1fr)");
    container.innerHTML = ""; // Clear previous grid
        for (i=1; i<=num*num; i++){
            let div = document.createElement("div");
            div.addEventListener("mouseover", colorGrid)
            div.classList.add("box");
            container.appendChild(div);
                }
        
}




function colorGrid(){
    if(blackButton.classList.contains("clicked")){
        this.style.backgroundColor = "black";
    }
    else if (whiteButton.classList.contains("clicked")){
        this.style.backgroundColor = "white";
    }
    else if (randomButton.classList.contains("clicked")){
        var r = getRndInteger(1, 255);
        var g = getRndInteger(1, 255);
        var b = getRndInteger(1, 255);
        this.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    else if (colorButton.classList.contains("clicked")){
        this.style.backgroundColor = colorPicker.value;
}
}

var chosenColor="";
colorPicker.addEventListener("input", function(){
    chosenColor = colorPicker.value
})



slider.addEventListener("input", function() {
    const num = parseInt(slider.value);
    makeGrid(num);
    sliderValue.innerHTML= slider.value + "x" + slider.value;

})



makeGrid(16);