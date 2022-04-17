const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const reset = document.querySelector(".reset");
const btn1 = document.querySelector(".pl1");
const btn2 = document.querySelector(".pl2");
const gameLevel = document.getElementById("game-value");
const modal = document.querySelector('.modal-wrapper')
const modalText = document.querySelector('.modal-text')
const modalBtn = document.querySelector('.modal-btn')
const layout = document.querySelector('.layout')

let player1Score = 0;
let player2Score = 0;
let maxscore = +gameLevel.value;
let gameOver = false;
const music = new Audio('1.wav')

btn1.addEventListener("click", () => {
  if (!gameOver) {
    player1Score++;
    if (player1Score == maxscore) {
      gameOver = true;
      player1.style.color = "green";
      player2.style.color = "red";
      modalText.textContent = 'Player 1 ✅'
      setTimeout(() =>{
        modal.style.display = 'block'
        layout.style.display = 'block'
        music.play()
      },100)
    }

    player1.textContent = player1Score;
  }
});

btn2.addEventListener("click", () => {
  if (!gameOver) {
    player2Score++;
    if (player2Score == maxscore) {
      gameOver = true;
      player1.style.color = "red";
      player2.style.color = "green";
      modalText.textContent = 'Player 2 ✅'
      setTimeout(() =>{
        modal.style.display = 'block'
        layout.style.display = 'block'
        music.play()
      },100)
    }

    player2.textContent = player2Score;
  }
});

gameLevel.addEventListener("change", () => {
  maxscore = +gameLevel.value;
  func();
});

reset.addEventListener("click", func);

modalBtn.addEventListener('click', () => {
  func()
  modal.style.display = 'none'
  layout.style.display = 'none'
  stopMusic()
})

function func() {
  player1.textContent = 0;
  player2.textContent = 0;
  player1.style.color = "white";
  player2.style.color = "white";
  player1Score = 0;
  player2Score = 0;
  gameOver = false;
}

function stopMusic() {
  music.pause()
  music.currentTime = 0
}
