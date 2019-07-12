
function time() {

}
function board() {
  const gridCell = 30;

  const capman = { x: 0, y: 0 };

  const walls = [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 5, y: 1 },
    { x: 8, y: 1 },
    { x: 9, y: 1 },
    { x: 10, y: 1 },
    { x: 11, y: 1 },
    { x: 12, y: 1 },
    { x: 13, y: 1 },
    { x: 14, y: 1 },
    { x: 17, y: 1 },
    { x: 20, y: 1 },
    { x: 21, y: 1 },
    { x: 1, y: 2 },
    { x: 5, y: 2 },
    { x: 9, y: 2 },
    { x: 10, y: 2 },
    { x: 11, y: 2 },
    { x: 12, y: 2 },
    { x: 13, y: 2 },
    { x: 17, y: 2 },
    { x: 21, y: 2 },
    { x: 4, y: 3 },
    { x: 5, y: 3 },
    { x: 10, y: 3 },
    { x: 11, y: 3 },
    { x: 12, y: 3 },
    { x: 17, y: 3 },
    { x: 18, y: 3 },
    { x: 5, y: 4 },
    { x: 6, y: 4 },
    { x: 11, y: 4 },
    { x: 16, y: 4 },
    { x: 17, y: 4 },
    { x: 8, y: 9 },
    { x: 9, y: 9 },
    { x: 10, y: 9 },
    { x: 11, y: 9 },
    { x: 12, y: 9 },
    { x: 13, y: 9 },
    { x: 14, y: 9 },
    { x: 8, y: 10 },
    { x: 14, y: 10 },
    { x: 8, y: 11 },
    { x: 14, y: 11 },
    { x: 8, y: 12 },
    { x: 14, y: 12 },
    { x: 8, y: 13 },
    { x: 14, y: 13 },
    { x: 9, y: 13 },
    { x: 13, y: 13 },
    { x: 1, y: 20 },
    { x: 5, y: 20 },
    { x: 9, y: 20 },
    { x: 10, y: 20 },
    { x: 11, y: 20 },
    { x: 12, y: 20 },
    { x: 13, y: 20 },
    { x: 17, y: 20 },
    { x: 21, y: 20 },
    { x: 1, y: 21 },
    { x: 2, y: 21 },
    { x: 5, y: 21 },
    { x: 8, y: 21 },
    { x: 9, y: 21 },
    { x: 10, y: 21 },
    { x: 11, y: 21 },
    { x: 12, y: 21 },
    { x: 13, y: 21 },
    { x: 14, y: 21 },
    { x: 17, y: 21 },
    { x: 20, y: 21 },
    { x: 21, y: 21 },
  ];

  const balls = [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 7, y: 0 },
    { x: 8, y: 0 },
    { x: 9, y: 0 },
    { x: 10, y: 0 },
    { x: 11, y: 0 },
    { x: 12, y: 0 },
    { x: 13, y: 0 },
    { x: 14, y: 0 },
    { x: 15, y: 0 },
    { x: 16, y: 0 },
    { x: 17, y: 0 },
    { x: 18, y: 0 },
    { x: 19, y: 0 },
    { x: 20, y: 0 },
    { x: 21, y: 0 },
    { x: 22, y: 0 },
    { x: 0, y: 1 },
    { x: 3, y: 1 },
    { x: 4, y: 1 },
    { x: 6, y: 1 },
    { x: 7, y: 1 },
    { x: 15, y: 1 },
    { x: 16, y: 1 },
    { x: 18, y: 1 },
    { x: 19, y: 1 },
    { x: 22, y: 1 },
    { x: 0, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
    { x: 6, y: 2 },
    { x: 7, y: 2 },
    { x: 8, y: 2 },
  ];

  const ghosts = [
    { x: 10, y: 11 },
    { x: 12, y: 11 },
  ];

  function wallPosition() {
    for (const wall of walls) {
      const wallDiv = document.createElement('div');
      wallDiv.classList = 'wall';
      wallDiv.style.top = `${(wall.y * gridCell).toString()}px`;
      wallDiv.style.left = `${(wall.x * gridCell).toString()}px`;
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
      ballDiv.style.top = `${(ball.y * gridCell).toString()}px`;
      ballDiv.style.left = `${(ball.x * gridCell).toString()}px`;
      document.querySelector('#board').appendChild(ballDiv);
    }
  }

  ballPosition();

  function ghostPosition() {
    for (const ghost of ghosts) {
      const ghostDiv = document.createElement('div');
      ghostDiv.classList = 'ghosts';
      ghostDiv.style.top = `${(ghost.y * gridCell).toString()}px`;
      ghostDiv.style.left = `${(ghost.x * gridCell).toString()}px`;
      document.querySelector('#board').appendChild(ghostDiv);
    }
  }

  ghostPosition();

  const boardBorder = function (x, y) {
    if (x < 0 || y < 0 || x > 22 || y > 22) {
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
    return true;
  };

  function ghostMovement(x, y, i) {
    setInterval(() => {
      const ghostChar = document.querySelectorAll('.ghosts')[i];
      const xOrY = Math.floor(Math.random() * 2) + 1;
      const stayUpDown = (Math.floor(Math.random() * 3) - 1);
      const stayRightLeft = (Math.floor(Math.random() * 3) - 1);
      //   console.log(stayRightLeft + stayUpDown);
      console.log(xOrY);
      switch (xOrY) {
        case 1:
          y += stayUpDown;
          if (stayUpDown === -1) {
            if (canMoveTo(x, y - 1)) {
              ghostChar.style.top = `${y * gridCell}px`;
            }
          }
          if (stayUpDown === 1) {
            if (canMoveTo(x, y + 1)) {
              ghostChar.style.top = `${y * gridCell}px`;
            }
          }
          if (stayUpDown === 0) {
            x += stayRightLeft;
            if (stayRightLeft === -1) {
              if (canMoveTo(x - 1, y)) {
                ghostChar.style.left = `${x * gridCell}px`;
              }
            }
            if (stayRightLeft === 1) {
              if (canMoveTo(x + 1, y)) {
                ghostChar.style.left = `${x * gridCell}px`;
              }
            }
          }
          break;
        case 2:
          x += stayRightLeft;
          if (stayRightLeft === -1) {
            if (canMoveTo(x - 1, y)) {
              ghostChar.style.left = `${x * gridCell}px`;
            }
          }
          if (stayRightLeft === 1) {
            if (canMoveTo(x + 1, y)) {
              ghostChar.style.left = `${x * gridCell}px`;
            }
          }
          if (stayRightLeft === 0) {
            y += stayUpDown;
            if (stayUpDown === -1) {
              if (canMoveTo(x, y - 1)) {
                ghostChar.style.top = `${y * gridCell}px`;
              }
            }
            if (stayUpDown === 1) {
              if (canMoveTo(x, y + 1)) {
                ghostChar.style.top = `${y * gridCell}px`;
              }
            }
          }
      }
    }, 200);
  }
  for (let i = 0; i < ghosts.length; i++) ghostMovement(ghosts[i].x, ghosts[i].y, i);


  function moveCharacterTo(x, y) {
    const capmanChar = document.querySelector('#character');
    capmanChar.style.top = `${(y * gridCell).toString()}px`;
    capmanChar.style.left = `${(x * gridCell).toString()}px`;
    if (ghostInSpot(x, y)) {
      gameOver();
    }
    if (ballInSpot(x, y)) {
      removeBall(x, y);
      ballPosition();
      if (balls <= 0) {
        alert('win');
      }
    }
  }

  function moveLeft() {
    if (canMoveTo(capman.x - 1, capman.y)) {
      capman.x -= 1;
      moveCharacterTo(capman.x, capman.y);
    }
  }

  function moveUp() {
    if (canMoveTo(capman.x, capman.y - 1)) {
      capman.y -= 1;
      moveCharacterTo(capman.x, capman.y);
    }
  }

  function moveRight() {
    if (canMoveTo(capman.x + 1, capman.y)) {
      capman.x += 1;
      moveCharacterTo(capman.x, capman.y);
    }
  }

  function moveDown() {
    if (canMoveTo(capman.x, capman.y + 1)) {
      capman.y += 1;
      moveCharacterTo(capman.x, capman.y);
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
//   setInterval(function(){
//       document.querySelector('#character').classList.toggle('mouth')
//   }, 500)
  // Math.floor(Math.random() * 3) - 1;
  // x: Math.floor(Math.random() * 21), y: Math.floor(Math.random() * 21)
}
time();
board();
