const containerDiv = document.querySelector("#container");

for(let r = 0; r < 16; r++){
    let row = document.createElement("div");
    row.setAttribute("id", "row")
    containerDiv.appendChild(row)
}


const rowDivs = document.querySelectorAll("#row");
rowDivs.forEach(rowDiv =>{
    for(let c = 0; c < 16; c++){
        let col = document.createElement("div")
        col.setAttribute("id", "column")
        rowDiv.appendChild(col);
    }
})
