score = 0;
cross = true;

audio = new Audio("music.mp3");
audiogo = new Audio("gameover.mp3");
setTimeout(() => {
    audio.play();
}, 1000);

document.addEventListener("keydown", function (event) {
  console.log(event.keyCode);
  if (event.keyCode == 38) {
    var dino = document.querySelector(".dino");
    dino.classList.add("animatedDino");
    setTimeout(function () {
      dino.classList.remove("animatedDino");
    }, 1000);
  }
  if (event.keyCode == 39) {
    var dino = document.querySelector(".dino");
    var dinox = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinox + 112 + "px";
  }
  if (event.keyCode == 37) {
    var dino = document.querySelector(".dino");
    var dinox = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinox - 112 + "px";
  }
});

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  dragon = document.querySelector(".dragon");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  drx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));
  dry = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"));

  offsetX = Math.abs(dx - drx);
  offsetY = Math.abs(dy - dry);
  console.log(offsetX, offsetY);
  if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML = "Game Over - Reload to Restart";
    dragon.classList.remove("dragonAni");
    audiogo.play();
    setTimeout(() => {
        audiogo.pause();
        audio.pause();
    }, 1000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      var aniDur = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue("animation-duration"));
      var newDur = aniDur - 0.1;
      dragon.style.animationDuration = newDur + "s";
    }, 500);
  }
}, 10);

function updateScore(score) {
  scoreContent.innerHTML = "Your Score is: " + score;
}
