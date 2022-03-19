function populateBoard(size) {
  if (size > 100) {
    size = 100;
  }
  if (size < 1) {
    size = 1;
  }
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < Math.pow(size, 2); i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "gray";
    square.addEventListener("mouseover",() =>{
      square.style.backgroundColor = "black";
    })
    board.insertAdjacentElement("beforeend", square);
  }
}

//So wird bei Start Board mit 16x16 generiert
populateBoard(16)

// submit_btn
// number_input
// wenn submit_btn click, dann populateBoard(text_input), default 16

function changeSize(input){
  populateBoard(input);
}
