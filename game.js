const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvasSize;
let elementsSize;

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function startGame() {
  game.font = elementsSize + "px Verdana";
  game.textAlign = "start";

  for (let i = 0; i < 10; i++) {
    game.fillText(emojis["X"], elementsSize * i, elementsSize);
  }
}

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementsSize = canvasSize / 10 - 1;

  startGame();
}
