const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener('load',startGame);

function startGame() {
    game.fillRect(0,50,100,100);
    game.clearRect(0,50,50,50);
    game.font="25px Verdana";
    game.fillStyle="purple";
    game.textAlign="start";
    game.fillText("Death",25,25);
}