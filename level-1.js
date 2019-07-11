/* eslint-disable */
const pacman = { x: 0, y: 0 };

const walls = [
  { x: 4, y: 8 },
  { x: 5, y: 7 },
];

const balls = [
  { x: 3, y: 2 },
  { x: 9, y: 10 },
];

const ghosts = [
  { x: 20, y: 20 },
  { x: 21, y: 21 },
];

function wallPosition() {
  for (const wall of walls) {
    const wallDiv = document.createElement('div');
    wallDiv.classList = 'wall';
    wallDiv.style.top = `${(wall.y * 30).toString()}px`;
    wallDiv.style.left = `${(wall.x * 30).toString()}px`;
    document.querySelector('#board').appendChild(wallDiv);
  }
}

wallPosition();

function ballPosition() {
  const allBalls = document.querySelectorAll('.dots');
  for (let i = 0; i < allBalls.length; i += 1) {
    allBalls[i].remove();
  }

  for (const ball of balls) {
    const ballDiv = document.createElement('div');
    ballDiv.classList = 'dots';
    ballDiv.style.top = `${(ball.y * 30).toString()}px`;
    ballDiv.style.left = `${(ball.x * 30).toString()}px`;
    document.querySelector('#board').appendChild(ballDiv);
  }
}

ballPosition();

function ghostPosition() {
  for (const ghost of ghosts) {
    const ghostDiv = document.createElement('div');
    ghostDiv.classList = 'ghosts';
    ghostDiv.style.top = `${(ghost.y * 30).toString()}px`;
    ghostDiv.style.left = `${(ghost.x * 30).toString()}px`;
    document.querySelector('#board').appendChild(ghostDiv);
  }
}

ghostPosition();

const boardBorder = function (x, y) {
  if (x < 0 || y < 0 || x > 21 || y > 21) {
    return false;
  }

  return true;
};

const wallInSpot = function (x, y) {
  for (let i = 0; i < walls.length; i += 1) {
    if (walls[i].x === x && walls[i].y === y) {
      return true;
    }
  }
  return false;
};

const ballInSpot = function (x, y) {
  for (let i = 0; i < balls.length; i += 1) {
    if (balls[i].x === x && balls[i].y === y) {
      return true;
    }
  }
  return false;
};

const ghostInSpot = function (x, y) {
  for (let i = 0; i < ghosts.length; i += 1) {
    if (ghosts[i].x === x && ghosts[i].y === y) {
      return true;
    }
  }
  return false;
};

function removeBall(x, y) {
  for (let i = 0; i < balls.length; i += 1) {
    const ball = balls[i];
    if (ball.x === x && ball.y === y) {
      balls.splice(i, 1);
    }
  }
}

function gameOver() {
    alert('Game Over');
}

const canMoveTo = function (x, y) {
  if (!boardBorder(x, y)) {
    return false;
  }
  if (wallInSpot(x, y)) {
    return false;
  }
  if (ghostInSpot(x, y)) {
    gameOver();
  }
  return true;
};

function moveCharacterTo(x, y) {
  const pacmanChar = document.querySelector('#character');
  pacmanChar.style.top = `${(y * 30).toString()}px`;
  pacmanChar.style.left = `${(x * 30).toString()}px`;
  if (ballInSpot(x, y)) {
    removeBall(x, y);
    ballPosition();
  }
}

function moveLeft() {
  if (canMoveTo(pacman.x - 1, pacman.y)) {
    pacman.x -= 1;
    moveCharacterTo(pacman.x, pacman.y);
  }
}

function moveUp() {
  if (canMoveTo(pacman.x, pacman.y - 1)) {
    pacman.y -= 1;
    moveCharacterTo(pacman.x, pacman.y);
  }
}

function moveRight() {
  if (canMoveTo(pacman.x + 1, pacman.y)) {
    pacman.x += 1;
    moveCharacterTo(pacman.x, pacman.y);
  }
}

function moveDown() {
  if (canMoveTo(pacman.x, pacman.y + 1)) {
    pacman.y += 1;
    moveCharacterTo(pacman.x, pacman.y);
  }
}

document.body.addEventListener('keydown', (evt) => {
  if ([37, 38, 39, 40, 65, 87, 68, 83].includes(evt.keyCode)) {
    evt.preventDefault();
    switch (evt.keyCode) {
      case 37:
      case 65:
        moveLeft();
        break;
      case 38:
      case 87:
        moveUp();
        break;
      case 39:
      case 68:
        moveRight();
        break;
      case 40:
      case 83:
        moveDown();
        break;
      default:
    }
  }
});


