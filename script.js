const containerDiv = document.querySelector("#container");

let number = 16;
makeGrid(number);

const setButton = document.querySelector("#set-button")
setButton.addEventListener("click", () =>{
    number = prompt("Please enter the size of the grid (between 1 and 100)", "16");
    if(number <=100 && number > 0){
        containerDiv.replaceChildren()
        makeGrid(number)
    }
    else{
        alert("Please input number between 1 and 100")
    }
     
})

function makeGrid(number){
for(let r = 0; r < number; r++){
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    containerDiv.appendChild(row);
}

const rowDivs = document.querySelectorAll(".row");
rowDivs.forEach(rowDiv =>{
    for(let c = 0; c < number; c++){
        let col = document.createElement("div");
        col.setAttribute("class", "column");
        rowDiv.appendChild(col);
    }
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colDivs = document.querySelectorAll(".column")
colDivs.forEach((colDiv) =>{
    colDiv.style.opacity = 0.1;
    colDiv.addEventListener("mouseover", () => {
        colDiv.style.backgroundColor = getRandomColor();
        colDiv.style.opacity = (parseFloat(colDiv.style.opacity)) + 0.1;
    })
})
}



