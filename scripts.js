const container = document.getElementById("container");
const buttons = document.getElementsByClassName("btn");

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


for (i=1; i<=256; i++){
    let div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
}

var slider = document.getElementById("slider");
function updateValue(){
    const value=slider.value;
    return value;
}


slider.addEventListener("input", function() {
    const num = parseInt(updateValue());
    makeGrid(num);
    console.log(num);
})



function makeGrid(num){
    container.style.setProperty("grid-template-columns", "repeat(" + num + ", 1fr)");
    container.innerHTML = ""; // Clear previous grid
        for (i=1; i<=num*num; i++){
            let div = document.createElement("div");
            div.classList.add("box");
            container.appendChild(div);
                }
        
}
