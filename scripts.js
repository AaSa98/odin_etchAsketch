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
  const colorPick = document.getElementById("colorPick");
  sliderValue.textContent = input;
  clearBoard();
  populateBoard(input);
  //.textContent oder .innerHTML funktioniert nicht! Wert muss über .value aufgerufen werden!
  if (colorPick.value != "") {
    changeColor(colorPick.value);
  } else changeColor("black");
}

function changeColor(colorPick) {
  let board = document.querySelector(".board");
  let pixels = board.querySelectorAll("div");
  if (colorPick != "") {
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = colorPick;
      })
    );
  } else {
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "black";
      })
    );
  }
}

//Generiert zufälligen Hex-Code für Farbe
function randomColorPick() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function changeToRandomColor() {
  let board = document.querySelector(".board");
  let pixels = board.querySelectorAll("div");
  pixels.forEach((pixel) =>
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = randomColorPick();
    })
  );
}

//Standard-Settings bei Laden der Seite
function loadPage() {
  populateBoard(16);
  sliderValue.textContent = "16";
  changeColor("black");
}

loadPage();
