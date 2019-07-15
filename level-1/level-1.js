/* eslint-disable */
// header
// time
function stopWatch() {

    // second counter should go up every 1000ms
    let secondCounter = 0;
    setInterval(() => {
        let secondTimer = secondCounter += 1;
        if (secondTimer <= 9) {
            document.querySelector('#seconds').innerHTML = `0${secondTimer}`;
        } else if (secondTimer >= 10 && secondTimer <= 59) {
            document.querySelector('#seconds').innerHTML = secondTimer;
        } else if (secondTimer >= 60) {
            secondCounter = 0;
            secondTimer = secondCounter;
            document.querySelector('#seconds').innerHTML = `0${secondTimer}`;
        }
    }, 1000);

    // minute counter should make the time go up by every 60000ms
    let minuteCounter = 0;
    setInterval(() => {
        const minuteTimer = minuteCounter += 1;
        if (minuteTimer <= 9) {
            document.querySelector('#minutes').innerHTML = `0${minuteTimer}`;
        } else if (minuteTimer >= 10) {
            document.querySelector('#minutes').innerHTML = minuteTimer;
        }
    }, 60000);
}

// score
function scoreBoard() {
    let scoreCounter = 0;
    setInterval(() => {
        const scoreUpByTen = scoreCounter += 10;
        if (scoreUpByTen < 99) {
            document.querySelector('#score').innerHTML = `00${scoreUpByTen}`;
        } else if (scoreUpByTen < 999) {
            document.querySelector('#score').innerHTML = `0${scoreUpByTen}`;
        } else if (scoreUpByTen > 999) {
            document.querySelector('#score').innerHTML = scoreUpByTen;
        }
        return score = document.querySelector('#score').innerHTML
    }, 1000);
    return score
}

// main
// board
function board() {

    const gridCell = 30;

    // character x y pos
    const capman = { x: 0, y: 0 };

    // walls x y pos
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
        { x: 3, y: 4 },
        { x: 4, y: 4 },
        { x: 5, y: 4 },
        { x: 6, y: 4 },
        { x: 11, y: 4 },
        { x: 16, y: 4 },
        { x: 17, y: 4 },
        { x: 18, y: 4 },
        { x: 19, y: 4 },
        { x: 6, y: 5 },
        { x: 7, y: 5 },
        { x: 8, y: 5 },
        { x: 14, y: 5 },
        { x: 15, y: 5 },
        { x: 16, y: 5 },
        { x: 3, y: 7 },
        { x: 4, y: 7 },
        { x: 18, y: 7 },
        { x: 19, y: 7 },
        { x: 4, y: 8 },
        { x: 18, y: 8 },
        { x: 1, y: 9 },
        { x: 8, y: 9 },
        { x: 9, y: 9 },
        { x: 13, y: 9 },
        { x: 14, y: 9 },
        { x: 21, y: 9 },
        { x: 1, y: 10 },
        { x: 2, y: 10 },
        { x: 8, y: 10 },
        { x: 14, y: 10 },
        { x: 20, y: 10 },
        { x: 21, y: 10 },
        { x: 1, y: 11 },
        { x: 2, y: 11 },
        { x: 3, y: 11 },
        { x: 19, y: 11 },
        { x: 20, y: 11 },
        { x: 21, y: 11 },
        { x: 1, y: 12 },
        { x: 2, y: 12 },
        { x: 8, y: 12 },
        { x: 14, y: 12 },
        { x: 20, y: 12 },
        { x: 21, y: 12 },
        { x: 1, y: 13 },
        { x: 8, y: 13 },
        { x: 9, y: 13 },
        { x: 13, y: 13 },
        { x: 14, y: 13 },
        { x: 21, y: 13 },
        { x: 4, y: 14 },
        { x: 18, y: 14 },
        { x: 3, y: 15 },
        { x: 4, y: 15 },
        { x: 18, y: 15 },
        { x: 19, y: 15 },
        { x: 6, y: 17 },
        { x: 7, y: 17 },
        { x: 8, y: 17 },
        { x: 14, y: 17 },
        { x: 15, y: 17 },
        { x: 16, y: 17 },
        { x: 3, y: 18 },
        { x: 4, y: 18 },
        { x: 5, y: 18 },
        { x: 6, y: 18 },
        { x: 11, y: 18 },
        { x: 16, y: 18 },
        { x: 17, y: 18 },
        { x: 18, y: 18 },
        { x: 19, y: 18 },
        { x: 4, y: 19 },
        { x: 5, y: 19 },
        { x: 10, y: 19 },
        { x: 11, y: 19 },
        { x: 12, y: 19 },
        { x: 17, y: 19 },
        { x: 18, y: 19 },
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
    
    // coins x y pos
    const balls = [
        { x: 1, y: 0 },
        // { x: 2, y: 0 },
        // { x: 3, y: 0 },
        // { x: 4, y: 0 },
        // { x: 5, y: 0 },
        // { x: 6, y: 0 },
        // { x: 7, y: 0 },
        // { x: 8, y: 0 },
        // { x: 9, y: 0 },
        // { x: 10, y: 0 },
        // { x: 11, y: 0 },
        // { x: 12, y: 0 },
        // { x: 13, y: 0 },
        // { x: 14, y: 0 },
        // { x: 15, y: 0 },
        // { x: 16, y: 0 },
        // { x: 17, y: 0 },
        // { x: 18, y: 0 },
        // { x: 19, y: 0 },
        // { x: 20, y: 0 },
        // { x: 21, y: 0 },
        // { x: 22, y: 0 },
        // { x: 0, y: 1 },
        // { x: 3, y: 1 },
        // { x: 4, y: 1 },
        // { x: 6, y: 1 },
        // { x: 7, y: 1 },
        // { x: 15, y: 1 },
        // { x: 16, y: 1 },
        // { x: 18, y: 1 },
        // { x: 19, y: 1 },
        // { x: 22, y: 1 },
        // { x: 0, y: 2 },
        // { x: 2, y: 2 },
        // { x: 3, y: 2 },
        // { x: 4, y: 2 },
        // { x: 6, y: 2 },
        // { x: 7, y: 2 },
        // { x: 8, y: 2 },
        // { x: 14, y: 2 },
        // { x: 15, y: 2 },
        // { x: 16, y: 2 },
        // { x: 18, y: 2 },
        // { x: 19, y: 2 },
        // { x: 20, y: 2 },
        // { x: 22, y: 2 },
        // { x: 0, y: 3 },
        // { x: 1, y: 3 },
        // { x: 2, y: 3 },
        // { x: 3, y: 3 },
        // { x: 6, y: 3 },
        // { x: 7, y: 3 },
        // { x: 8, y: 3 },
        // { x: 9, y: 3 },
        // { x: 13, y: 3 },
        // { x: 14, y: 3 },
        // { x: 15, y: 3 },
        // { x: 16, y: 3 },
        // { x: 19, y: 3 },
        // { x: 20, y: 3 },
        // { x: 21, y: 3 },
        // { x: 22, y: 3 },
        // { x: 0, y: 4 },
        // { x: 1, y: 4 },
        // { x: 2, y: 4 },
        // { x: 7, y: 4 },
        // { x: 8, y: 4 },
        // { x: 9, y: 4 },
        // { x: 10, y: 4 },
        // { x: 12, y: 4 },
        // { x: 13, y: 4 },
        // { x: 14, y: 4 },
        // { x: 15, y: 4 },
        // { x: 20, y: 4 },
        // { x: 21, y: 4 },
        // { x: 22, y: 4 },
        // { x: 0, y: 5 },
        // { x: 1, y: 5 },
        // { x: 2, y: 5 },
        // { x: 3, y: 5 },
        // { x: 4, y: 5 },
        // { x: 5, y: 5 },
        // { x: 9, y: 5 },
        // { x: 10, y: 5 },
        // { x: 11, y: 5 },
        // { x: 12, y: 5 },
        // { x: 13, y: 5 },
        // { x: 17, y: 5 },
        // { x: 18, y: 5 },
        // { x: 19, y: 5 },
        // { x: 20, y: 5 },
        // { x: 21, y: 5 },
        // { x: 22, y: 5 },
        // { x: 0, y: 6 },
        // { x: 1, y: 6 },
        // { x: 2, y: 6 },
        // { x: 3, y: 6 },
        // { x: 4, y: 6 },
        // { x: 18, y: 6 },
        // { x: 19, y: 6 },
        // { x: 20, y: 6 },
        // { x: 21, y: 6 },
        // { x: 22, y: 6 },
        // { x: 0, y: 7 },
        // { x: 1, y: 7 },
        // { x: 2, y: 7 },
        // { x: 20, y: 7 },
        // { x: 21, y: 7 },
        // { x: 22, y: 7 },
        // { x: 0, y: 8 },
        // { x: 1, y: 8 },
        // { x: 2, y: 8 },
        // { x: 3, y: 8 },
        // { x: 19, y: 8 },
        // { x: 20, y: 8 },
        // { x: 21, y: 8 },
        // { x: 22, y: 8 },
        // { x: 0, y: 9 },
        // { x: 2, y: 9 },
        // { x: 3, y: 9 },
        // { x: 4, y: 9 },
        // { x: 18, y: 9 },
        // { x: 19, y: 9 },
        // { x: 20, y: 9 },
        // { x: 22, y: 9 },
        // { x: 0, y: 10 },
        // { x: 3, y: 10 },
        // { x: 4, y: 10 },
        // { x: 18, y: 10 },
        // { x: 19, y: 10 },
        // { x: 22, y: 10 },
        // { x: 0, y: 11 },
        // { x: 4, y: 11 },
        // { x: 18, y: 11 },
        // { x: 22, y: 11 },
        // { x: 0, y: 12 },
        // { x: 3, y: 12 },
        // { x: 4, y: 12 },
        // { x: 18, y: 12 },
        // { x: 19, y: 12 },
        // { x: 22, y: 12 },
        // { x: 0, y: 13 },
        // { x: 2, y: 13 },
        // { x: 3, y: 13 },
        // { x: 4, y: 13 },
        // { x: 18, y: 13 },
        // { x: 19, y: 13 },
        // { x: 20, y: 13 },
        // { x: 22, y: 13 },
        // { x: 0, y: 14 },
        // { x: 1, y: 14 },
        // { x: 2, y: 14 },
        // { x: 3, y: 14 },
        // { x: 19, y: 14 },
        // { x: 20, y: 14 },
        // { x: 21, y: 14 },
        // { x: 22, y: 14 },
        // { x: 0, y: 15 },
        // { x: 1, y: 15 },
        // { x: 2, y: 15 },
        // { x: 20, y: 15 },
        // { x: 21, y: 15 },
        // { x: 22, y: 15 },
        // { x: 0, y: 16 },
        // { x: 1, y: 16 },
        // { x: 2, y: 16 },
        // { x: 3, y: 16 },
        // { x: 4, y: 16 },
        // { x: 18, y: 16 },
        // { x: 19, y: 16 },
        // { x: 20, y: 16 },
        // { x: 21, y: 16 },
        // { x: 22, y: 16 },
        // { x: 0, y: 17 },
        // { x: 1, y: 17 },
        // { x: 2, y: 17 },
        // { x: 3, y: 17 },
        // { x: 4, y: 17 },
        // { x: 5, y: 17 },
        // { x: 9, y: 17 },
        // { x: 10, y: 17 },
        // { x: 11, y: 17 },
        // { x: 12, y: 17 },
        // { x: 13, y: 17 },
        // { x: 17, y: 17 },
        // { x: 18, y: 17 },
        // { x: 19, y: 17 },
        // { x: 20, y: 17 },
        // { x: 21, y: 17 },
        // { x: 22, y: 17 },
        // { x: 0, y: 18 },
        // { x: 1, y: 18 },
        // { x: 2, y: 18 },
        // { x: 7, y: 18 },
        // { x: 8, y: 18 },
        // { x: 9, y: 18 },
        // { x: 10, y: 18 },
        // { x: 12, y: 18 },
        // { x: 13, y: 18 },
        // { x: 14, y: 18 },
        // { x: 15, y: 18 },
        // { x: 20, y: 18 },
        // { x: 21, y: 18 },
        // { x: 22, y: 18 },
        // { x: 0, y: 19 },
        // { x: 1, y: 19 },
        // { x: 2, y: 19 },
        // { x: 3, y: 19 },
        // { x: 6, y: 19 },
        // { x: 7, y: 19 },
        // { x: 8, y: 19 },
        // { x: 9, y: 19 },
        // { x: 13, y: 19 },
        // { x: 14, y: 19 },
        // { x: 15, y: 19 },
        // { x: 16, y: 19 },
        // { x: 19, y: 19 },
        // { x: 20, y: 19 },
        // { x: 21, y: 19 },
        // { x: 22, y: 19 },
        // { x: 0, y: 20 },
        // { x: 2, y: 20 },
        // { x: 3, y: 20 },
        // { x: 4, y: 20 },
        // { x: 6, y: 20 },
        // { x: 7, y: 20 },
        // { x: 8, y: 20 },
        // { x: 14, y: 20 },
        // { x: 15, y: 20 },
        // { x: 16, y: 20 },
        // { x: 18, y: 20 },
        // { x: 19, y: 20 },
        // { x: 20, y: 20 },
        // { x: 22, y: 20 },
        // { x: 0, y: 21 },
        // { x: 3, y: 21 },
        // { x: 4, y: 21 },
        // { x: 6, y: 21 },
        // { x: 7, y: 21 },
        // { x: 15, y: 21 },
        // { x: 16, y: 21 },
        // { x: 18, y: 21 },
        // { x: 19, y: 21 },
        // { x: 22, y: 21 },
        // { x: 0, y: 22 },
        // { x: 1, y: 22 },
        // { x: 2, y: 22 },
        // { x: 3, y: 22 },
        // { x: 4, y: 22 },
        // { x: 5, y: 22 },
        // { x: 6, y: 22 },
        // { x: 7, y: 22 },
        // { x: 8, y: 22 },
        // { x: 9, y: 22 },
        // { x: 10, y: 22 },
        // { x: 11, y: 22 },
        // { x: 12, y: 22 },
        // { x: 13, y: 22 },
        // { x: 14, y: 22 },
        // { x: 15, y: 22 },
        // { x: 16, y: 22 },
        // { x: 17, y: 22 },
        // { x: 18, y: 22 },
        // { x: 19, y: 22 },
        // { x: 20, y: 22 },
        // { x: 21, y: 22 },
        // { x: 22, y: 22 },
    ];

    const ghosts = [
        // call color for ghost same as class name aside for x and y pos
        { x: 10, y: 10, color: 'orange' },
        { x: 12, y: 10, color: 'lightblue' },
        { x: 10, y: 12, color: 'red' },
        { x: 12, y: 12, color: 'pink' },
    ];

    // set the position for all walls
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

    // set position for all coins and remove all coins that were spliced
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

    // set starting point for all ghosts
    function ghostPosition() {
        for (const ghost of ghosts) {
            const ghostDiv = document.createElement('div');
            ghostDiv.classList.add('ghosts');
            ghostDiv.classList.add(ghost.color);
            ghostDiv.style.top = `${(ghost.y * gridCell).toString()}px`;
            ghostDiv.style.left = `${(ghost.x * gridCell).toString()}px`;
            document.querySelector('#board').appendChild(ghostDiv);
        }
    }
    ghostPosition();

    // get the borders for collision
    const boardBorder = function (x, y) {
        if (x < 0 || y < 0 || x > 22 || y > 22) {
            return false;
        }

        return true;
    };

    // get position of wall for collision
    const wallInSpot = function (x, y) {
        for (let i = 0; i < walls.length; i += 1) {
            if (walls[i].x === x && walls[i].y === y) {
                return true;
            }
        }
        return false;
    };

    // get posistion of coins for collision
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

    let executed = 0
    function gameOver() {
        // make sure not to show when winning screen is already up and not to update score again
        if (executed == 0) {
            document.querySelectorAll('.updated-score')[0].innerHTML = score
            const lostSound = new Audio('https://res.cloudinary.com/dg98/video/upload/v1563212979/Sound_19.wav')
            lostSound.play()
            executed += 1
        }
        if (balls.length > 0) {
            document.querySelector('#game-over-screen').style.opacity = '1';
            document.querySelector('#game-over-screen').style.zIndex = '12';
            document.querySelector('header').style.opacity = '0';
            openMouth.volume = 0
        }
    }

    function youWin() {
        if (executed == 0) {
            document.querySelectorAll('.updated-score')[1].innerHTML = score
            const winSound = new Audio('https://res.cloudinary.com/dg98/video/upload/v1563214566/victory.wav')
            winSound.play()
            executed += 1
        }
        document.querySelector('#winning-screen').style.opacity = '1';
        document.querySelector('header').style.opacity = '0';
        openMouth.volume = 0
    }

    for (i = 0; i < 2; i++) {
        document.querySelectorAll('.reload-page')[i].addEventListener('click', function () {
            window.location.reload()
        })
    }

    document.querySelector('#home').addEventListener('click', function(){
        window.location.href = '../index.html';
    })

    const canMoveTo = function (x, y) {
        if (!boardBorder(x, y)) {
            return false;
        }
        if (wallInSpot(x, y)) {
            return false;
        }
        return true;
    };

    function ghostMovement(i) {
        setInterval(() => {
            const { x } = ghosts[i];
            const { y } = ghosts[i];
            const ghostChar = document.querySelectorAll('.ghosts')[i];
            const verticalOrHorizontalMove = Math.floor(Math.random() * 2) ? 'vertical' : 'horizontal';
            const verticalMovement = (Math.floor(Math.random() * 3) - 1); // -1, 0, or 1
            const horizontalMovement = (Math.floor(Math.random() * 3) - 1); // -1, 0, or 1
            switch (verticalOrHorizontalMove) {
                case 'vertical':
                    if (canMoveTo(x, y + verticalMovement)) {
                        ghosts[i].y = y + verticalMovement;
                        ghostChar.style.top = `${ghosts[i].y * gridCell}px`;
                    }
                    if (capman.y === ghosts[i].y && capman.x === ghosts[i].x) {
                        gameOver();
                    }
                    break;
                case 'horizontal':
                    if (canMoveTo(x + horizontalMovement, y)) {
                        ghosts[i].x = x + horizontalMovement;
                        ghostChar.style.left = `${ghosts[i].x * gridCell}px`;
                    }
                    if (capman.x === ghosts[i].x && capman.y === ghosts[i].y) {
                        gameOver();
                    }
            }
        }, 100);
    }
    for (let i = 0; i < ghosts.length; i++) {
        ghostMovement(i);
    }
    function moveCharacterTo(x, y) {
        const capmanChar = document.querySelector('#character');
        capmanChar.style.top = `${(y * gridCell).toString()}px`;
        capmanChar.style.left = `${(x * gridCell).toString()}px`;
        if (ghostInSpot(x, y)) {
            gameOver();
        }
        if (ballInSpot(x, y)) {
            const coin = new Audio('https://res.cloudinary.com/dg98/video/upload/v1563208630/coin.wav')
            coin.volume = 0.25
            coin.play()
            removeBall(x, y);
            ballPosition();
            if (balls <= 0) {
                youWin();
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
        // arrow keys and 'w a s d'
        if ([37, 38, 39, 40, 65, 87, 68, 83].includes(evt.keyCode)) {
            evt.preventDefault();
            // rotate to the direction charcter is going
            switch (evt.keyCode) {
                case 37:
                case 65:
                    moveLeft();
                    document.querySelector('#character').style.transform = 'rotate(180deg)';
                    break;
                case 38:
                case 87:
                    moveUp();
                    document.querySelector('#character').style.transform = 'rotate(270deg)';
                    break;
                case 39:
                case 68:
                    moveRight();
                    document.querySelector('#character').style.transform = 'rotate(0deg)';
                    break;
                case 40:
                case 83:
                    moveDown();
                    document.querySelector('#character').style.transform = 'rotate(90deg)';
                    break;
                default:
            }
        }
    });
    const openMouth = new Audio('https://res.cloudinary.com/dg98/video/upload/v1563207353/jump.wav')
    openMouth.volume = 0.35
    setInterval(() => {
        document.querySelector('#character').classList.toggle('mouth');
        openMouth.play()
    }, 200);
}

stopWatch();
scoreBoard();
board();

