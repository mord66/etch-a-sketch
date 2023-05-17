const container = document.getElementById("container");

function makeGrid(num){
    for (i=1; i<=num; i++){
        const row = document.createElement("div");
        row.classList.add("box");
        container.appendChild(row);

        for (j=1; j<num; j++){
            const col = document.createElement("div");
            col.classList.add("box");
            row.appendChild(col);
        }
    }
}


makeGrid(4);