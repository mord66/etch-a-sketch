const container = document.getElementById("container");
const buttons = document.getElementsByClassName("btn");
const sliderValue = document.getElementById("sliderValue");
const slider = document.getElementById("slider");
const blackButton = document.querySelector(".black");
const whiteButton = document.querySelector(".white");
const colorButton = document.querySelector(".color");
const randomButton = document.querySelector(".random");
const color ="";

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


function makeGrid(num){
    container.style.setProperty("grid-template-columns", "repeat(" + num + ", 1fr)");
    container.innerHTML = ""; // Clear previous grid
        for (i=1; i<=num*num; i++){
            let div = document.createElement("div");
            div.addEventListener("mouseover", function(){
                if(blackButton.classList.contains("clicked")){
                    this.style.backgroundColor = "black";
                }
                else if (whiteButton.classList.contains("clicked")){
                    this.style.backgroundColor = "white";
                }
            })
            div.classList.add("box");
            container.appendChild(div);
                }
        
}

slider.addEventListener("input", function() {
    const num = parseInt(slider.value);
    makeGrid(num);
    sliderValue.innerHTML= slider.value + "x" + slider.value;

})



makeGrid(16);