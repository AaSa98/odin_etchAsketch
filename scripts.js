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
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
    board.insertAdjacentElement("beforeend", square);
  }
}

function clearBoard() {
  let board = document.querySelector(".board");
  let pixels = board.querySelectorAll("div");
  pixels.forEach((pixel) => (pixel.style.backgroundColor = "gray"));
}

function changeSize(input) {
  const sliderValue = document.getElementById("sliderValue");
  sliderValue.textContent = input;
  clearBoard();
  populateBoard(input);
}

function loadPage() {
  populateBoard(16);
  sliderValue.textContent = "16";
}

loadPage();
