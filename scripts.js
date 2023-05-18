const container = document.getElementById("container");

function makeGrid(num){
    container.style.setProperty("grid-template-columns", "repeat(" + num + ", 1fr)");
    for (i=1; i<=num*num; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);

    }
}
makeGrid(7);