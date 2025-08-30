const containerDiv = document.querySelector("#container");

for(let c = 0; c < 16; c++){
    let col = document.createElement("div");
    col.setAttribute("id", "column")
    containerDiv.appendChild(col)
}


const columnDivs = document.querySelectorAll("#column");
columnDivs.forEach(columnDiv =>{
    for(let r = 0; r < 16; r++){
        let row = document.createElement("div")
        row.setAttribute("id", "row")
        columnDiv.appendChild(row);
    }
})
