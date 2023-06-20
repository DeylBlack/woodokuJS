let gameScore = 0;
let boardInformation;

function startGame() {
    let currentTime = 0;

    const board = document.getElementById('board');
    let cellsInformation = [];

    boardInformation = {
        coordinates: {
            y_1: board.offsetTop,
            x_1: board.offsetLeft,
            y_2: board.offsetTop + board.offsetHeight,
            x_2: board.offsetLeft + board.offsetWidth,
        },
    }

    console.log(boardInformation)

    console.log(board.offsetTop)

    document.body.onmouseover = (() => {
        let settedFigures = document.querySelectorAll('.setted');

        if (settedFigures.length > 5) {
            console.log('I AM HERE')
            settedFigures.forEach((item) => {
                gameScore += settedFigures.length;
                item.remove();

                let score = document.getElementById('score')
                score.innerText = gameScore * 1000
            })
        }
    });

    for (let i = 1; i < 10; i++) {
        let cell = document.createElement(`div`)
        cell.className = 'cell';
        cell.id = 'cell';
        board.append(cell)

        for (let j = 1; j < 10; j++) {
            const id = i.toString() + ',' + j.toString();

            cellsInformation.push({
                id: id,
                position_i: i,
                position_j: j,
                isClose: false,
            })
            let innerCells = document.createElement(`div`)
            innerCells.className = id
            innerCells.innerText = id

            innerCells.onclick = ((el) => {
                console.log(el.target)
                console.log(getCoords(el.target))
            })

            cell.append(innerCells)
        }
    }

    console.log(cellsInformation)

    const newTimer = setTimeout(() => {
        const timer = document.getElementById('timer');

        currentTime++;

        timer.innerText = currentTime

        const cellListener = document.getElementById('cell')

        console.log(cellListener.children)
    }, 1000)
}

startGame();
