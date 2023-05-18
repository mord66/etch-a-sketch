const container = document.getElementById("container");
for (i=1; i<=256; i++){
    let div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);

}


function makeGrid(num){
    container.style.setProperty("grid-template-columns", "repeat(" + num + ", 1fr)");
    if (num<=100){
        for (i=1; i<=num*num; i++){
            let div = document.createElement("div");
            div.classList.add("box");
            container.appendChild(div);
                }
        
    }
    else {
        alert("Number too big!");
    }
}


