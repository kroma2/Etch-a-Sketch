const containerDiv = document.querySelector("#container");

for(let r = 0; r < 16; r++){
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    containerDiv.appendChild(row);
}


const rowDivs = document.querySelectorAll(".row");
rowDivs.forEach(rowDiv =>{
    for(let c = 0; c < 16; c++){
        let col = document.createElement("div");
        col.setAttribute("class", "column");
        rowDiv.appendChild(col);
    }
})

const colDivs = document.querySelectorAll(".column")
colDivs.forEach((colDiv) =>{
    colDiv.addEventListener("mouseover", () => {
        colDiv.style.backgroundColor = "gray";
    })
})