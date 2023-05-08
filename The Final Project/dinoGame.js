var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var groundHeight = 20;
var score = 0;
var highScore = localStorage.getItem("highScore") || 0;
var lives = 3;

var dino = {
  x: 50,
  y: canvas.height - groundHeight - 50,
  speed: 0,
  gravity: 0.5,
  jumpHeight: -10,
  isJumping: false,
  draw: function() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, 50, 50);
  },
  jump: function() {
    if (!this.isJumping) {
      this.speed = this.jumpHeight;
      this.isJumping = true;
    }
  },
  update: function() {
    this.speed += this.gravity;
    this.y += this.speed;
    if (this.y >= canvas.height - groundHeight - 50) {
      this.y = canvas.height - groundHeight - 50;
      this.isJumping = false;
    }
  }
};

var cactus = {
  x: canvas.width,
  y: canvas.height - groundHeight - 50,
  speed: -5,
  draw: function() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, 50, 30);
  },
  update: function() {
    this.x += this.speed + (score / 10);
    if (this.x < -50) {
      this.x = canvas.width;
      score++;
      if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
      }
    }
    if (dino.x + 50 > this.x && dino.x < this.x + 50 && dino.y + 50 > this.y) {
      lives--;
      if (lives === 0) {
        alert("Game Over! Score: " + score);
        score = 0;
        location.reload();
      } else {
        this.x = canvas.width;
      }
    }
  }
};

var heart = {
  x: canvas.width - 50,
  y: 10,
  draw: function() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.x + 20, this.y + 10);
    ctx.lineTo(this.x + 30, this.y);
    ctx.lineTo(this.x, this.y);
    ctx.lineTo(this.x + 10, this.y + 10);
    ctx.lineTo(this.x, this.y + 20);
    ctx.lineTo(this.x + 30, this.y + 20);
    ctx.closePath();
    ctx.fill();
  },
  update: function() {
    this.x = canvas.width - 50 * lives;
  }
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grd.addColorStop(0, "#FF4136");
  grd.addColorStop(1, "#85144b");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "grey";
  ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
  dino.draw();
  cactus.draw();
  for (var i = 0; i < lives; i++) {
    heart.x = canvas.width - 50 * (i + 1);
    heart.draw();
  }
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 25);
  ctx.fillText("High Score: " + highScore, 10, 50);
}

function update() {
  dino.update();
  cactus.update();
  heart.update();
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}
gameLoop();

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    dino.jump();
  } else if (event.code === "KeyR") {
    restartGame();
  }
});

function restartGame() {
  score = 0;
  lives = 3;
  cactus.x = canvas.width;
  dino.y = canvas.height - groundHeight - 50;
  dino.speed = 0;
  dino.isJumping = false;
}

